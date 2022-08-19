import RestaurantIcon from '@mui/icons-material/Restaurant';
import React, {useState,useEffect} from 'react';
import { Modal } from '@nextui-org/react';
const url="https://www.themealdb.com/api/json/v1/1/"
const Categorias = () => {
    //Modal handler
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    //fetch Categorias
    const [dataCat, setDataCat] = useState(null)
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(url+`categories.php`)
        .then((res) => res.json())
        .then((dataCat) => {
            setDataCat(dataCat)
            setLoading(false)
        })
        
    }, [])
    if (isLoading) return <p>Loading...</p>
    if (!dataCat) return <p>No data</p>
    return ( <div className='btnCategory' onClick={handler}> 
                <RestaurantIcon className='font-xs text-orange'></RestaurantIcon>
                <h2 className="flex text-xs text-dark font-semibold m-1">Cocina Industrial</h2>
    <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
    >
        {dataCat.categories.map(Category=>(
            <button className=' py-2 my-2 bg-white shadow-sm hover:bg-gray duration-200' value={Category.strCategory} key={Category.idCategory}>{Category.strCategory}</button>
        ))}
  </Modal>
  </div> );
}
 
export default Categorias;