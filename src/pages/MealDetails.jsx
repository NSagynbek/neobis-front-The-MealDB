import {useParams} from "react-router-dom"
import { useState,useEffect } from "react";
import axios from "axios";




export default function MealDetails(){
    

    
    const {id} = useParams();
    const [details, setDetails] = useState(null);
    console.log(details);

    useEffect(()=>{

        const getDetails = async ()=>{
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            setDetails(response.data.meals)
        }

     getDetails();

    },[])

   
    return (
        <div>
          {
            details?(
          details.map((el) => (
            <div key={el.idMeal} className="meal-details">


            




        <div className="section-one">

        <div className="ingredients">
           <h2>Ingredients</h2>
                <ul>
                    {Object.keys(el).map((key) => {
                        if (key.startsWith('strIngredient') && el[key]) {
                            const ingredientNumber = key.slice('strIngredient'.length);
                            const measureKey = `strMeasure${ingredientNumber}`;
                            const measureValue = el[measureKey] || 'No measurement';

                                return (
                                    <li key={key}>
                                        {el[key]} - {measureValue}
                                    </li>
                                );
                            }
                             return null;
                        })}
                </ul>
        </div>


              <div className="meal-details-name">
                <h1>{el.strMeal}</h1>
                <p>{el.strArea}|{el.strCategory}</p>
              </div>

        

              <div className="meal-details-image">
                <img src={el.strMealThumb} alt={el.strMeal} />
              </div>

         </div>
      
              <div className="instruction">
                <h2>Instruction</h2>
                <p>{el.strInstructions}</p>
                <a href={el.strYoutube}>Watch on YouTube</a>
              </div>
            </div>
          ))):(
            <p>...Loading</p>
          )} 
        </div>
      );
      


          }
