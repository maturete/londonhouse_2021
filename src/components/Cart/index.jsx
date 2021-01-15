import './cartIndex.css';
import {useContext} from 'react';
import {Store} from '../../store';
import {Link} from 'react-router-dom';

const Cart = () => {
    const [data, setData] = useContext(Store);

    return (
        <>
            <h1 className="text">Bienvenido a tu carrito de compra!</h1>
            <h2 className="text">Tené a mano todo lo que te queres llevar</h2>
            <ul>
                {
                    data.items.map(item => (
                        <li>
                            <div className="ClassTable">
                                <h3 className="tableTitle">{item.item.title}</h3>
                                <h3 className="tableTitle">${item.item.price}</h3>
                                <h3 className="tableTitle">{item.cantidad}</h3>
                                <h3 className="tableTitle">${item.item.price * item.cantidad}</h3>
                            </div>
                        </li>
                    ))
                }
            </ul>

            <div className="ClassTable">
                <Link className="btn" to="/checkout">comprar</Link>
            </div>
            
            
        </>
    )
}

export default Cart;