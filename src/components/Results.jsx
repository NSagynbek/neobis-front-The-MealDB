import { NavLink } from "react-router-dom";

export default function Results({el}){
    return (
        <div className="results">

            

            <div className="results-image">
                    <NavLink to={el.idMeal}>
                       <img src={el.strMealThumb} alt={el.strMeal} />
                    </NavLink>
            </div>

            <div className="results-name">

                <NavLink to={el.idMeal}>

                   <h2>{el.strMeal}</h2>

                </NavLink>
                <p>{el.strArea} | {el.strCategory}</p>

            </div>

            

        </div>


    )
}