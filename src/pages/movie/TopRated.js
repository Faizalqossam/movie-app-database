import axios from "axios";
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";
import { updateMovies } from "../../features/moviesSlices";
import ENDPOINTS from "../../utils/constants/endpoints";

function TopRatedMovie(){
    const dispatch = useDispatch()

    useEffect(()=>{
        getTopRatedMovies();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    async function getTopRatedMovies(){
        //fecth data dengan axios
        const response = await axios(ENDPOINTS.TOP_RATED);

        //simpan data ke state
        dispatch(updateMovies(response.data.results))
    }

    return(
        <div>
            <Hero />
            <Movies title="Top Rated"  />
        </div>
    )
}

export default TopRatedMovie;