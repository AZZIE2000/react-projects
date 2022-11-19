import React from 'react'

export default function SingleTask({ task }) {
    return (
        <div className="flex mb-4 items-center">
            <p className={task.completed ? "w-full text-grey-darkest line-through" : "w-full text-grey-darkest "}>{task.title}</p>
            <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green-600">Done</button>
            <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-500">Remove</button>
        </div>
    )
}
