import axiosApi from ".";
export const getCasts = (idmovie)=>{
    return axiosApi.get(`movie/${idmovie}/credits`)
} 