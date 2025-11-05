
import { Card } from "../../Components/Card/card";
import { Navbar } from "../../Components/NavBar/index.jsx";
import {MenuLateral} from '../../Components/MenuLateral/Menu.jsx'
import {Footer} from '../../Components/Footer/Footer.jsx'
import { HiOutlineMusicalNote } from "react-icons/hi2";
import "./style.css";
import StevePost from "../../assets/StevePost.jpg";
import Vingadores from "../../assets/Vingadores.jpeg";
import Avatar1 from '../../assets/images.png';
import Wanda from '../../assets/WandaVision.jpeg';
import WandaPerfil from '../../assets/WandaPerfil.jpg';
import BrucePerfil from '../../assets/BrucePeril.jpg';
import StevePerfil from '../../assets/StevePerfil.jpg';
import DraxPerfil from '../../assets/PerfilDrax.jpg';
import DraxPost from '../../assets/DraxPost.jpg';
import AndrewPerfil from '../../assets/PerfilAndrew.jpg';
import andrewPost from '../../assets/EspetacularPost.jpg';
import ArqueiroPerfil from '../../assets/ArqueiroPerfil.jpg';
import ArqueiroPost from '../../assets/ViuvaeGaviao.jpeg';

export function Home() {
  return (
    <>
      <Navbar />
    
    <MenuLateral />

      <div className="bemVindo">
        <h1>FEED</h1>

        <div className="feed">
          <Card 
            fotoPost={StevePost } 
            legenda ="Minha melhor escolha...'You'll never know how many dreams
I've dreamed about you... 🎵'" 
            usuario="SteveRogers" 
            avatar={StevePerfil} 
          />
          <Card 
            fotoPost={Vingadores} 
           legenda="#tbt do início de uma era! Reunião inicial para discutir se o uniforme do Capitão América poderia ser menos apertado. A pauta foi ignorada." 
            usuario="Bruce_Banner" 
            avatar={BrucePerfil} 
          />
          <Card 
            fotoPost={Wanda} 
            legenda="20 anos de nós! Te amo. E, sim, ele prometeu que, se o Thanos voltar, desta vez eu vou logo para a cabeça, sem drama. 💜" 
            usuario="Wanda.Maximoff2" 
            avatar={WandaPerfil} 
          />
          <Card 
            fotoPost={DraxPost} 
            legenda="Voltando de mais um dia de trabalho com essa coisa feia. #GuardioesDaGalaxia" 
            usuario="Drax125" 
            avatar={DraxPerfil } 
          />
          <Card 
            fotoPost={andrewPost} 
            legenda="Gostei dessa foto! Não sei quem é esse de vermelho no meio mas pareciamos felizes... " 
            usuario="PParker" 
            avatar={AndrewPerfil} 
          />
          <Card 
            fotoPost={ArqueiroPost} 
            legenda="Saudades da minha dupla! Espero te reencontrar em alguma linha do tempo um dia❤️" 
            usuario="ClintBarton" 
            avatar={ArqueiroPerfil} 
          />
        </div>
      </div>
       <Footer />
    </>
  );
}
