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
  
    const currentLink = links.find(link => pathname.includes(link.href))
  

    return (
        <div className='fixed left-32  top-32 min-w-40'>
            <h1 className='text-2xl text-white font-bold mb-4'>{currentLink?.name}</h1>
            <ul className='bg-zinc-700 border'>
                {links?.map((link, index) => (
                    <li className={`bg-zinc-700 ${pathname.includes(link.href) ? "font-bold text-yellow-500": ""} mb-2  p-2 text-xl `} key={index}>
                        <Link href={link.href}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
