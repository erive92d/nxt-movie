import { fetchAll } from '@/api-calls/api-movies'
import { AllProps } from '@/utils/GlobalProps'
import { delay } from '@/utils/delay'
import React from 'react'

export default async function MovieList({ list }: { list: string }) {

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
        <div>
            {movies?.map((movie, index) => (
                <div key={index}>
                    {isMovie ? movie.original_title : movie.original_name}
                </div>
            ))}
        </div>
    )
}
