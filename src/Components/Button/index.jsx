import botao from './style.module.css'


export const ButtonComponent = ({botao1}) => {
    return (
         <button className={botao.text}>
      {botao1 ? botao1 : 'Clique aqui'}
    </button>

    )
}