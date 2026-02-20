import React from 'react'
import Styles from './PhotoDelete.module.css'
import { PhotoDELETE } from '../src/api'
import UseFetch from '../src/Hooks/UseFetch'



const PhotoDelete = ({id}) => {

    const {loading, request} = UseFetch()

    async function handleClick(){
        //abre uma caixa tipo alert com duas opções ok e cancela
        //ok retorna true e cancela falso e depois faço a condição, se isso for verdadeiro
        //apago senão não
        const confirm = window.confirm('Tem certeza que deseja deletar?')
        if(confirm)
{        const {url, options} = PhotoDELETE(id)
        const {response} = await request(url, options)
//aqui faço a foto deletar e se o response dela for ok estiver certo
// ele vai fazer com que a janela aberta recarregue assim mostrando que a imagem foi deletada
        if(response.ok) window.location.reload()
        }
    }
  return (
    <>
        {loading ?
            <button className={Styles.delete}>
                Deletando...
            </button>
            :
            <button onClick={handleClick} className={Styles.delete}>
                Deletar
            </button> 
        }
      
    </>
  )
}

export default PhotoDelete
