import { ComponenteEstiloDoInput } from "./style.jsx";



export const InputGeneric  = ({informacaoParaUsuario, tipoDeInput}) => {

  return (
    <div>
      <ComponenteEstiloDoInput 
        placeholder={informacaoParaUsuario ? informacaoParaUsuario : "Digite algo..."}
        type={tipoDeInput}
         />

     </div>   
  )
}