import styled from "styled-components"

const StyledHero = styled.div`
    margin: 1rem;

    section{
        display: flex;
        flex-direction: column;
        text-align: center;
        font-family: 'Poppins',sans-serif;
    }

    div{
        margin-bottom: 1rem;
    }

    h2{
        color: #4361ee;
        margin-bottom: 1rem;
        font-size: 2.44rem;
    }

    h4{
        color: #b5179e;
        margin-bottom: 1rem;
        font-size: 1.50rem;
    }

    p{
        color: #64748b;
        margin-bottom: 2rem;
    }

    img{
        max-width: 100%;
        height: auto;
        border-radius: 25px;
    }

    //large screen
    @media screen and (min-width: 992px){
        max-width: 1200px;
        margin: 3rem auto;

        section{
            margin: 0 1rem;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        div{
            flex-basis: 40%;
            text-align: left;
        }

        div{
            flex-basis: 30%;
            justify-content: end;
        }
    }
`
export default StyledHero;