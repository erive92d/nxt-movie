import React, { Suspense } from 'react'
import Movies from '../movies/Movies'

export default function TopRated() {
    return (
        <div className=''>
            <Suspense fallback={"loading"}>
                <Movies header='Popular Movies' type="movie" list="popular" />
                <Movies header='Upcoming' type="movie" list="upcoming" />
            </Suspense>
        </div>
    )
}
