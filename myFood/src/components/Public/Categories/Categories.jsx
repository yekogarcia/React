import { NavLink } from "react-router-dom"
import { categories } from "../../../assets/json/db.json"
export const Categories = () => {
    return (
        <section className="categories">
            <h2>Categorias</h2>
            <nav>
                <ul className="categories">
                    {categories.map(({ id, name, img }) => (
                        <li key={id}>
                            <NavLink to="/" className="item">
                                <figure className="categorie">
                                    <img src={img} alt={name} />
                                </figure>
                                <h5>{name}</h5>
                                {/* <span>{name}</span> */}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}
