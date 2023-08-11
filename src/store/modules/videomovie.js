import {getvideo} from '@/apis/video-film'
const state = () =>{
    return {
        video:[
            {
                id: 1396,
                results: [
                  {
                    iso_639_1: "en",
                    iso_3166_1: "US",
                    name: "Restoration Trailer",
                    key: "S2U9TXmYJ94",
                    site: "YouTube",
                    size: 1080,
                    type: "Trailer",
                    official: true,
                    published_at: "2021-01-22T19:45:12.000Z",
                    id: "622d375fe210230078e18002"
                  }
                ]
              }
        ]
    }
}
const mutations = {
    getVideoMutations(state,payload){
        state.video = payload;
    }
}
const actions = {
  async getVideo(context,payload){
        const datavideo = await getvideo(payload);
        context.commit('getVideoMutations',datavideo)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}