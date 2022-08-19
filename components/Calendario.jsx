import Dia from './Dia.jsx';
function handleClick(Numero){
    console.log(Numero);
    MisDias.map((Dias)=>{
        if(Dias.Numero==Numero){
            Dias.Active=true;
        }else{
            Dias.Active=false;
        }
    })
}
const MisDias=[{
    Nombre:"Lun",
    Numero:"1",
    Active:true
}
,{
    Nombre:"Mar",
    Numero:"2",
    Active:false
}
,{
    Nombre:"Mie",
    Numero:"3",
    Active:false
}
,{
    Nombre:"Jue",
    Numero:"4",
    Active:false
}
,{
    Nombre:"Vie",
    Numero:"5",
    Active:false
}
,{
    Nombre:"Sab",
    Numero:"6",
    Active:false
}
,{
    Nombre:"Dom",
    Numero:"7",
    Active:false
}]
export default function Calendario(){
    return (
    <div className=" bg-white flex flex-row w-full justify-center"> 
        {MisDias.map((Dias)=>{
            return <button key={Dias.Numero} onClick={handleClick(Dias.Numero)}><Dia Nombre={Dias.Nombre} Numero={Dias.Numero} Active={Dias.Active} /></button>
        })}
    </div>
     );
}
