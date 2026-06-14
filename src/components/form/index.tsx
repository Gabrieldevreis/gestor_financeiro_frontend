import styles from "./styles.module.css";

export function Form() {
  return(
  <form className={styles.form}>
    <label htmlFor="email">Email</label>
    <input id="email" type="text" placeholder="Gabriel@gmail.com" />
    <label htmlFor="password">Senha</label>
    <input id="password" type="password" placeholder="123456" />
    <button type="submit">Entrar</button>
  </form>
  );
}
