import './cartIndex.css';
import {useContext} from 'react';
import {Store} from '../../store';

const Cart = () => {
    const [data, setData] = useContext(Store);

    return (
        <>
            <h1 className="text">Bienvenido a tu carrito de compra!</h1>
            <h2 className="text">Tené a mano todo lo que te queres llevar</h2>
            <ul>
                <li className="ClassTable">
                    {
                        data.items.map(item => <h3 className="ClassTitle">{item.title}</h3>)
                    }
                    <h3 className="ClassTitle">{data.cantidad}</h3>
                    {
                        data.items.map(item => <h3 className="ClassPrice">${item.price}</h3>)
                    }
                    
                </li>
            </ul>
            
            
        </>
    )
}

export default Cart;