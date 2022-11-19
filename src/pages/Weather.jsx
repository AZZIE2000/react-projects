import axios from 'axios'
import React, { useEffect, useState } from 'react'
import WeatherCard from '../components/WeatherCard'
const client = axios.create({
    baseURL: "http://api.weatherapi.com/v1/current.json?key=24317c0e96db4b6ebd6175119220811&q="
});
export default function Weather() {

    const [data, setData] = useState([])
    const countries = ["Lebanon", "Syria", "Iraq", "Jordan", "Kuwait", "Qatar", "Bahrain", "UAE", "Oman", "Yemen", "Egypt", "Libya"]
    const collectedData = []
    // useEffect(() => {


    //     axios.get(`http://api.weatherapi.com/v1/current.json?key=24317c0e96db4b6ebd6175119220811&q=Jordan`)
    //         .then((res) => {
    //             console.log(res.data);

    //         })




    // }, [])
    useEffect(() => {
        const funn = async () => {

            async function getData(country) {

                const res = await client.get(country);

                collectedData.push(res.data)

            }

            countries.forEach((country) => {
                getData(country)

            })

            setData(collectedData)
        }
        // funn()
    }, [])


    console.log(data);
    // const getData =   async () => {

    //     await countries.forEach((country) => {
    //         const res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=24317c0e96db4b6ebd6175119220811&q=${country}`)
    //     })
    //     setData(collectedData)
    //     const res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=24317c0e96db4b6ebd6175119220811&q=${country}`);
    //     let { data } = res.data;
    //     setLoading(false);
    //     setUsers(data.users);
    // };

    return (

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 container mx-auto gap-2">
            {
                data.map((item, i) => {

                    return <WeatherCard key={i} location={item.location} temp={item.current} />

                })
            }

        </div>

    )
}
