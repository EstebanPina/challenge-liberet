const Dia = ({Nombre,Numero}) => {
    return ( 
        <div className="flex flex-col align-middle items-center justify-center text-dark text-[0.65rem] mx-2 hover:scale-110 duration-200 cursor-pointer">
            <h2 className=" font-bold">{Nombre}</h2>
            <h2>{Numero}</h2>
        </div>
     );
}
 
export default Dia;