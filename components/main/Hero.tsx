import { MovieProps } from "@/utils/GlobalProps";
import BackgroundImage from "../BackgroundImage";

type Hero = {
    movie:MovieProps
}

export default async function Hero() {
    
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API}`,
)

if(!data.ok) {
  throw new Error("Failed to fetch movies")
}

const movie:MovieProps = await data.json()
const currentMovie = movie.results[1]


  return (
    <BackgroundImage src={currentMovie.backdrop_path}>
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-bold">{currentMovie.original_title}</h1>
        </div>
    </BackgroundImage>
  )
}
