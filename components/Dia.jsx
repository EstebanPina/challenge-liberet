const Dia = ({Nombre,Numero}) => {
    return ( 
        <div className="flex flex-col align-middle items-center justify-center text-dark p-2 text-sm mx-3">
            <h2 className=" font-bold">{Nombre}</h2>
            <h2>{Numero}</h2>
        </div>
     );
}
 
export default Dia;