export const isMovieType = (val: string) => {
    if (val.includes("tv")) {
        return false
    }
    return true
}

export const isTvType = (val: string) => {
    if (val.includes("tv")) {
        return true
    }
    return false
}