import { Container, Links, Content } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>Introdução ao React</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit alias quae eveniet architecto veniam delectus nobis? Quod eligendi dolorum veritatis error temporibus ipsum dolorem eius, rerum sed assumenda itaque nostrum?</p>
          <Section title="Links Uteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>

              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="express"></Tag>
            <Tag title="nodeJS"></Tag>
            <Tag title="SPA"></Tag>
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}
