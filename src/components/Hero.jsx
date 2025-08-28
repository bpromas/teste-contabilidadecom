import styled from 'styled-components'
import LaptopOutline from '/laptop-outline.svg'
import HandOutline from '/hand-outline.svg'
import LogoReceitaFederal from '/logo-receita-federal.svg'
import HeroImage from '/hero-image.png'

function Hero() {
  return (
    <Section>
      <Content>
        <Title>
          Abra sua empresa em {'{Cidade}'} de forma <span>rápida</span> e <span>sem burocracia</span>
        </Title>

        <List>
          <ListItem>
            <Icon src={LaptopOutline} alt="" />
            Plataforma simples e completa, com emissor de notas fiscais
          </ListItem>
          <ListItem>
            <Icon src={HandOutline} alt="" />
            Atendimento personalizado e consultivo
          </ListItem>
          <ListItem>
            <Icon src={LogoReceitaFederal} alt="" />
            Abertura mais ágil do mercado. Seu CNPJ em até 3 dias úteis
          </ListItem>
        </List>

        <Button>Quero abrir minha empresa</Button>
        <Crc>CRC SP-2SP038830/O-1</Crc>
      </Content>

      <ImageWrapper>
        <Image src={HeroImage} alt="Ilustração de abertura de empresa" />
      </ImageWrapper>
    </Section>
  )
}

export default Hero

// styled-components
const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
  gap: 2rem;
  width: 80%;
  margin: 0rem auto;
`

const Content = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.3;

  span {
    color: #2BBE41;
  }
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
  margin: 0;
`

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
`

const Icon = styled.img`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
`

const Button = styled.button`
  background: #2b7adf;
  color: white;
  border: none;
  border-radius: 999px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  width: fit-content;
  cursor: pointer;
`

const Crc = styled.p`
  font-size: 0.8rem`

const ImageWrapper = styled.div`
  flex: 2;
  @media (max-width: 800px) {
    display: none;
  }
`

const Image = styled.img`
  max-width: 100%;
`