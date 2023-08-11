import {getCasts} from '@/apis/casts'

const state = ()=>{
    return {
        CastsDetail : [
            {
                id: 1396,
                CastsMain: [
                    {
                       adult: false,
                gender: 1,
                id: 55512,
                known_for_department: "Acting",
                name: "Margarita Terekhova",
                original_name: "Margarita Terekhova",
                popularity: 2.612,
                profile_path: "/G9FgIWxn0BNwUXeyBguCagzwQG.jpg",
                cast_id: 5,
                character: "Natalya / Maroussia - the Mother",
                credit_id: "52fe42f3c3a36847f802f0d1",
                order: 0 
                    }
                ]
    
              }
        ]
    }
}
const mutations = {
    getActorMutations(state,payload){
        state.CastsDetail = payload;
       
    } 
}
const actions = {
   async getActor(context,payload){
        const dataActor = await getCasts(payload);
        context.commit('getActorMutations',dataActor);
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}