import React from 'react'
import BackgroundImage from '../BackgroundImage'

export default async function Movie({ id }: { id: string }) {

    await new Promise((resolve) => setTimeout(resolve, 1000))
    const search = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MOVIE_API}`)

    if (!search.ok) {
        throw new Error("Error")
    }

    const movie = await search.json()
    return (
        <BackgroundImage src={movie.poster_path}>
            <div className='min-h-80'>
                {movie.original_title}
            </div>
        </BackgroundImage>
    )
}
