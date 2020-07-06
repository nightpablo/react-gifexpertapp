import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // 'HunterXhunter'
    //     // setCategories([...categories,'HunterXHunter']);
    //     setCategories(cats => [...cats,'HunterXHunter']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ul>
                {
                    categories.map( (category, i) => (
                        <GifGrid 
                            key = { category }
                            category={ category } />
                    ))
                }
            </ul>
        </>
    )
}
