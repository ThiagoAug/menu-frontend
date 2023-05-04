import './menu.css';
import '@fortawesome/fontawesome-free';
import { useState } from "react";
import { Card } from '../components/Card/card';
import { useFoodData } from '../hooks/useFoodData';

export function MenuInitial() {
    const { data } = useFoodData();
    const [search, setSearch] = useState('');

    const foods = data?.filter(food => food.name.toUpperCase().includes(search.toUpperCase()))


    return (
        <div className='container'>
            <div className='search-space'>
                <div className='input-search'>
                    <input className='input-searchbar' type='search' value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>
            <div className='dashboard'>
                <div className='card-grid'>
                    {foods?.map(foodData =>
                        <Card
                            price={foodData.price}
                            image={foodData.image}
                            name={foodData.name}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
