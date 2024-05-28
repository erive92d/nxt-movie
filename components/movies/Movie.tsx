import React from 'react'
import BackgroundImage from '../helpers/BackgroundImage'
import { SingleMovie } from '@/utils/GlobalProps'
import Badge from '../helpers/Badge'
import Button from '../helpers/Button'
import { fetchById } from '@/api-calls/api-movies'
import { delay } from '@/utils/delay'


export default async function Movie({ id }: { id: number }) {

    await delay(1000)

    const movie: SingleMovie = await fetchById(id)

    console.log(movie)

    return (
        <BackgroundImage src={movie.poster_path}>
            <div className='min-h-screen text-white gap-6 px-16 flex flex-col justify-center'>
                <div className="space-x-2">
                    <Badge value={!movie.adult ? "Not rated" : "Rated-R"} />
                    <Badge value={movie.original_language} />
                    {movie.runtime ? 
                  <Badge value={movie.runtime} />
                        :
                    null
                }
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
                        <span key={gen.id} className='text-sm font-thin'>
                            {gen.name}
                        </span>)}
                </div>
            </div>
        </BackgroundImage>
    )
}
