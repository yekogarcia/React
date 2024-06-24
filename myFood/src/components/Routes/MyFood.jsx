import { useState } from "react";
import { NavLink } from "react-router-dom"
import { Categories } from "../Public/Categories/Categories";
import { FoodMenu } from "../Public/FoodMenu/FoodMenu";
import { DrawerCart } from "../Public/ShoppingCart/DrawerCart";
export const MyFood = () => {
    const [open, setOpen] = useState(false);
    return <>
        <div className="my-food">
            <header className="head">
                <section className="logo">
                    <h2>MyFood</h2>
                </section>
                <section className="search">
                    <input type="search" name="search" />
                </section>
                <section className="cart">
                    <i className="medium material-icons" onClick={()=>{setOpen(true)}}>shopping_cart</i>
                </section>
            </header>
            <main>
                <Categories />
                <FoodMenu />
                <DrawerCart open={open} setOpen={setOpen} />
            </main>
        </div>
    </>
}
