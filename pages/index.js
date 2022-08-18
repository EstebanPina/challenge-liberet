import Head from 'next/head'
import Image from 'next/image'
import AppLayout from '../components/AppLayout'
import styles from '../styles/Home.module.css'
import PlaceIcon from '@mui/icons-material/Place';
import FilterListIcon from '@mui/icons-material/FilterList';
import Calendario from '../components/Calendario';
export default function Home() {
  return (
    <AppLayout>
      <div className='relative h-12 w-full border-b-2 border-b-gray flex flex-row content-between align-middle items-center'>
        <div className='w-2/3 px-4 h-fit flex flex-row align-center align-middle text-gray hover:bg-gray duration-200 hover:text-dark hover:px-8 hover:py-3' onClick={()=>alert("Funcion no disponible")}>
        <PlaceIcon className="text-magenta text-2xl"></PlaceIcon>
        <h2 className=' text-lg'>Select location...</h2>
        </div>
        <div className='flex flex-row items-end justify-end w-1/3 '>
        <FilterListIcon className="text-dark text-2xl mr-6" onPress></FilterListIcon>
        </div>
      </div>
      <Calendario></Calendario>
    </AppLayout>
  )
}
