import {useState} from 'react';
import './ProductDetail.css';

const ProductDetail = ({item}) => {
    const [qty, setQty] = useState(1);	

    const handleClickResta = () => {	
        if(qty > 1) {	
            setQty(qty - 1);	
        }	
    }	

    const onAdd = () => {	
        alert(`Agregaste ${qty} productos al carrito`);	
    }

    return (
        <article className="product">
            <div className="foto">
            <img src={item.img}/>
            </div>

            <div className="info">
                <h1 className="title">{item.title}</h1>
                {
                    !!item.description && <p className="description">{item.description}</p>
                }
                <p className="price">${item.price}</p>
                <h2>TALLE</h2>
                <select>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
                <div className="qty">	
                    <button 	
                        disabled={qty === 1 ? 'disabled' : null } 	
                        onClick={handleClickResta}	
                    >	
                        -	
                    </button>	
                    <input type="text" value={qty} readOnly/>	
                    <button onClick={() => setQty(qty + 1)}>+</button>	
                </div>

                <button className="btn" onClick={onAdd}>Añadir</button>
            </div>
        </article>
    )
}

export default ProductDetail;