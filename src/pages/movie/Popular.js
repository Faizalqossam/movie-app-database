import axios from "axios";
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies"
import { updateMovies } from "../../features/moviesSlices";
import ENDPOINTS from "../../utils/constants/endpoints";

function PopularMovie(){
    const dispatch = useDispatch();

    useEffect(() =>{
        getPopularMovies();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    async function getPopularMovies(){
         //fecth data dengan axios
        const response = await axios(ENDPOINTS.POPULAR);

        //simpan data ke state movie
        dispatch(updateMovies(response.data.results))
    }

    return(
        <div>
            <Hero />
            <Movies title="Popular Movies" />
        </div>
    )
}

export default PopularMovie;