import logoSymbol from '/logo-symbol.svg'
import coin from '/coin.svg'
import styled from 'styled-components'

function TableSection() {
  const rows = [
    ["Certificado Digital", "incluso", "R$ 200/ano"],
    ["Abertura de empresa, 100% digital", "incluso", "R$ 700/ano"],
    ["Contabilidade Consultiva", "incluso", "R$ 5.880/mês"],
    ["Conta PJ gratuita, digital e integrada à sua contabilidade", "incluso", "R$ 756/ano"],
    ["Atendimento personalizado por telefone e WhatsApp a partir do plano de entrada", "incluso", "R$ 1.920/ano"]
  ]

  return (
    <Section>
      <Title>
        Por que a <span>Contabilidade.com</span> é a melhor opção {'{Cidade}'}?
      </Title>

      <StyledTable>
        <thead>
          <tr>
            <th>Benefícios inclusos no seu pacote</th>
            <th><LogoSymbol src={logoSymbol} alt="Logo Contabilidade.com" /></th>
            <th>Média de Mercado</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
              <td>{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <Div>
        <CoinImage src={coin} alt="Moeda" />
        Uma economia média de R$ 9.456/ano
      </Div>

      <Button>Abrir empresa grátis</Button>
    </Section>
  )
}

export default TableSection

// Styled Components
const Section = styled.section`
  margin-top: -7rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 1rem;
  gap: 2rem;
  text-align: center;
`

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.3;
  span {
    color: #1FB841;
  }
`

const StyledTable = styled.table`
  width: 100%;
  max-width: 900px;
  border-collapse: collapse;
  text-align: left;
  font-size: 1rem;

  thead {
    background: #f5f5f5;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 0.75rem 1rem;
  }

  th {
    font-weight: bold;
  }

  td:nth-child(2) {
    text-align: center;
    color: #1FB841;
    font-weight: 600;
  }

  td:nth-child(3) {
    text-align: right;
  }
`

const LogoSymbol = styled.img`
  height: 24px;
  margin: 0 auto;
`

const Div = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  gap: 0.5rem;
  color: #1FB841;
`

const CoinImage = styled.img`
  width: 24px;
  height: 24px;
`

const Button = styled.button`
  background: #2B7ADF;
  color: white;
  border: none;
  border-radius: 9999px;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #1f5fae;
  }
`