"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import Link from "next/link"

type NavLinks = {
    links: {
        name: string
        children: {
            name: string
            href: string
        }[]
    }
    key: number
}

export default function NavigationLink({ links, key }: NavLinks) {

    return (
        <NavigationMenu key={key}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-white">{links.name}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid  w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {links.children.map((child, index) => (
                                <li key={index}>
                                    <Link href={
                                        links.name === "Movies" ?
                                            `/movies/movie-list/${child.href}`
                                            :
                                            `/tv/tv-list/${child.href}`
                                    } legacyBehavior passHref>
                                        {child.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
