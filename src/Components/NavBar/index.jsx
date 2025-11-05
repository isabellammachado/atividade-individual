import { PiNumberCircleOneFill } from "react-icons/pi";
import { PiNumberCircleSevenFill } from "react-icons/pi";
import { MdPerson } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import icone from '../../assets/icone.png';
import './style.module.css'


export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container d-flex justify-content-between align-items-center">
        <a 
          className="navbar-brand d-flex align-items-center justify-content-center"
           href="https://www.disneyplus.com/pt-br/browse/entity-b39aa962-be56-4b09-a536-98617031717f">
          <img
            src={icone} 
            alt="HeroNet"
            width="40"
            height="40"
            className="d-inline-block align-text-top"  style={{ marginRight: '80px' }}
          />{' '}
          HeroNet
        </a>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav pe-3">
            
            <li className="nav-item">
              <a className="nav-link active" href="#"> <MdPerson />  Meu Perfil </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Mensagens <PiNumberCircleOneFill /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Notificações <PiNumberCircleSevenFill /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
