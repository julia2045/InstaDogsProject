import React from 'react'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'

// para configurar no 'minha conta' so apareça as fotos que eu postei utilizo o user como parametro
const Feed = ({user}) => {

  const [modalPhoto, setModalPhoto] = React.useState(null)
  const [pages, setPages] = React.useState([1])
  const [infinite,setInfinite] = React.useState(true)
  //criar um efeito de scroll infinito
  React.useEffect(() => {

    let wait = false
    function infiniteScroll(){
      if(infinite){ 
         //faço algumas condicções para que ele so efetue o fetch quando chegar ao final da pagina
        //entao pego a total de scroll que ja dei na pagina
        const scroll = window.scrollY
        //e pego o altura da pagina
        //offsetHeight pega a altura total do elemento, junto com padding tudo
        //innerheigth é a altura da janela
        //Resulta no tamanho total da área de rolagem
        const heightWindow = document.body.offsetHeight - window.innerHeight
        if(scroll > heightWindow * 0.75 && !wait){
          //aqui atualizo o estado das paginas para adicionar o rolamento
          //pego o que valor que ja está no estado,calculo qual é esse total(.length) e adiciono 1
          setPages((pages) => [...pages, pages.length +1])
          wait = true 
          //para não ativar a função toda hora e sobrecarregar,
          //criar um setTimeout para que ative a cada periodo recomendado
          setTimeout(() => {
            wait = false
          }, 500);
        }
      }
    }
    //evento de rolagem do mouse 'whell'
    window.addEventListener('whell',infiniteScroll)
    window.addEventListener('scroll',infiniteScroll)

    return() =>{
      //para limpar o evento
      window.removeEventListener('whell',infiniteScroll)
      window.removeEventListener('scroll',infiniteScroll)
    }
  },[infinite])
  return (
    <div>
      {modalPhoto && (
        <FeedModal 
          photo={modalPhoto} 
          setModalPhoto={setModalPhoto}
          />
      )}
      {pages.map((page) => (
        <FeedPhotos 
          key={page}
          page={page}
          user={user} 
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}  
    </div>
  )
}

export default Feed
