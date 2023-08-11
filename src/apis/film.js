import axiosApi from ".";
export const getimagefilm = ()=>{
    return axiosApi.get('trending/movie/day?language=en-US')
}
export const detailMovie = (idmovie) =>{
    return axiosApi.get(`movie/${idmovie}`)
}
export const similarFilm = (idmovie) => {
    return axiosApi.get(`movie/${idmovie}/similar`)
}
export const topRatedFilm = ()=>{
    return axiosApi.get(`movie/top_rated`)
}
export const nowFilm = () =>{
    return axiosApi.get(`movie/now_playing`)
}
export const getallfilm = (page) =>{
    return axiosApi.get(`movie/popular?page=${page}`)
}