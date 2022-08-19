import AppLayout from '../components/AppLayout'
import PlaceIcon from '@mui/icons-material/Place';
import FilterListIcon from '@mui/icons-material/FilterList';
import CalendarioV2 from '../components/CalendarioV2.tsx';
import Platillo from '../components/Platillo';
import Menu from '../components/Menu';
import { useEffect,useState } from 'react';
import MenuBajo from '../components/MenuBajo';
import { useRouter } from 'next/router'
import BottomMenu from '../components/BottomMenu'

export const getStaticPaths=async()=> {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  const data = await res.json()
  const paths=data.categories.map(Cat=>{
  return{
    params:{ id: Cat.strCategory.toString()}
  }
  })
  return{
    paths,
    fallback:false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const resPlat = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=`+id)
  const dataPlat = await resPlat.json()
  return {props: {dataPlat}}
}
export default function Home({dataPlat}) {


  
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


