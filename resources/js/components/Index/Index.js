import React from 'react';
import ReactDOM from 'react-dom';
import { Right } from '../styled-components/divs/GridAreas';
import styled from 'styled-components';

const Index = () => {
    return (
        <>
            <h1>RANDOM VET</h1>
            <h3>Gerenciamento de Solicitações para Veterinária</h3>
            <p>Sistema desenvolvido para o cumprimento do desafio <a target="_blank" href="https://github.com/sergiopallet/code-challenge-lifevet">code-challenge-lifevet</a> proposto por <a target="_blank" href="https://github.com/sergiopallet">sergiopallet</a></p>
        </>
     );
}

export default Index;

const div = document.getElementById('indexDiv');
if(div){
    ReactDOM.render(<Index></Index>, div);
}
