import './CategoriesGrid.css';
import {Link} from 'react-router-dom';

const CategoriesGrid = () => {
    return (
        <section className="categories_grid">
            <div className="container">
                <div className="item">
                    <Link to="">
                        TRAJES  
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        TELAS 
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        ACCESORIOS  
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        CONTACTO  
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CategoriesGrid;