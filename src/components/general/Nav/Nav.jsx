import './Nav.css';
import LogoTipo from '../../../assets/logo.png';
import NavItem from '../NavItem/NavItem';
import NavCart from '../NavCart/NavCart';

function Nav({titulo, action}) {
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
    const productCant = 0;

    return (
        <nav>
            <div className="container">
            <h1 className="logo"><img src={LogoTipo}/></h1>
            <ul>
                {
                    menuItems.map((seccion, index) => <NavItem key={index} text={seccion.texto} url={seccion.ruta} />)   
                }
                {
                    !productCant && <NavCart action={action} productCant={productCant} />
                }
            </ul>
                
                
            </div>
        </nav>
    )
}

export default Nav;