import { SingleMovie, SingleTv } from "@/utils/GlobalProps"

export const fetchAll = async (type: string, movieList: string, page: number) => {

    try {
        const data = await fetch(`https://api.themoviedb.org/3/${type}/${movieList}?api_key=${process.env.MOVIE_API}&page=${page}`,
        )
        if (!data.ok) {
            throw new Error("Failed to fetch movies")
        }
        return await data.json()
    } catch (error) {
        throw new Error("Api call error")
    }
}

export const fetchById = async (id: number) => {
    let type: string

    if (id.toString().includes("tv")) {
        type = "tv"
    } else {
        type = "movie"
    }

    try {
        const search = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.MOVIE_API}`)
        if (!search.ok) {
            throw new Error("Error")
        }
        return await search.json()
    } catch (error) {
        throw new Error("Api call error")
    }
}

export const fetchCategories = async (genre: string) => {
    try {
        const categories = await fetch(`https://api.themoviedb.org/3/genre/${genre}/list?api_key=${process.env.MOVIE_API}`)
        if (!categories.ok) {
            throw new Error("Error")
        }
        return await categories.json()
    } catch (error) {
        throw new Error("Api call error")
    }
}