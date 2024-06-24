import { Link, NavLink, Outlet, Route, Routes, useParams } from "react-router-dom";

const Home = () => <h1>Home</h1>;

const SearchPage = () => {
    const tacos = [
        'cochinitas',
        'chili',
        'carnita'
    ]
    return (
        <div>
            <h1>Search Page</h1>
            <ul>
                {tacos.map(taco => (
                    <li key={taco}><Link to={`/tacos/${taco}`}>{taco}</Link></li>
                ))}
            </ul>
        </div>
    )
}
const Tacos = () => {
    const { taco } = useParams();
    return (
        <div>
            <h1>Tacos</h1>
            {taco}
            <Link to="details">Details</Link>
            <Outlet />
        </div>
    )
}
const DetailsTacos = () => {
    const { taco } = useParams();
    return <h3>Taco details {taco}</h3>
}
const IndexTacos = () => {
    return <h3>Index Taco </h3>
}


export const ExampleRoutes = () => {
    return (
        <div>
            <header>
                <h1>MyFood</h1>
                <nav>
                    <ul>
                        <li><NavLink className={({ isActive }) => {
                            return isActive ? 'is-active' : ''
                        }} to="/">Home</NavLink></li>
                        <li><Link to="/search-page">Search Page</Link></li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search-page" element={<SearchPage />} />
                <Route path="/tacos/:taco" element={<Tacos />} >
                    <Route path="details" element={<DetailsTacos />} />
                    <Route index element={<IndexTacos />} />
                </Route>
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </div>
    )
}
