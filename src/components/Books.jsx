import React from 'react'
import BookCard from './BookCard'

export default function Books({ books, search, sort }) {

    return (
        <>
            <div className='grid grid-cols-3 gap-2 container mx-auto mt-3 '>

                {
                    search ? search.map((book) => <BookCard data={book} />) : sort ? sort.map((book) => <BookCard data={book} />) : books.map((book) => <BookCard data={book} />)
                }


            </div>
        </>

    )
}
