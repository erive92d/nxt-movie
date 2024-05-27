import { fetchAllMovies } from '@/api-calls/api-movies'
import { MovieProps } from '@/utils/GlobalProps'
import { delay } from '@/utils/delay'
import React from 'react'

export default async function MovieList({ list }: { list: string }) {

    await delay(1000)

    const { results: movies }: { results: MovieProps[] } = await fetchAllMovies("movie", list, 1)

    return (
        <div>
            {movies?.map((movie, index) => (
                <div key={index}>
                    {movie.original_title}
                </div>
            ))}
        </div>
    )
}
