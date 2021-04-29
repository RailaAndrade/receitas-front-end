import { Container, Content} from "./styles";
import logo from '../../assets/logo.svg'
import { IoIosLogOut,IoIosAdd} from "react-icons/io";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

interface HeaderProps{
    onOpenModal:()=> void;
}

export function Header({onOpenModal}:HeaderProps) {
    const { signOut,usuario} = useAuth();

    return (
        <Container>
            <Content>
                
                <span><div><img src={logo}></img></div>Receitas</span>
                <h5>Olá! {usuario.nome}</h5>
                <button type="button" onClick={onOpenModal}> <IoIosAdd></IoIosAdd>nova receita</button>
                <button className='logout' type="button" onClick={signOut}><IoIosLogOut></IoIosLogOut> </button>
            </Content>
           
        </Container>
    )
}