import Container from "../components/container";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

function Layout(props){
    return(
        <>
        <Navbar/>
            <main>
                <Container>{props.children}</Container>
            </main>
        <Footer/>
        </>

    )
}

export default Layout;