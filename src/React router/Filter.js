import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.warn(searchParams.get('age'));
     const age = searchParams.get('age');
     const city = searchParams.get('city');
    return (
        <div>
            <h3>Age:{age}</h3>
            <h3>City:{city}</h3>
            <input type='text' onChange={(e)=>
            setSearchParams({text:e.target.value,age:10})}/>
            <button onClick={()=>
            setSearchParams({age:40})}>set age and city</button>
        </div>
    );
};

export default Filter;
