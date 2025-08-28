import styled from 'styled-components'
import Brasil from '/brasil.svg'

function CTA() {
  return (
    <Div>
      <ImageWrapper>
        <Image src={Brasil} alt="Brasil" />
      </ImageWrapper>
      <Content>
        <Title>
          Quer abrir sua empresa <br/> em outra cidade?
        </Title>

        <Paragraph>Sem custo ou taxa de abertura em +200 cidades</Paragraph>

        <Link>Quero abrir minha empresa -&gt;</Link>
      </Content>
    </Div>
  )
}

export default CTA

// styled-components
const Div = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 3rem 2rem;
  width: fit-content;
  margin: 0rem auto;
  border-radius: 12px;
  filter: drop-shadow(0 0 0.75rem #DCEEFF);
`

const Paragraph = styled.p``

const Content = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Title = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  line-height: 24px;
`

const ImageWrapper = styled.div`
  flex: 1;
`

const Image = styled.img`
  max-width: 100%;
`

const Link = styled.a`
  color: #2B79DF;
  text-decoration: underline;
`