import { MovieProps } from '@/utils/GlobalProps'
import CarouselComp from '../helpers/CarouselComp'
import { fetchAll } from '@/api-calls/api-movies'
import { delay } from '@/utils/delay'

type AllMoviesProps = {
    results: MovieProps[]
}

export default async function Movies({ movieList }: { movieList: string }) {

    await delay(1000)

    const { results }: AllMoviesProps = await fetchAll("movie", movieList, 1)

    return (
        <div className=''>
            <CarouselComp movies={results} />
        </div>
    )
}
