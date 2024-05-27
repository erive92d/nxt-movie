import Link from 'next/link'
import React from 'react'
import NavigationLink from './NavigationLink'
import { fetchCategories } from '@/api-calls/api-movies'
import { movieListLinks, tvListLinks } from '@/lib/NavLinksMovieTV'

export default async function Navigation() {

    const movieGenres = await fetchCategories("movie")
    const tvGenres = await fetchCategories("tv")

    const navLinksFirst = [
        {
            name: "Movies",
            children: movieListLinks
        },
        {
            name: "TV",
            children: tvListLinks
        }
    ]

    const navLinksSecond = [
        {
            name: "Search",
            href: "/search"
        }, {
            name: "Create Account",
            href: "/register"
        }, {
            name: "Sign in",
            href: "/signin"
        }
    ]

    return (
        <div className='bg-zinc-900 flex justify-between px-10 py-6 font-bold '>
            <ul className='flex gap-6 items-center'>
                <Link href="/" className='text-xl text-yellow-500 '>Nxtmovies</Link>
                {navLinksFirst.map((nav, index) => (
                    <NavigationLink links={nav} key={index} />
                ))}
            </ul>
            <ul className='flex gap-6 items-center'>
                {navLinksSecond.map((nav, index) => (
                    <li className='' key={index}>
                        <Link className={`${nav.name === "Create Account" ? "bg-yellow-500 p-2 rounded-lg text-zinc-100" : ""}`} href={nav.href}>
                            {nav.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
