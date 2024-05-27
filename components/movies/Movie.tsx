import React from 'react'
import BackgroundImage from '../BackgroundImage'
import { SingleMovie } from '@/utils/GlobalProps'
import Badge from '../Badge'
import Button from '../Button'
import Image from 'next/image'


export default async function Movie({ id }: { id: string }) {

    await new Promise((resolve) => setTimeout(resolve, 1000))
    const search = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MOVIE_API}`)

    if (!search.ok) {
        throw new Error("Error")
    }

    const movie: SingleMovie = await search.json()

    console.log(movie)


    return (
        <BackgroundImage src={movie.poster_path}>
            <div className='min-h-screen text-white gap-6 px-16 flex flex-col justify-center'>
                <div className="space-x-2">
                    <Badge value={!movie.adult ? "Not rated" : "Rated-R"} />
                    <Badge value={movie.original_language} />
                    <Badge value={movie.runtime} />
                </div>
                <h1 className='text-5xl font-bold '>
                    {movie.original_title}
                </h1>
                <div>
                    <Button value="Add to Watchlist" />
                </div>
                <p className=''>
                    {movie.overview}
                </p>
                <div className='space-x-2'>
                    {movie.genres.map(gen =>
                        <span className='text-sm font-thin'>
                            {gen.name}
                        </span>)}
                </div>
            </div>
        </BackgroundImage>
    )
}
