import React, { Suspense } from 'react'
import Movies from '../movies/Movies'

export default function TopRated() {
    return (
        <div className='min-h-60 px-16'>
            <Suspense fallback={"loading"}>
                <Movies header='Top Movies' type="movie" list="top_rated" />
                <Movies header='Top Tv Shows' type="tv" list="top_rated" />
            </Suspense>
        </div>
    )
}
