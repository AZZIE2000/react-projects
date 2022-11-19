import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryCard({ category }) {
    return (
        <>
            <Link to={`/meals/${category.strCategory}`}>
                <div className="mx-auto w-1/2 rounded shadow-lg border overflow-hidden mt-5 bg-white">
                    <div className="relative pb-[60%]">
                        <img src={category.strCategoryThumb} className="absolute object-cover h-full w-full" />
                    </div>
                    <p className='font-bold text-2xl p-4'>{category.strCategory}</p>
                    <div className="p-4 pt-0 text-sm font-medium text-gray-700">{category.strCategoryDescription.slice(0, 100)} .....</div>
                </div>
            </Link>
        </>

    )
}
