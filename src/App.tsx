import "./styles/themes.css";
import "./styles/global.css";

export function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="logo">logo</div>
        <form>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" placeholder="Email" />
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
