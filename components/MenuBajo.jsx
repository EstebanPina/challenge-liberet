import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import React, {useState,useEffect} from 'react';
import { Modal } from '@nextui-org/react';
import Categorias from './categorias';
import Horarios from './Horarios';
const url="https://www.themealdb.com/api/json/v1/1/"
const MenuBajo = () => {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    
    return ( 
        <div className="flex flex-row align-middle justify-center mt-2">
            <Horarios></Horarios>
            <Categorias></Categorias>
            <button className="btnCategory" onClick={()=>alert("Alerta de platillos")}>
                <PlusOneIcon className='font-xs text-orange'></PlusOneIcon>
                <h2 className="flex text-xs text-dark font-semibold m-1">Platillos</h2>
            </button>
        </div>
     );
}
 
export default MenuBajo;