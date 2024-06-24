

export const DrawerCart = ({ open, setOpen }) => {

    const onClose = () => {
        setOpen(false);
    }
    return (
        <>
            <aside className={`drawer ${open ? "open-drawe" : "close-drawer"}`}>
                <header>
                    <h4>Tu pedido</h4>
                    <i className="medium material-icons" onClick={onClose}>close</i>
                </header>
                <section className="notification">
                    <figure>
                        <img src="https://images.rappi.com/restaurants_background/cocharliesroastbeef-1666132169503.jpg?e=webp&q=40&d=300x300" alt="img_notification" />
                    </figure>
                    <div>
                        <ul>
                            <li>Salchipapa Mamá Costeña 1-2 Personas</li>
                            <li className="value">$14.200</li>
                        </ul>
                    </div>
                    <div className="add-item">
                        <i className="medium material-icons">delete</i>
                        <span>1</span>
                        <i className="medium material-icons">add</i>
                    </div>
                </section>
                <section className="notification">
                    <figure>
                        <img src="https://images.rappi.com/restaurants_background/cocharliesroastbeef-1666132169503.jpg?e=webp&q=40&d=300x300" alt="img_notification" />
                    </figure>
                    <div>
                        <ul>
                            <li>Salchipapa Mamá Costeña 1-2 Personas</li>
                            <li className="value">$14.200</li>
                        </ul>
                    </div>
                    <div className="add-item">
                        <i className="medium material-icons">delete</i>
                        <span>1</span>
                        <i className="medium material-icons">add</i>
                    </div>
                </section>
                <article className="values">
                    <button><b>Hacer pedido!</b> <p>Total: <b>$22.000</b></p></button>
                </article>
            </aside>
        </>
    )
}
