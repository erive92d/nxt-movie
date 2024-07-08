"use client"

import { fetchAll } from "@/api-calls/api-movies"
import page from "@/app/page"
import { AllProps } from "@/utils/GlobalProps"
import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { delay } from "@/utils/delay"
import Link from "next/link"
import { isMovieType, isTvType } from "@/lib/typeCheckers"


export default function MovieFilter({ list }: { list: string }) {

    const [data, setData] = useState<AllProps[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [page, setPage] = useState<number>(0)

    const [hasMore, setHasMore] = useState(true);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const loadMoreRef = useRef<HTMLDivElement>(null);

    const getData = useCallback(async () => {
        setLoading(true);

        await delay(1000)
        try {
            const response = await fetchAll(list, page);
            if (response.results.length === 0) {
                setHasMore(false);
            } else {
                setData(prevData => [...prevData, ...response.results]);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }

    }, [list, page]);

    useEffect(() => {
        getData();
    }, [getData]);

    useEffect(() => {
        if (observerRef.current) observerRef.current.disconnect();

        observerRef.current = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !loading) {
                    setPage((prevPage) => prevPage + 1);
                }
            },
            {
                root: null,
                rootMargin: '20px',
                threshold: 1.0,
            }
        );

        if (loadMoreRef.current) {
            observerRef.current.observe(loadMoreRef.current);
        }

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, [hasMore, loading]);



    return (
        <div className="min-h-screen flex flex-col gap-2 py-4">
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {data.map(item => (
                    <Link href={`${item.original_name ? `/tv/${item.id}tv` : `/movies/${item.id}`}`} key={item.id}>
                        <Image alt="movie_image" height={500} width={300} src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} />
                    </Link>
                ))}
            </ul>
            {loading && <p className="text-center">Loading </p>}
            {!hasMore && <p>No more data to load.</p>}
            <div ref={loadMoreRef} />
        </div >
    )
}
