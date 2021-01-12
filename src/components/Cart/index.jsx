import {useContext} from 'react';
import {Store} from '../../store';

const Cart = () => {
    const [data, setData] = useContext(Store);

    return (
        <>
            <h1>Bienvenido a tu carrito de compra!</h1>
            <h2>Tené a mano todo lo que te queres llevar</h2>

            {
                data.items.map(item => <h2>{item.title}</h2>)
            }
        </>
    )
}

export default Cart;