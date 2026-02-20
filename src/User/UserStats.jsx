import React from 'react'
import Head from '../help/Head'
import UseFetch from '../Hooks/UseFetch'
import { GetStats } from '../api'
import Loading from '../Forms/Loading'
import Error from '../help/Error'
//importando para que o componente só é baixado quando realmente for usado
const UserStatsGrafic = React.lazy(() => import('./UserStatsGrafic'))

const UserStats = () => {

  const {data, error, loading, request} = UseFetch()
  
  React.useEffect(() =>{
    async function getData() {

      const {url, options} = GetStats()
       await request(url, options)
    }
    getData()
  }, [request])

  if(loading) return <Loading/>
  if(error) return <Error error={error}/>
  if(data)
  return (
    <React.Suspense fallback={<div></div>}>
      <Head title='Estatística'/>
      <UserStatsGrafic data={data}/>
    </React.Suspense>
  )
  else return null
}

export default UserStats
