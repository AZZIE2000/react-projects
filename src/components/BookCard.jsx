import React from 'react'

export default function BookCard({ data }) {

    return (
        <div>
            <a

                className="relative block rounded-sm border-t-4 border-pink-600 p-8 pb-24 shadow-xl"
            >
                <h3 className="text-4xl font-bold">{data.language}</h3>
                <p className="mt-4 text-lg font-medium text-gray-500">
                    {data.price} $
                </p>

                <span className="absolute bottom-8 right-8 font-bold">
                    <p
                        xmlns="http://www.w3.org/2000/p"
                        className="h-10 w-10 text-pink-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {data.edition}
                    </p>
                </span>
            </a>

        </div>
    )
}
