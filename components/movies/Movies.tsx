import { MovieProps } from '@/utils/GlobalProps'
import CarouselComp from '../helpers/CarouselComp'
import { fetchAll } from '@/api-calls/api-movies'
import { delay } from '@/utils/delay'

type AllMoviesProps = {
    results: MovieProps[]
}

export default async function Movies({ type, list, header }: { type: string, list: string, header: string }) {

    await delay(1000)

    const { results }: AllMoviesProps = await fetchAll(type, list, 1)

    return (
        <div className='my-4 border-b'>
            <h1 className='text-3xl font-bold text-white py-8'>{header}</h1>
            <CarouselComp type={type} movies={results} />
        </div>
    )
}
