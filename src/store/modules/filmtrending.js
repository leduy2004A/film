import { getimagefilm } from "@/apis/film"
const state = ()=>{
    return {
         results : [
        {
          backdrop_path: "/84XPpjGvxNyExjSuLQe0SzioErt.jpg",
          first_air_date: "2008-01-20",
          genre_ids: [
            18,
            80
          ],
          id: 1396,
          name: "Breaking Bad",
          origin_country: [
            "US"
          ],
          original_language: "en",
          original_name: "Breaking Bad",
          overview: "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
          popularity: 318.275,
          poster_path: "/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
          vote_average: 8.9,
          vote_count: 12104
        },
    ]
    }
   
}
const mutations = {
    getFilmTrendingMutaitons(state,payload){
        const {results} = payload;
        state.results = results 
    }
}
const actions = {
    async getFilmTrending(context){
        const data = await getimagefilm();
        context.commit("getFilmTrendingMutaitons",data)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}