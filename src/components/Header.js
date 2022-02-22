import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {

  const [statusHamburguer, setStatusHamburguer] = useState(false);

  return (
    <Container>
      <a>
        <img src="/img/logo.svg"></img>
      </a>
      <MenuPrincipal>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </MenuPrincipal>
      <MenuLateral>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <MenuCustomizado onClick={() => setStatusHamburguer(true)} />
      </MenuLateral>
      <MenuHamburguer mostrar={statusHamburguer}>
        <EnvolveFechar>
          <FechaCustomizado onClick={() => setStatusHamburguer(false)} />
        </EnvolveFechar>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roaster</a>
        </li>
        <li>
          <a href="#">Model X</a>
        </li>
      </MenuHamburguer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 1;
`;

const MenuPrincipal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  text-transform: uppercase;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuLateral = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 10px;
`;

const MenuCustomizado = styled(MenuIcon)`
  cursor: pointer;
`;

const MenuHamburguer = styled.div`
  list-style: none;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
                                         /*Verdadeiro          Falso */
  transform: ${props => props.mostrar ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s ease-in-out;

  li {
    margin-bottom: 15px;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    
    a {
      font-weight: 600;
    }
  }
`;

const FechaCustomizado = styled(CloseIcon)`
  cursor: pointer;
`;

const EnvolveFechar = styled.div`
  display: flex;
  justify-content: flex-end;
`;
