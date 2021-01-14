import './Nav.css';
import LogoTipo from '../../../assets/logo.png';
import NavItem from '../NavItem/NavItem';
import NavCart from '../NavCart/NavCart';
import {Link} from 'react-router-dom';

function Nav({action}) {
    const menuItems = [
        {
            texto: 'Trajes',
            ruta: '/category/trajes',
        },
        {
            texto: 'Telas',
            ruta: '/category/telas',
        },
        {
            texto: 'Accesorios',
            ruta: '/category/accesorios',
        },
        {
            texto: 'Contacto',
            ruta: '/category/contacto',
        },
    ]

    return (
        <nav>
            <div className="container">
            <h1 className="logo"><img src={LogoTipo}/></h1>
            <ul>
                {
                    menuItems.map((seccion, index) => <NavItem key={index} text={seccion.texto} url={seccion.ruta} />)   
                }
                <NavCart action={action} />
            </ul>
                
        
            </div>
        </nav>
    )
}

export default Nav;