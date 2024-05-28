import Loading from '@/components/helpers/Loading'
import Movie from '@/components/movies/Movie'
import React, { Suspense } from 'react'



export default async function page({ params }: { params: { id: number } }) {

    const { id } = params
    

    return (
        <div className='min-h-screen'>
            <Suspense fallback={<Loading />}>
                <Movie id={id} />
            </Suspense>
        </div>
    )
}