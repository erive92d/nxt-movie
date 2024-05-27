import { fetchAllMovies } from '@/api-calls/api-movies';
import Loading from '@/components/helpers/Loading'
import Movie from '@/components/movies/Movie'
import { MovieProps } from '@/utils/GlobalProps';
import React, { Suspense } from 'react'


export async function generateStaticParams() {

    const { results: movies }: { results: MovieProps[] } = await fetchAllMovies("movie", "popular", 1)

    return movies?.map(movie => ({
        id: movie.id.toString(),
    }));
}

export default async function page({ params }: { params: { id: number } }) {

    const { id } = params

    return (
        <div className='min-h-screen'>
            <Suspense fallback={<Loading />}>
                <Movie id={id} />
            </Suspense>
        </div>
    )
}

