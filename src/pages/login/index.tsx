import { Container } from "../../components/container";
import { Content } from "../../components/content";
import { Logo } from "../../components/logo";
import { Form } from "../../components/form";

export function Login() {
  return (
    <Container>
      <Content>
        <Logo />
        <Form />
      </Content>
    </Container>
  );
}