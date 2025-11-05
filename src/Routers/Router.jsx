import { Route, Routes} from 'react-router';
import {Home} from '../../src/Pages/Home/index'
import {Login} from '../../src/Pages/Login/index'

const PageErro = () =>{
   return(
   <div>
   <h1>Pagina nao encontrada</h1>
   </div>
   )
}
export const Router =() => {
return (

   <Routes>
    <Route path='/home' element={<Home />}/>
    <Route path='/login' element={<Login />}/>

    <Route path="*" element={<PageErro/>} />
  </Routes>
 
)
}