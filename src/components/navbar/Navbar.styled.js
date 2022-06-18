
import styled from "styled-components"

const StyledNavbar = styled.div`
    background-color: #4361ee;
    padding: 1rem;
    color: #fff;

    nav{
        display: flex;
        flex-direction: column;
        font-family: 'Poppins',sans-serif;
    }

    h1{
        font-size: 2.4rem;
        margin-bottom: 1rem;
    }

    ul{
        display: flex;
        flex-direction: column;
        list-style: none;
    }

    li{
        margin-bottom: 1rem;
    }

    .link{
        text-decoration: none;
        color: #fff;
    }

    @media screen and (min-width: 768px){
        nav{
            margin: 0 1rem;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        div{
            flex-basis: 47%;
            text-align: left;
        }

        div{
            flex-basis: 45%; 
        }

        h1{
            margin-bottom: 0;
            text-align: center; 
        }

        ul{
            flex-direction: row;
        }

        li{
            margin 0 1rem;
        }
    }
`
export default StyledNavbar;