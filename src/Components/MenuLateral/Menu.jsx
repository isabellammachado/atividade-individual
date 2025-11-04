 import "./style.css";
 import { FaHouseUser } from "react-icons/fa";
 import { FaSearch } from "react-icons/fa";
 import { FaGear } from "react-icons/fa6";
 import { MdOutlineVideoLibrary } from "react-icons/md";
 import { FaRegCompass } from "react-icons/fa";

 
 export function MenuLateral(){
    return(
 
 <div className="MenuCanto"> 
    <ul>
    <ol><FaHouseUser /> Início</ol>
    <br></br>
    <ol><FaRegCompass />  Explorar</ol>
      <br></br>
    <ol><FaSearch />  Pesquisar </ol>
      <br></br>
    <ol><FaGear /> Ajustes</ol>
      <br></br>
    <ol><MdOutlineVideoLibrary /> Reels</ol>
  </ul>
     </div>
    )
}