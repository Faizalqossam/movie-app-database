import axios from "axios";
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";
import { updateMovies } from "../../features/moviesSlices";
import ENDPOINTS from "../../utils/constants/endpoints";

function NowPlayingMovie(){
    const dispatch = useDispatch();

    useEffect(()=>{
        getNowPlayingMovies();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    async function getNowPlayingMovies(){
        //fetch data
        const response = await axios(ENDPOINTS.NOW_PLAYING);

        //simpan data ke state
        dispatch(updateMovies(response.data.results))
    }


    return(
        <div>
            <Hero />
            <Movies title="Now Playing" />
        </div>
    )
}

export default NowPlayingMovie;