import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CategoryCard from '../components/CategoryCard'

export default function Food() {
    const [categories, setCategories] = useState([])
    const [food, setFood] = useState([])



    useEffect(() => {
        console.log();
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then((res) => {
                // console.log(res.data.categories);
                setCategories(res.data.categories)

            })
    }, [])
    useEffect(() => {
        console.log(categories);
        categories.forEach((category) => {
            axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`)
                .then((res) => {
                    console.log(res.data);
                })
        })
    }, [categories])




    // console.log(categories);

    return (
        <>
            <div className='grid grid-cols-3' >
                {
                    categories.map((category, i) => {

                        return (

                            <CategoryCard key={i} category={category} />

                        )
                    })
                }
            </div>
        </>
    )
}
