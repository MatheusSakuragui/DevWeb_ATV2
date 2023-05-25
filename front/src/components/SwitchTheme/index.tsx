import styled from "styled-components";
import { useContexto } from "../../hooks";
import { lightTheme, darkTheme } from "../../styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'


export function SwitchTheme(){
    const { myTheme, setMyTheme } = useContexto();

    const changeTheme = () => {
        const newTheme = myTheme.name === 'light' ? darkTheme : lightTheme;
        setMyTheme(newTheme)
    }

    return(
        <></>
    )
}

const SwitchButtonSld = styled.button`
    position:absolute;
    bottom: 10px;
    right:10px;
    background-color: transparent;
    font-size: 6rem;
    border: none;
    color: ${(props => props.theme.text)};
    &:hover{
        cursor:pointer;
    }
`