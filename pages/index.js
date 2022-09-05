import AppLayout from '../components/AppLayout'
import PlaceIcon from '@mui/icons-material/Place';
import FilterListIcon from '@mui/icons-material/FilterList';
import CalendarioV2 from '../components/CalendarioV2.tsx';
import Platillo from '../components/Platillo';
import Menu from '../components/Menu';
import { useEffect,useState } from 'react';
import MenuBajo from '../components/MenuBajo';
import BottomMenu from '../components/BottomMenu';
import Spinner from '../components/spinner';
const url="https://www.themealdb.com/api/json/v1/1/"
/*export async function getServerSideProps() {
  // Fetch data from external API
  const resCat = await fetch(url+`categories.php`)
  const dataCat = await resCat.json()
  const resPlat = await fetch(url+`filter.php?c=Beef`)
  const dataPlat = await resPlat.json()
  dataPlat.meals.map(async Plati=>{
      const resInfo=await fetch(url+`lookup.php?i=${Plati.idMeal}`)
      const dataInfo=await resInfo.json()
      Plati.push(dataInfo.meals[0].strArea)
      console.log(dataPlat.meals)
})
  // Pass data to the page via props
  return { props: { dataCat,dataPlat } }
}*/

const Home = () => {
  const [data, setData] = useState(null)
  const [dataPlat, setDataPlat] = useState(null)
  const [dataCat, setDataCat] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [Category, setCategory] = useState("Beef")
  useEffect(() => {
    setLoading(true)
    fetch(url+`filter.php?c=`+Category)
      .then((res) => res.json())
      .then((dataPlat) => {
        setDataPlat(dataPlat)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <AppLayout><Spinner></Spinner></AppLayout>
  if (!dataPlat) return <p>No data</p>
  return (
    <AppLayout>
      <div className='relative py-3 h-12 w-full border-b-2 border-b-gray flex flex-row content-between align-middle items-center bg-white'>
        <div className='w-2/3 px-4 h-fit flex flex-row align-center align-middle text-gray hover:bg-gray duration-200 hover:text-dark hover:px-8 hover:py-3' onClick={()=>alert("Funcion no disponible")}>
        <PlaceIcon className="text-magenta text-2xl"></PlaceIcon>
        <h2 className=' text-lg'>Select location...</h2>
        </div>
        <div className='flex flex-row items-end justify-end w-1/3 '>
        <FilterListIcon className="text-dark text-2xl mr-6"></FilterListIcon>
        </div>
      </div>
      <CalendarioV2></CalendarioV2>
      <MenuBajo></MenuBajo>
      <Menu>
      {dataPlat.meals?.map(Plati=>(
        <Platillo key={Plati.idMeal} Nombre={Plati.strMeal} Precio={Plati.idMeal} Restaurante={Plati.strArea} Imagen={Plati.strMealThumb} Cantidad={Math.floor(Math.random()*25)}></Platillo>
      ))}
      </Menu>
      <BottomMenu></BottomMenu>
    </AppLayout>
    
  )
}
export default Home;

