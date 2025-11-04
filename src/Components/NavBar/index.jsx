import { PiNumberCircleOneFill } from "react-icons/pi";
import { PiNumberCircleSevenFill } from "react-icons/pi";
import { MdPerson } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import superHeroi from '../../assets/super-heroi.png';
import './style.module.css'


export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="https://www.disneyplus.com/pt-br/browse/entity-b39aa962-be56-4b09-a536-98617031717f">
          <img
            src={superHeroi}
            alt="HeroNet"
            width="40"
            height="40"
            className="d-inline-block align-text-top"
          />{' '}
          HeroNet
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            
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
