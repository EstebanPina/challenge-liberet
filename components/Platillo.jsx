import AccessTimeIcon from '@mui/icons-material/AccessTime';
var formatter = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'MXN',

  });
const Platillo = ({Nombre,Precio,Restaurante,Imagen,Cantidad}) => {
    return ( 
    <div className="w-2/5 h-60 bg-transparent rounded-lg m-4">
        <div style={{"backgroundImage":`url(${Imagen})`}} className="h-4/5 w-full bg-cover bg-center rounded-2xl shadow-lg">
            <div className="flex flex-row w-full align-top justify-end">
                <h2 className="flex text-sm rounded-lg p-1 bg-white/90 font-semibold text-orange m-2">Quedan:{Cantidad}</h2>
            </div>
            <div className="flex flex-col w-full mt-20 justify-start">
                <h2 className="flex text-xs text-white font-semibold m-1">{Restaurante}</h2>
                <h2 className="flex text-xs text-yellow font-semibold m-1">{Nombre}</h2>
            </div>
        </div>
        <div className="bg-white h-1/6 align-middle flex flex-row mt-2 rounded-xl shadow-lg">
            <AccessTimeIcon className="text-yellow text-2xl m-2"></AccessTimeIcon>
            <h2 className="flex text-md text-dark font-semibold m-2">{formatter.format(Precio)}</h2>
        </div>

    </div> );
}
 
export default Platillo;