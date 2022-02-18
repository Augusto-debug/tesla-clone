import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
        <Section 
            titulo = 'Model S'
            descricao = 'Order Online for Touchless Delivery'
            imagemFundo = 'model-s.jpg'
            textoBotaoEsquerdo = 'Custom Order'
            textoBotaoDireito = 'Existing Inventory'
        />
        <Section 
            titulo = 'Model Y'
            descricao = 'Order Online for Touchless Delivery'
            imagemFundo = 'model-y.jpg'
            textoBotaoEsquerdo = 'Custom Order'
            textoBotaoDireito = 'Existing Inventory'/>
        <Section 
            titulo = 'Model X'
            descricao = 'Order Online for Touchless Delivery'
            imagemFundo = 'model-x.jpg'
            textoBotaoEsquerdo = 'Custom Order'
            textoBotaoDireito = 'Existing Inventory'
        />
        <Section 
            titulo = 'Model 3'
            descricao = 'Order Online for Touchless Delivery'
            imagemFundo = 'model-3.jpg'
            textoBotaoEsquerdo = 'Custom Order'
            textoBotaoDireito = 'Existing Inventory'
        />
        <Section 
            titulo = 'Lowest Cost Solar Panels in America'
            descricao = 'Money-back guarantee'
            imagemFundo = 'solar-panel.jpg'
            textoBotaoEsquerdo = 'Order Now'
            textoBotaoDireito = 'Learn More'
        />
        <Section 
            titulo = 'Solar for new Roofs'
            descricao = 'Solar Roof costs Less than a New Roof Plus Solar Panels'
            imagemFundo = 'solar-roof.jpg'
            textoBotaoEsquerdo = 'Order Now'
            textoBotaoDireito = 'Learn More'
        />
        <Section 
            titulo = 'Accessories'
            descricao = ''
            imagemFundo = 'accessories.jpg'
            textoBotaoEsquerdo = 'Shop Now'
        />
    </Container>
  )
}

export default Home;

const Container = styled.div`
    height: 100vh;
`