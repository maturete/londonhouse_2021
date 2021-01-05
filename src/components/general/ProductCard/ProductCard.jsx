import './ProductCard.css';
import {Link} from 'react-router-dom';

const ProductCard = ({id, img, titulo, precio, categoria, type='grid'}) => {
    return (
        <Link to={`/${categoria}/${id}`}>
        <article className={`productCard ${type}`}>
            <img src={img} alt="Mi producto de prueba"/>
            <div>
                <h3>{titulo}</h3>
                <p>${precio}</p>
            </div>
        </article>
        </Link>
    )
}

export default ProductCard;