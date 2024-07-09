import Link from 'next/link'
import React from 'react'

type LinkType = {
    type: string
    value: string
    target: string
}

export default function LinkButton({ type, value, target }: LinkType) {
    const hrefType = type === "movies" ? "/movies/movie-list/" : "/tv/tv-list/"

    return (
        <Link href={hrefType + target} type={type}>
            {value}
        </Link>
    )
}
