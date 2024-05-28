import ListDisplay from "@/components/movies/ListDisplay"
import SideMenu from "@/components/movies/SideMenu"
import { movieListLinks } from "@/lib/NavLinksMovieTV"
import { Loader } from "lucide-react"
import { Suspense } from "react"

export async function generateStaticParams() {

    return movieListLinks.map(nav => nav.href)
}

export default async function page({ params }: { params: { list: string } }) {

    const { list } = params


    return (
        <div className='min-h-screen flex w-3/4 mx-auto'>
          <SideMenu />
            <Suspense fallback={<Loader/>}>
                <ListDisplay list={list} />
            </Suspense>
        </div>
    )
}