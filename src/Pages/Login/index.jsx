import { ButtonComponent } from "../../Components/Button";
import { InputGeneric } from "../../Components/Input";
import "./style.css"; 
import { Link} from "react-router"
import {Footer} from '../../Components/Footer/Footer.jsx'


export function Login() {
  return (
    <>
    <div
      className="login-page" >
      <div className="cardLogin">
        <h2 className="titulo">Bem vindo(a), Super!</h2>

        <InputGeneric
          informacaoParaUsuario="Digite seu nome de super-herói"
          tipoDeInput="text"
        />

        <InputGeneric
          informacaoParaUsuario="Digite sua senha"
          tipoDeInput="password"
        />
        <Link to='/home'>
        <ButtonComponent botao="Logar" />
        </Link>
      </div>
    </div>
     <Footer />
     </>
  );
}
