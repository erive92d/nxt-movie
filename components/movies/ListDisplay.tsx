import { fetchAll } from '@/api-calls/api-movies'
import { AllProps } from '@/utils/GlobalProps'
import { delay } from '@/utils/delay'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function ListDisplay({ list }: { list: string }) {

    await delay(1000)

    let type: string
    let isMovie = true

    if (list.includes("tv")) {
        const takeTvOut = list.replace("tv", "")
        list = takeTvOut
        isMovie = false
        type = "tv"
    } else {
        type = "movie"
    }

    const { results: movies }: { results: AllProps[] } = await fetchAll(type, list, 1)
    return (
        <div className='justify-end flex flex-wrap gap-2 '>
            {movies?.map((movie, index) => (
                <Link href={`${isMovie ? `/movies/${movie.id}` : `/tv/${movie.id}`}`} className='hover:shadow-2xl hover:scale-110 duration-200 hover:shadow-yellow-500' key={index}>
                    <Image alt="movie_image" height={450} width={250} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                </Link>
            ))}
        </div>
    )
}
