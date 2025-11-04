import { ComponenteEstiloDoInput } from "./style";
import { FaSpider } from "react-icons/fa";


export const InputGeneric  = ({informacaoParaUsuario, tipoDeInput}) => {

  return (
    <div>
      <ComponenteEstiloDoInput 
        placeholder={informacaoParaUsuario ? informacaoParaUsuario : "Digite algo..."}
        type={tipoDeInput}
         />


         {tipoDeInput === "email" && <FaSpider />}
     </div>   
  )
}