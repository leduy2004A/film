import {detailMovie} from '@/apis/film'

const state = ()=>{
    return {
         film : [
            {
                adult: false,
                backdrop_path: "/5t3ObSn7mRi2QpV9Rs7heb3y9rJ.jpg",
                belongs_to_collection: null,
                budget: 825370,
                genres: [
                  {
                    id: 18,
                    name: "Drama"
                  },
                  {
                    id: 36,
                    name: "History"
                  }
                ],
                homepage: "",
                id: 1396,
                imdb_id: "tt0072443",
                original_language: "ru",
                original_title: "Зеркало",
                overview: "A dying man in his forties recalls his childhood, his mother, the war and personal moments that tell of and juxtapose pivotal moments in Soviet history with daily life.",
                popularity: 18.232,
                poster_path: "/AttDP5OEsMxtHPPN7Z92p2Ntnmd.jpg",
                production_companies: [
                  {
                    id: 344,
                    logo_path: "/xenuUvcunUNpbaDOYGhWZERaym7.png",
                    name: "Mosfilm",
                    origin_country: "SU"
                  }
                ],
                production_countries: [
                  {
                    iso_3166_1: "SU",
                    name: "Soviet Union"
                  }
                ],
                release_date: "1975-03-07",
                revenue: 119266,
                runtime: 107,
                spoken_languages: [
                  {
                    english_name: "Spanish",
                    iso_639_1: "es",
                    name: "Español"
                  },
                  {
                    english_name: "Russian",
                    iso_639_1: "ru",
                    name: "Pусский"
                  }
                ],
                status: "Released",
                tagline: "",
                title: "Mirror",
                video: false,
                vote_average: 8.008,
                vote_count: 819
              }
              
    ]
    }
   
}
const mutations = {
    getDetaiMovieMutations(state,payload){
        state.film = payload;
        
    }
}
const actions ={
   async getDetaiMovie(context,payload){
        const datamovie = await detailMovie(payload);
        context.commit('getDetaiMovieMutations',datamovie);
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}