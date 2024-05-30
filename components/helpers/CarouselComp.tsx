import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { MovieProps } from "@/utils/GlobalProps"
import Image from "next/image"
import Link from "next/link"


import React from 'react'

export default function CarouselComp({ movies, type }: { movies: MovieProps[], type: string }) {

    return (
        <Carousel>
            <CarouselContent>
                {movies?.map((movie, index) => (
                    <CarouselItem key={index} className=" basis-1/5 hover:shadow-2xl hover:scale-110 duration-200 hover:shadow-yellow-500">
                        <Link href={`${type === "movie" ? `/movies/${movie.id}` : `/tv/${movie.id}tv`}`}>
                            <Image alt="movie_image" height={500} width={300} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    )
}
