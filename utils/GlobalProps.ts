export interface MovieProps {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    tagline: string
    title: string
    video: false
    vote_average: number
    vote_count: number

}

export interface SingleMovie extends MovieProps {
    belongs_to_collection: {
        id: number
        name: string
        poster_path: string
        backdrop_path: string
    }
    genres: {
        id: number
        name: string
    }[]
    production_companies: {
        id: number
        logo_path: string
        name: string
        origin_country: string
    }
    runtime: number
}

export interface SingleTv extends MovieProps {
    name: string
    next_episode_to_air: string
    number_of_episodes: number
    number_of_seasons: 1
}

export interface AllProps extends MovieProps {
    original_name: string
    name: string
    first_air_date: string
}