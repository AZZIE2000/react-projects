import React from 'react'
import Books from '../components/Books'
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
export default function Home(props) {
    return (
        <div>

            <Books sort={props.sort} search={props.search} books={props.books} />
        </div>
    )
}
