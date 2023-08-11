import {similarFilm} from '@/apis/film'
const state = () =>{
    return {
        similar : [
            {
                page: 1,
                results: [
                  {
                    adult: false,
                    backdrop_path: "/vcmOgKBSpStnsfH5P1oZZX2rjbX.jpg",
                    genre_ids: [
                      80
                    ],
                    id: 987592,
                    original_language: "it",
                    original_title: "L'infernale Quaglia",
                    overview: "",
                    popularity: 0.635,
                    poster_path: "/tZCCSX3WwaJuBoFB8jn8y9eKyxo.jpg",
                    release_date: "2022-06-14",
                    title: "L'infernale Quaglia",
                    video: false,
                    vote_average: 0,
                    vote_count: 0
                  }
                ]
              }
              
        ]
    }
}
const mutations = {
    getSimilarFilmMutations(state,payload){
        state.similar = payload;
        console.log(state.similar)
    }
}
const actions = {
    async getSimilarFilm(context,payload){
        const similar = await similarFilm(payload);
        context.commit("getSimilarFilmMutations",similar);
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}