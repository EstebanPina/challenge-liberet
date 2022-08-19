import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
const BottomMenu = () => {
    return ( 
        <div className="flex flex-row w-full sticky bottom-0 left-0 bg-gray shadow-lg">
            <div className="flex w-1/3 align-middle justify-center hover:-translate-y-1 hover:bg-dark duration-200">
                <ShoppingCartOutlinedIcon className="text-yellow m-2"></ShoppingCartOutlinedIcon>
            </div>
            <div className="flex w-1/3 align-middle justify-center hover:-translate-y-1 hover:bg-dark duration-200">
                <GridViewIcon className="text-yellow text-2xl m-2"></GridViewIcon>
            </div>
            <div className="flex w-1/3 align-middle justify-center hover:-translate-y-1 hover:bg-dark duration-200">
                <AccountCircleOutlinedIcon className="text-yellow text-2xl m-2"></AccountCircleOutlinedIcon>
            </div>
        </div>
     );
}
 
export default BottomMenu;