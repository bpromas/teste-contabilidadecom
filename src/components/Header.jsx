import logoSymbol from '/logo-symbol.svg'
import logoText from '/logo-text.svg'
import styled from 'styled-components'



function Header() {
  return(
    <Component>
      <Wrapper>
        <LogoWrapper>
          <LogoSymbol src={logoSymbol} alt="Logo" />
          <LogoText src={logoText} alt="contabilidade.com" />
        </LogoWrapper>
        <NavbarList>
          <NavbarItem>Serviços</NavbarItem>
          <NavbarItem>Planos</NavbarItem>
          <NavbarItem>Conteúdos</NavbarItem>
          <NavbarItem>Contratantes</NavbarItem>
          <NavbarItem>Como Funciona</NavbarItem>
        </NavbarList>
        <ButtonWrapper>
            <ButtonPrimary>Entrar</ButtonPrimary>
            <ButtonSecondary>Abrir Empresa</ButtonSecondary>
        </ButtonWrapper>

        
        <Hamburger>
          <span />
          <span />
          <span />
        </Hamburger>
      </Wrapper>
    </Component>
  )
}

export default Header

const Component = styled.header`
background-color: #fff;
display: flex;
width: 100%;
height: 72px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 4px;
`

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
margin: 0rem auto;
padding: 1rem 0rem;
width: 80%;
`

const LogoWrapper = styled.div``

const LogoSymbol = styled.img``

const LogoText = styled.img`
  @media (max-width: 1040px) {
    display: none;
  }
`

const NavbarList = styled.ul`
display: flex;
gap: 12px;
list-style: none;
justify-content: space-between;
align-items: center;
@media (max-width: 800px) {
    display: none;
  }
`

const NavbarItem = styled.li`
cursor: pointer;
`

const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 800px) {
    display: none;
  }
`

const ButtonPrimary = styled.a`
color: rgb(43, 190, 65);
margin-right: 1.25rem;
cursor: pointer;
`

const ButtonSecondary = styled.a`
padding: 0.75rem 1.5rem;
border-radius: 3.125rem;
color: rgb(255, 255, 255);
background-color: rgb(43, 190, 65);
height: 1.125rem;
cursor: pointer;
`

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background: black;
    margin: 4px 0;
    border-radius: 5px;
    transition: 0.3s;
  }

  @media (max-width: 800px) {
    display: flex;
  }
`