import { bebidas } from "../../../assets/json/db.json"


export const ModalFood = ({ show, setShow, data }) => {
    console.log(data);
    const { id, name, img, description, valor } = data;
    const toggleModal = () => {
        setShow(false);
    }
    const saveModal = () => {
        setShow(false);
    }
    return <>

        <dialog open={show} className="confirm_order" >
            <article>
                <header>
                    <h3>{name}</h3>
                    <a href="#close"
                        aria-label="Close"
                        className="close"
                        data-target="modal-example"
                        onClick={toggleModal}
                    >
                    </a>
                </header>
                <main>
                    <aside>
                        <figure>
                            <img src={img} alt="" />
                        </figure>
                        <h4>Bebidas</h4>
                        <ul>
                            {bebidas.map(({ id, name, valor }) => (
                                <li key={id}>
                                    <label>
                                        <input type="checkbox" name="bebida" id="bebida" />
                                        {name}
                                        <i>{valor}</i>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </aside>
                    <section>
                        <p>
                            {description}
                        </p>
                        <h4>Tipos</h4>
                        <ul>
                            <li>
                                <label>
                                    <input type="radio" name="tipo" id="tipo" />
                                    {name} Sencilla
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="radio" name="tipo" id="tipo" />
                                    {name} Sencilla
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="radio" name="tipo" id="tipo" />
                                    {name} Sencilla
                                </label>
                            </li>
                        </ul>
                        <h4>Adicionales</h4>
                        <ul>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    {name} Sencilla
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    {name} Sencilla
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    {name} Sencilla
                                </label>
                            </li>
                        </ul>
                        <label htmlFor="" id="comments">
                            Comentarios
                            <textarea name="comments" id="comments" ></textarea>
                        </label>
                    </section>
                </main>
                <footer>
                    <a href="#cancel"
                        role="button"
                        className="secondary"
                        data-target="modal-example"
                        onClick={toggleModal}
                    >
                        Cancelar
                    </a>
                    <a href="#confirm"
                        role="button"
                        data-target="modal-example"
                        onClick={saveModal}
                    >
                        Confirmar
                    </a>
                </footer>
            </article>
        </dialog>
    </>

}
