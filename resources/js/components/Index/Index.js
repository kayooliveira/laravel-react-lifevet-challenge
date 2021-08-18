import React from 'react';
import ReactDOM from 'react-dom';
import { Right } from '../styled-components/divs/GridAreas';
import styled from 'styled-components';

const H1 = styled.h1`
    text-transform:uppercase;
    color: #8bf7ea;
    text-align:center;
    font-size:60px;
    font-weight:bold
`
const H3 = styled.h3`
    text-align:center;
    color: white;
    &#subtitle{
        text-transform:uppercase;
    }
`
const Index = () => {
    return (
        <Right>
            <H1>RANDOM VET</H1>
            <H3 id="subtitle">Visualicação e Criação de Solicitações para Veterinária</H3>
            <hr></hr>
            <H3>Desenvolvido para o cumprimento do <a target="_blank" href="https://github.com/sergiopallet/code-challenge-lifevet">code-challenge-lifevet</a> proposto por <a target="_blank" href="https://github.com/sergiopallet">sergiopallet</a></H3>
        </Right>
     );
}

export default Index;

const div = document.getElementById('indexDiv');
if(div){
    ReactDOM.render(<Index></Index>, div);
}
