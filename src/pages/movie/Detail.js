import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/movies/Movies";
import { updateMovies } from "../../features/moviesSlices";
import ENDPOINTS from "../../utils/constants/endpoints";

function Detail(){
    const params = useParams();

    const dispatch = useDispatch();
    
    useEffect(()=>{
        getRecomendationMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[params.id])
    
    async function getRecomendationMovies(){
        const response = await axios(ENDPOINTS.RECOMMENDATIONS(params.id));

        dispatch(updateMovies(response.data.results))
    }

    return(
        <>
        <DetailMovie />
        <Movies title="Recommendation Movies" />
        </>
    )
}

export default Detail;