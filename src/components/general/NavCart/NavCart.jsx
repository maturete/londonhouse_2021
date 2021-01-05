import './NavCart.css';
import {RiShoppingCart2Fill} from 'react-icons/ri'

const NavCart = ({action, productCant}) => {
    return (
        <div className="navCart" onClick={action}>
            <RiShoppingCart2Fill />
            <span>{productCant}</span>
        </div>
    )
}

export default NavCart;