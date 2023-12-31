import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout(){
    return(
        <div className="root-layout">
            <header>
                <nav>
                    <NavLink to="/">The Meal</NavLink>
                </nav>
            </header>

            <main>
                <Outlet/>
            </main>
          
        </div>
    )

}