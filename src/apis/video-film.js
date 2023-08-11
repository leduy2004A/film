import axiosApi from ".";
export const getvideo = (idmovie)=>{
    return axiosApi.get(`movie/${idmovie}/videos`)
}