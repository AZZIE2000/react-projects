import { Navbar } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props) {

    // function name(params) {
    // }
    const search = props.searchfun
    const sort = props.sortFun

    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite
                </span>
            </Navbar.Brand>
            <div className="hidden md:block">
                <div className="relative">
                    <input onChange={(e) => props.searchFun(e.target.value)} type="text" className="rounded bg-gray-100 p-1.5 text-sm pl-8 w-60" placeholder="Search" />
                    <div className="absolute top-2 left-2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <p className='px-1'>{props.sort}</p>
                <input step={5} onChange={(e) => props.sortFun(e.target.value)} max={100} min={0} defaultValue={0} type="range" />
            </div>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Link
                    to={"/"}

                >
                    E-Books
                </Link>
                <Link to={"/tasks"}>
                    Tasks API
                </Link>
                <Link to={"/weather"}>
                    Weather API
                </Link>
                <Link to={"/food"}>
                    Food API
                </Link>


            </Navbar.Collapse>
        </Navbar>
    )
}
