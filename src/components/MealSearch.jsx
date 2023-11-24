import axios from "axios";
import { useState } from "react"
import Searchresults from "./SearchResults";

export default function MealSearch (){

    const [meal, setMeal] = useState("");
    const [data,setData] = useState("");

console.log(meal)
   function handleChange (e){
    setMeal((meal)=>{
        return e.target.value;
    })
   }

   const  getData = async (e)=>{
     e.preventDefault();
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
    setData(response.data.meals);
   };


    return (
        <div className="meal-search">
             <form className="search-form" onSubmit={getData}>
                <h2>Find Your Meal</h2>
                <label htmlFor="" className="search-label">
                    <input type="text" 
                    name="mealInput"
                    placeholder="Search Here"
                    value={meal}
                    onChange={handleChange}
                    />
                    <button type="submit"><span>SEARCH</span></button>
                </label>
            </form>

            <Searchresults data={data}/>

        </div>
    )
}