import { useDispatch , useSelector } from 'react-redux';
import { Badge , Box , IconButton } from "@mui/material";
import {
    PersonOutline,
    ShoppingBagOutlined,
    MenuOutlined,
    SearchOutlined
} from '@mui/icons-material';
import { useEffect , useState , useContext } from "react";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from '../state';

const Navbar = ()=> {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);

    return (
    <Box
        display="flex"
        justifyContent='space-between'
        padding='50px'
        alignItems="center"
        width='100%'
        height='108px'
        backgroundColor='black'
    >
        <Box
         display="flex"
         fontFamily='chonburi'
         fontSize="60px"
         width="280"
         height='auto'
         color='white'
        >
        ECOFASHION
        </Box>
        <IconButton 
        onClick={() => dispatch(setIsCartOpen({}))}
        sx={{ color:"white", }}
        
        >
            <ShoppingBagOutlined />
        </IconButton>
    </Box>
    );
}

export default Navbar;