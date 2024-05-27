import { MovieProps } from "@/utils/GlobalProps";
import BackgroundImage from "../helpers/BackgroundImage";
import Button from "../helpers/Button";
import { fetchAllMovies } from "@/api-calls/api-movies";

type HeroProps = {
  results: MovieProps[]
}

export default async function Hero() {


  const { results }: HeroProps = await fetchAllMovies("movie", "popular", 1)

  const currentMovie = results[1]

  return (
    <BackgroundImage src={currentMovie.backdrop_path}>
      <div className="min-h-screen flex flex-col justify-center px-16">
        <h1 className="text-white text-4xl font-bold">{currentMovie.original_title}</h1>
        <div className="space-x-2 mt-4">
          <Button value="More Info" href={`/movies/${currentMovie.id}`} />
          <Button value="Add to Watchlist" />
        </div>
      </div>
    </BackgroundImage>
  )
}
