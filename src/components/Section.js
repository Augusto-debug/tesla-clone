import React from 'react';
import styled from 'styled-components';

// function Section({titulo, descricao ...}) // Dessa forma nós pegamos diretamente do objeto os valores em si. 


function Section({titulo, descricao, textoBotaoEsquerdo, textoBotaoDireito, imagemFundo}) {
  return (
    <Envolve imagemFundo = {imagemFundo}>
        <TextoItem>
            <h1>{titulo}</h1>
            <p>{descricao}</p>
        </TextoItem>
        <Botoes>
        <AgrupamentoBotoes>
        <BotaoEsquerdo>
            {textoBotaoEsquerdo}
        </BotaoEsquerdo>
        { textoBotaoDireito &&
         <BotaoDireito>
            {textoBotaoDireito}
        </BotaoDireito>}
        
        </AgrupamentoBotoes>
        <Flecha src="img/down-arrow.svg" />
        </Botoes>
    </Envolve>
  )
}

export default Section;

const Envolve = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url('img/${props.imagemFundo}')`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`

const TextoItem = styled.div`
    text-align: center;
    padding-top:15vh;
    
`
const AgrupamentoBotoes = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    @media (max-width:760px) {
        flex-direction:column;
    }
`

const BotaoEsquerdo = styled.div`
    background-color: rgba(23,26,32, 0.8);
    color:white;
    height: 40px;
    width: 256px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity:0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor:pointer;
    margin: 8px;
`

const BotaoDireito = styled(BotaoEsquerdo)`
    background-color: #fff;
    color: black;
    opacity: 0.65;
`

const Flecha = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
`

const Botoes = styled.div`
    
`   