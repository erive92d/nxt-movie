import Link from 'next/link'
import React from 'react'

export default function Navigation() {

    const navLinksFirst = [
        {
            name: "Movies",
            href: "/movies"
        }, {
            name: "TV shows",
            href:"/tv"
        },  {
            name: "Watchlist",
            href:"/watchlist"
        }
    ]

    const navLinksSecond = [
        {
            name: "Search",
            href: "/search"
        }, {
            name: "Create Account",
            href:"/register"
        }, {
            name: "Sign in",
            href:"/signin"
        }
    ]

  return (
    <div className='bg-zinc-900 flex justify-between px-10 py-6 font-bold '>
            <ul className='flex gap-6 items-center'>
                <h1 className='text-xl text-yellow-500'>Nxtmovies</h1>
                {navLinksFirst.map((nav, index) => (
                    <li key={index}>
                        <Link href={nav.href}>
                            {nav.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className='flex gap-6'>
                {navLinksSecond.map((nav, index) => (
                    <li key={index}>
                        <Link className={`${nav.name === "Create Account" ? "bg-yellow-500 p-1 rounded-lg text-zinc-100": ""}`} href={nav.href}>
                            {nav.name}
                        </Link>
                    </li>
                ))}
            </ul>
    </div>
  )
}
