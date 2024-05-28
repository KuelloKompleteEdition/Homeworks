import { useState } from "react"
import { AddCategory } from "./components/AddComponent"
import { GifGrid } from "./components/GifGrid"

 const GifExpertApp = () => {

    const [categories, setCategories] = useState(['first category']) 

    const onAddCategory = (category) => {
        setCategories( list => [...list, category]) 
    }

    return (
        <>
            <h1>GifExpert</h1>

            <AddCategory onAddCategory={onAddCategory}></AddCategory>
                {
                categories.map(
                    (category, key) =>
                        {
                            return <GifGrid category={category} key={key}></GifGrid>
                        }
                    )
                }
        </>
    )
}

export default GifExpertApp
            