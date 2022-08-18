import Dia from './Dia.jsx';
const Calendario = () => {
    return (
    <div className="flex flex-row w-full justify-center"> 
        <Dia Nombre="Lun" Numero="1"></Dia>
        <Dia Nombre="Mar" Numero="2"></Dia>
        <Dia Nombre="Mie" Numero="3"></Dia>
        <Dia Nombre="Jue" Numero="4"></Dia>
        <Dia Nombre="Vie" Numero="5"></Dia>
        <Dia Nombre="Sab" Numero="6"></Dia>
        <Dia Nombre="Dom" Numero="7"></Dia>
    </div>
     );
}
 
export default Calendario;