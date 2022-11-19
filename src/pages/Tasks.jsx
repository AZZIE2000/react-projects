import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleTask from '../components/SingleTask'

export default function Tasks() {

    const [tasks, setTasks] = useState([])
    const [tasksPage, setTasksPage] = useState([])
    const [page, setPage] = useState()

    const getTasks = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos/")
            .then(res => {
                const allTasks = res.data
                setTasks(allTasks)
                setPage(1)
            })
    }


    useEffect(() => {
        getTasks()
        // const tasksA = tasks.slice(0, 10)
        // setTasksPage(tasksA)
        // console.log(tasksPage);
    }, [])



    useEffect(() => {
        if (page == 1) {
            const tasksA = tasks.slice(0, 10)
            setTasksPage(tasksA)

        } else {
            const tasksB = tasks.slice(page * 10, (page * 10) + 10)
            setTasksPage(tasksB)
        }
    }, [page])

    console.log(tasks);
    console.log(tasksPage);


    return (
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                <div className="mb-4">
                    <div className='flex justify-between'>

                        <h1 className="text-grey-darkest">Todo List</h1>
                        <div className='flex gap-2' >

                            <button onClick={() => page > 1 && setPage(page - 1)} className='bg-blue-500 rounded p-2'>back</button>
                            <button onClick={() => page < 19 && setPage(page + 1)} className='bg-blue-500 rounded p-2'>Next</button>

                        </div>
                    </div>
                    <div className="flex mt-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" />
                        <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-purple-600">Add</button>
                    </div>
                </div>
                <div>
                    {
                        tasksPage.map((task) => {

                            return <SingleTask key={task.id} task={task} />
                        })
                    }
                    {/* <div class="flex mb-4 items-center">
                        <p class="w-full line-through text-green">Submit Todo App Component to Tailwind Components</p>
                        <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">Not Done</button>
                        <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
