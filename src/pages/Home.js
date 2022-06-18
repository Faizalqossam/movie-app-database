import Hero from "../components/hero/Hero";
import Movies from "../components/movies/Movies";

function Home(){

    return(
        <div>
            <Hero />
            <Movies title="Latest Movies"/>
        </div>
    )

}

export default Home;