import React from 'react'

export default function WeatherCard({ location, temp }) {
    return (
        <div className="bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
            <div className="flex flex-col">
                <div>
                    <h2 className="font-bold text-gray-600 text-center">{location.country}, {location.region}</h2>
                </div>
                <div className="my-6">
                    <div className="flex flex-row space-x-4 items-center">
                        <div id="icon">
                            <span>
                                <img src={temp.condition.icon} className="w-20 h-20 fill-stroke text-yellow-400" />


                            </span>
                        </div>
                        <div id="temp">
                            <h4 className="text-4xl">{temp.temp_c}&deg;C</h4>
                            <p className="text-xs text-gray-500">Feels like {temp.feelslike_c}&deg;C</p>
                        </div>
                    </div>
                </div>
                {/* <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
                    <a href="#" className="text-indigo-600 text-xs font-medium">View more</a>
                </div> */}
            </div>
        </div>
    )
}
