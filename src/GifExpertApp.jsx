import { useState } from "react";
import {AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Naruto']);

    const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
    <>
        <h1>Gif Expert App</h1>
        <AddCategory 
            onNewCategory={onAddCategory}
        />
        {categories.map( category =>(
            <GifGrid key = {category} category={category}/>))  
        }
    </>
  )
}
 // api key F9DDZgS9z5fcmr30KaYkDMTx56fn8LhF

