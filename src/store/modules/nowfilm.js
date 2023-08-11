import {nowFilm} from '@/apis/film'
const state = ()=>{
    return {
        nowFilm : [
            {
                
                    dates: {
                    maximum: "2023-08-16",
                    minimum: "2023-06-29"
                    },
                    page: 1,
                    results: [
                    {
                    adult: false,
                    backdrop_path: "/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
                    genre_ids: [
                    28,
                    12,
                    878
                    ],
                    id: 667538,
                    original_language: "en",
                    original_title: "Transformers: Rise of the Beasts",
                    overview: "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
                    popularity: 2427.109,
                    poster_path: "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
                    release_date: "2023-06-06",
                    title: "Transformers: Rise of the Beasts",
                    video: false,
                    vote_average: 7.5,
                    vote_count: 2544
                
                    },
                ]
                }
            
        ]
    }
}
const mutations = {
    getfilmmutations(state,payload){
        state.nowFilm = payload;
    }
}
const actions = {
   async getNowfilm(context){
        const data = await nowFilm();
        context.commit('getfilmmutations',data);
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}