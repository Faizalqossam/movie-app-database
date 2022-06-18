//import styled components
import styled,{css} from "styled-components";

//Membuat component button
const Button = styled.button`
    border-radius: 10px;
    color: #fff;
    border: none;
    cursor: pointer; 
    font-family: 'Poppins',sans-serif;

    //PROPS FULL
    ${(props) => props.full && css`
    display: block;
    width: 60%;
    `}

    //PROPS SIZE
    ${(props) => props.size && css`
    font-size: ${props.theme.sizes[props.size].font};
    padding: ${props.theme.sizes[props.size].padding};
    `}

    //PROPS VARIANT
    background-color: ${({theme,variant}) => theme.colors[variant] || theme.colors["primary"]}
`;

//export component button
export default Button;