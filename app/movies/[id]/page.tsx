import BackgroundImage from '@/components/BackgroundImage'
import Loading from '@/components/Loading'
import Movie from '@/components/movies/Movie'
import React, { Suspense } from 'react'

export default async function page({ params }: { params: { id: string } }) {

    const { id } = params

    return (
        <div className='min-h-screen'>
            <Suspense fallback={<Loading />}>
                <Movie id={id} />
            </Suspense>
        </div>
    )
}
