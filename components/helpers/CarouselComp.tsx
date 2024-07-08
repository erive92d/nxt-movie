import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { isMovieType } from "@/lib/typeCheckers"
import { MovieProps } from "@/utils/GlobalProps"
import Image from "next/image"
import Link from "next/link"


import React from 'react'

export default function CarouselComp({ movies, type }: { movies: MovieProps[], type: string }) {

    return (
        <Carousel>
            <CarouselContent>
                {movies?.map((movie, index) => (
                    <CarouselItem key={index} className=" basis-1/6 hover:shadow-2xl hover:scale-105 duration-200 ">
                        <Link href={`${isMovieType(type) ? `/movies/${movie.id}` : `/tv/${movie.id}tv`}`}>
                            <Image alt="movie_image" unoptimized width={300} height={100} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    )
}
