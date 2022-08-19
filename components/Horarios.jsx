import AccessTimeIcon from '@mui/icons-material/AccessTime';
import React, {useState,useEffect} from 'react';
import { Modal } from '@nextui-org/react';
const url="https://www.themealdb.com/api/json/v1/1/"
const Horarios = () => {
    //Modal handler
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    //Manejador de evento de horarios
    function handlerInfo (value) {
        setDataHora(value)
        visible?setVisible(false):setVisible(true)
    }
    //Asignacion de hora por defecto y arreglo de horas
    const MisHoras=["11:00-12:00","1:00-2:00","2:00-3:00"]
    const [dataHora, setDataHora] = useState(MisHoras[0])

    return ( <div className='btnCategory' onClick={handler}> 
                <AccessTimeIcon className='font-xs text-orange'></AccessTimeIcon>
                <h2 className="flex text-xs text-dark font-semibold m-1" id='dataHora'>{dataHora}</h2>
    <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
    >
        {MisHoras.map(Horas=>(
            <button key={Horas} className=' py-2 my-2 bg-white shadow-sm hover:bg-gray duration-200' onClick={()=>handlerInfo(Horas)}>{Horas}</button>
        ))}
  </Modal>
  </div> );
}
 
export default Horarios;