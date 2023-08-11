import { createStore } from "vuex";
import filmtrending from "./modules/filmtrending";
import filmchung from "./modules/filmchung";
import casts from "./modules/casts";
import videomovie from "./modules/videomovie";
import similarfilm from "./modules/similarfilm";
import toprated from "./modules/toprated";
import nowfilm from "./modules/nowfilm";
import allfilm from "./modules/allfilm";
const store = createStore({
    modules:{
        filmtrending:filmtrending,
        filmchung:filmchung,
        casts:casts,
        videomovie:videomovie,
        similarfilm:similarfilm,
        toprated:toprated,
        nowfilm:nowfilm,
        allfilm:allfilm
    }
})
export default store