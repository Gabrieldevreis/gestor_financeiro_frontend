import { Form } from "./components/form";
import { Container } from "./components/container";
import { Content } from "./components/content";
import { Logo } from "./components/logo";

import "./styles/themes.css";
import "./styles/global.css";

export function App() {
  return (
    <Container>
      <Content>
        <Logo />
        <Form />
      </Content>
    </Container>
  );

}
