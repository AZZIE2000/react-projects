import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MealCard from '../components/MealCard'

export default function Meals() {
    const name = useParams().name
    const [meals, setMeals] = useState([])
    // https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
            .then((res) => {
                console.log(res.data.meals);
                setMeals(res.data.meals);

            })

    }, [])
    return (
        <>
            <div className='grid grid-cols-3' >

                {
                    meals.map((meal, i) => {

                        return <MealCard key={i} meal={meal} />

                    })
                }
            </div>
        </>
    )
}
