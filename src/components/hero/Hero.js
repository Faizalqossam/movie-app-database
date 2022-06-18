/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import ENDPOINTS from "../../utils/constants/endpoints";
import Button from "../ui/Button";
import StyledHero from "./Hero.styled";

function Hero(){
    //membuat state movie
    const [movie,setMovies]  = useState("")
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`

    useEffect(getDetailMovie ,[])
    
    //mendapatkan 1 data dari trending movies
    async function getTrendingMovies(){
        const response = await axios(ENDPOINTS.TRANDING);
        return response.data.results[0];

    }

    //membuat fungsi untuk mendapatkan detail movies
    async function getDetailMovie(){
        const trendingMovie = await getTrendingMovies();
        const id = trendingMovie.id;

        //fecth detail movie by id
        const response = await axios(ENDPOINTS.DETAIL(id));

        setMovies(response.data)
    }

    return(
        <StyledHero>
            <section>
                <div>
                    <h2>{movie.title}</h2>
                    <h4>{genres}</h4>
                    <p>{movie.overview}</p>
                    {/* <button className={styles.hero__button}>Watch</button> */}
                    <Button as="a" href={trailer} target="_blank" variant='secondary' size="md">Watch</Button>
                </div>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="placeholder" />
                </div>
            </section>
        </StyledHero>
    )
}

export default Hero;