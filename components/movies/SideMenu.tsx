"use client"
import { movieListLinks, tvListLinks } from '@/lib/NavLinksMovieTV'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import React, { useEffect, useState } from 'react'

type ListType = {
    name: string
    href: string
}

export default function SideMenu() {

    const pathname = usePathname()

    const links = useMemo<ListType[]>(() => {
        if (pathname.includes('movies')) {
            return movieListLinks;
        } else {
            return tvListLinks;
        }
    }, [pathname]);

    return (
        <div className='bg-zinc-700'>
            <ul>
                {links?.map((movie, index) => (
                    <li key={index}>
                        <Link href={movie.href}>
                            {movie.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
