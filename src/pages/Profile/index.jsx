import { Container, Form,Avatar } from "./style"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
export function Profile() {
  return (
    <Container>
      <header>
        <a href="#">
          <FiArrowLeft />
        </a>
      </header>
      <Avatar>
        <img src="https://github.com/ValdeirBarbosa.png"
         alt="Foto de perfil"
         icon={FiUser}/>
         <label htmlFor="avatar">
          <FiCamera/>
          <input
          id="avatar"
          type="file"
          />

         </label>
      </Avatar>
      <Form>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />
        <Button title="Salvar" />
      </Form>
    </Container>
  )
}
