import { useState } from "react"
import { NavLink } from "react-router-dom"
import { menu } from "../../../assets/json/db.json"
import { ModalFood } from "./ModalFood"
export const FoodMenu = () => {
    const [show, setShow] = useState(false);
    const [prms, setPrms] = useState({});

    const showModal = (pr) => {
        console.log(pr);
        setShow(true);
        setPrms(pr);
    }
    return (
        <section className="menu">
            <h2>Menu</h2>
            <nav>
                <ul className="menu">
                    {menu.map(({ id, name, img, valor, description }) => (
                        <li key={id} onClick={(e) => showModal({ id, name, img, description, valor })}>
                            <NavLink to="/" className="item">
                                <figure className="img-menu">
                                    <img src={img} alt={name} />
                                </figure>
                                <aside>
                                    <h5>{name}</h5>
                                    <p>{description}</p>
                                    <div>
                                        <span className="discount">-30%</span>
                                        <span className="value">${valor}</span>
                                        <span className="value-old">$30.000</span>
                                    </div>
                                </aside>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <ModalFood show={show} setShow={setShow} data={prms} />
        </section>
    )
}
