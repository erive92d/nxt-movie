import React, { Suspense } from 'react'
import Movies from '../movies/Movies'

export default function TopRated() {
    return (
        <div className='min-h-60 px-16'>
            <h1 className='text-3xl text-yellow-500 font-bold py-8'>Top Rated</h1>
            <Suspense fallback={"loading"}>
                <Movies movieList="top_rated" />
            </Suspense>
        </div>
    )
}
