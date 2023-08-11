import {getallfilm} from '@/apis/film'

const state = ()=>{
    return {
        allfilm: [
            {
                page: 1,
                results: [
                {
                adult: false,
                backdrop_path: "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
                genre_ids: [
                16,
                28,
                12,
                878
                ],
                id: 569094,
                original_language: "en",
                original_title: "Spider-Man: Across the Spider-Verse",
                overview: "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
                popularity: 3594.044,
                poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
                release_date: "2023-05-31",
                title: "Spider-Man: Across the Spider-Verse",
                video: false,
                vote_average: 8.5,
                vote_count: 2988
                }
                ]
                }
        ]
    }
}
const mutations = {
    getallfilmmutations(state,payload){
        state.allfilm = payload;
        console.log(state.allfilm)
    }
}
const actions = {
   async getallfilm(context,payload){
        const data = await getallfilm(payload);
        context.commit('getallfilmmutations',data)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}