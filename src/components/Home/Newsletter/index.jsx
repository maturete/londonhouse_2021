import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="container">
                <h2>¡Suscribite!</h2>
                <p>OBTENÉ 10% DE DESCUENTO EN TU PRÓXIMA COMPRA DE TEMPORADA</p>

                <form>
                    <input className="mail" type="text" placeholder="E-mail" />
                    <input className="boton" type="submit" value="Enviar" />
                </form>
            </div>
        </section>
    )
}

export default Newsletter;