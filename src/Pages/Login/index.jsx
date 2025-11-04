import { ButtonComponent } from "../../Components/Button";
import { InputGeneric } from "../../Components/Input";
import "./style.css"; 
import fundo from '../../assets/fundocinzajpg.jpg';

export function Login() {
  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${fundo})`,
        backgroundSize: 'cover',      
        backgroundPosition: 'center', 
        height: '100vh',    
        width: '100vw',        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div className="card">
        <h2 className="titulo">Faça seu Login</h2>

        <InputGeneric
          informacaoParaUsuario="Digite seu email"
          tipoDeInput="email"
        />

        <InputGeneric
          informacaoParaUsuario="Digite sua senha"
          tipoDeInput="password"
        />

        <ButtonComponent botao1="Logar" />
      </div>
    </div>
  );
}
