import MovieList from '@/components/movies/MovieList'
import SideMenu from '@/components/movies/SideMenu'
import { movieListLinks } from '@/lib/NavLinksMovieTV'
import React, { Suspense } from 'react'


export async function generateStaticParams() {

  return movieListLinks.map(nav => nav.href)
}

export default async function page({ params }: { params: { list: string } }) {

  const { list } = params

  return (
    <div className='min-h-screen flex justify-between'>
      <SideMenu />
      <Suspense fallback={"loading..."}>
        <MovieList list={list} />
      </Suspense>
    </div>
  )
}
