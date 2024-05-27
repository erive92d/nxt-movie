import { MovieProps } from "@/utils/GlobalProps";


export const filterMoviesByGenre = (movies: MovieProps[], genreId: number): MovieProps[] => {
    return movies.filter(movie => movie.genre_ids.includes(Number(genreId)));
};