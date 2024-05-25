import { MovieProps } from "@/utils/GlobalProps";
import BackgroundImage from "../BackgroundImage";
import Link from "next/link";
import Button from "../Button";

type Hero = {
  movie: MovieProps
}

export default async function Hero() {

  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API}`,
  )

  if (!data.ok) {
    throw new Error("Failed to fetch movies")
  }

  const movie: MovieProps = await data.json()
  const currentMovie = movie.results[3]
  console.log(currentMovie)

  return (
    <BackgroundImage src={currentMovie.backdrop_path}>
      <div className="min-h-screen flex flex-col justify-center px-12">
        <h1 className="text-white text-4xl font-bold">{currentMovie.original_title}</h1>
        <div className="space-x-2 mt-4">
          <Button value="More Info" href={`/movies/${currentMovie.id}`} />
          <Button value="Add to Watchlist" />
        </div>
      </div>
    </BackgroundImage>
  )
}
