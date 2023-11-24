import { NavLink } from "react-router-dom";
import axios from "axios"
import { useState,useEffect } from "react";
import MealSearch from "../components/MealSearch";

export default function Home(){
    const [meals,setMeals] = useState(null);
   

    useEffect(()=>{
        const fetchData = async()=>{
            const response = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
            setMeals(response.data.meals)
        }
      fetchData();
    },[]);

    
    return (
        <div className="home">
            {meals ? ( 
                meals.map((meal)=>(
            <div className="meal-of-the-day" key={meal.idMeal}>
           
                <div className="meal-name">
                    <h2>Meal of the Day</h2>
                    <NavLink to={meal.idMeal}>
                    <h1>{meal.strMeal}</h1>
                    </NavLink>
                    <p>{meal.strArea} | {meal.strCategory} </p>
                </div>
            
            <NavLink to={meal.idMeal}>
                <div className="meal-of-the-day-image">
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                </div>
            </NavLink>
            </div>

                ))
            
            ):(<p>...Loading</p>
                )}
            
            <MealSearch/>
            
        </div>
    )
}