import { MovieProps } from '@/utils/GlobalProps'
import React, { Suspense } from 'react'
import CarouselComp from '../CarouselComp'

type AllMoviesProps = {
    results: MovieProps[]
}

export default async function Movies() {

    await new Promise((resolve) => setTimeout(resolve, 1000))
    const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIE_API}`,
    )
    if (!data.ok) {
        throw new Error("Error")
    }

    const { results }: AllMoviesProps = await data.json()

    return (
        <div className=''>
            <CarouselComp movies={results} />
        </div>
    )
}
