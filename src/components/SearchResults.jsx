import Results from "./Results"

export default function Searchresults({data}){
    return (
        <div >

           {data? (
             data.map((el)=>{
            return <Results el={el} key={el.idMeal}/>
           })):(
            ""
           )}

        </div>
    )
}