import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function SingleMeal() {
    const id = useParams().id
    const [meal, setMeal] = useState();
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((res) => {
                console.log(res.data.meals);
                setMeal(res.data.meals);
            })
    }, [])
    console.log(meal);
    function ingredient(meal) {
        const output = [];
        for (let i = 1; i <= 20; i++) {
            console.log(i);
            if (meal[`strIngredient${i}`] != "" || meal[`strMeasure${i}`] != " ") {
                output.push(<label for="color_tt" class="cursor-pointer p-0.5">
                    <p
                        type="radio"
                        name="color"
                        id="color_tt"
                        class="peer sr-only"
                    />

                    <span
                        class="group text-center inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                    >
                        {meal[`strIngredient${i}`]} ( <small>{meal[`strMeasure${i}`]}</small> )


                    </span>
                </label>)
            }

        }
        return output;
        // console.log(output);
    }
    return (
        <>
            {
                meal?.map((meal) => {
                    return (
                        <section>
                            <div class="relative mx-auto max-w-screen-xl px-4 py-8">
                                <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                                    <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
                                        <img
                                            alt="Les Paul"
                                            src={meal.strMealThumb}
                                            class="aspect-square w-full rounded-xl object-cover"
                                        />


                                    </div>

                                    <div class="sticky top-0">
                                        <strong
                                            class="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
                                        >
                                            {meal.strCategory}
                                        </strong>

                                        <div class="mt-8 flex justify-between">
                                            <div class="max-w-[35ch]">
                                                <h1 class="text-2xl font-bold">
                                                    {meal.strMeal}
                                                </h1>

                                                <p class="mt-0.5 text-sm">cuisine {meal.strArea}</p>


                                            </div>


                                        </div>

                                        <details class="group relative mt-4">
                                            <summary class="block">
                                                <div>
                                                    <div class="prose max-w-none group-open:hidden">
                                                        <p>
                                                            {meal.strInstructions}
                                                        </p>
                                                    </div>

                                                    <span
                                                        class="mt-4 cursor-pointer text-sm font-medium underline group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0"
                                                    >
                                                        Read More
                                                    </span>
                                                </div>
                                            </summary>

                                            <div class="prose max-w-none pb-6">
                                                <p>
                                                    {meal.strInstructions.slice(0, meal.strInstructions.length / 2)}
                                                </p>


                                            </div>
                                        </details>

                                        <form class="mt-8">
                                            <fieldset>
                                                <legend class="mb-1 text-sm font-medium">Color</legend>

                                                <div class="flow-root">
                                                    <div class="-m-0.5 flex flex-wrap">

                                                        {ingredient(meal).map((item) => {
                                                            return item
                                                        })}

                                                    </div>
                                                </div>
                                            </fieldset>

                                            {/* <fieldset class="mt-4">
                                                <legend class="mb-1 text-sm font-medium">Size</legend>

                                                <div class="flow-root">
                                                    <div class="-m-0.5 flex flex-wrap">
                                                        <label for="size_xs" class="cursor-pointer p-0.5">
                                                            <input
                                                                type="radio"
                                                                name="size"
                                                                id="size_xs"
                                                                class="peer sr-only"
                                                            />

                                                            <span
                                                                class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                                            >
                                                                XS
                                                            </span>
                                                        </label>

                                                        <label for="size_s" class="cursor-pointer p-0.5">
                                                            <input
                                                                type="radio"
                                                                name="size"
                                                                id="size_s"
                                                                class="peer sr-only"
                                                            />

                                                            <span
                                                                class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                                            >
                                                                S
                                                            </span>
                                                        </label>

                                                        <label for="size_m" class="cursor-pointer p-0.5">
                                                            <input
                                                                type="radio"
                                                                name="size"
                                                                id="size_m"
                                                                class="peer sr-only"
                                                            />

                                                            <span
                                                                class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                                            >
                                                                M
                                                            </span>
                                                        </label>

                                                        <label for="size_l" class="cursor-pointer p-0.5">
                                                            <input
                                                                type="radio"
                                                                name="size"
                                                                id="size_l"
                                                                class="peer sr-only"
                                                            />

                                                            <span
                                                                class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                                            >
                                                                L
                                                            </span>
                                                        </label>

                                                        <label for="size_xl" class="cursor-pointer p-0.5">
                                                            <input
                                                                type="radio"
                                                                name="size"
                                                                id="size_xl"
                                                                class="peer sr-only"
                                                            />

                                                            <span
                                                                class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                                            >
                                                                XL
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </fieldset> */}

                                            <div class="mt-8 flex">
                                                {/* <div>
                                                    <label for="quantity" class="sr-only">Qty</label>

                                                    <input
                                                        type="number"
                                                        id="quantity"
                                                        min="1"
                                                        value="1"
                                                        class="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                                                    />
                                                </div> */}

                                                <button
                                                    type="submit"
                                                    class="ml-3 block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                                                >
                                                    Show details
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                })
            }
        </>
    )
}

