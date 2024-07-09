import { fetchAll } from '@/api-calls/api-movies'
import Loading from '@/components/helpers/Loading'
import ListDisplay from '@/components/movies/ListDisplay'
import MovieFilter from '@/components/movies/MovieFilter'
import SideMenu from '@/components/movies/SideMenu'
import { movieListLinks } from '@/lib/NavLinksMovieTV'
import React, { Suspense } from 'react'


export async function generateStaticParams() {

  return movieListLinks.map(nav => nav.href)
}

export default async function page({ params }: { params: { list: string } }) {

  const { list } = params

  return (
    <div className='relative lg:w-3/4 mx-auto flex'>
      <MovieFilter list={list} />
    </div>
  )
}
