import { IoHeart } from "react-icons/io5";
import { PiChatTextLight } from "react-icons/pi";
import "./style.css";

export function Card({ fotoPost, legenda, usuario, avatar }) {
  return (
    <div className="card">
      
      <div className="card-header">
        <img className="avatar" src={avatar} alt={usuario} />
        <span className="username">{usuario || "Usuário"}</span>
      </div>

  
      {fotoPost && <img className="card-image" src={fotoPost} alt={legenda|| "Sem legenda..."} />}
      
      <h2>{legenda || "Sem legenda"}</h2>
      <p>Comentar <PiChatTextLight /> | Curtir <IoHeart /></p>
    </div>
  );
}
