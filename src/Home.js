

import React, { useEffect, useState } from 'react'
import { items } from './items';
const Home = () => {
    
    
    
  const filters=["Bags","Sports","Watches","Sunglasses"];
    const [fiterData,setFilterData]=useState(items);
   const [activefilters,setActivefilters]=useState([]);

    const handleFilterClick=(e)=>{
        let category=e.target.id;
        //console.log(category);
        if(activefilters.includes(category))
            {
               let filt=activefilters.filter((el)=>el!==category)
             console.log(filt)
               setActivefilters(filt);
            }
            else{
                setActivefilters([...activefilters,category])
            }
    }
    const filterProduct=()=>{
        if(activefilters.length)
            {
               const tempItem=items.filter((item)=>activefilters.includes(item.category));
                setFilterData(tempItem)
            }
            else{
                setFilterData(items);
            }
    }
    useEffect(()=>{
        filterProduct();
    },[activefilters])
    return(
     <>
    
    <div className="master">
      <div className="filters" onClick={handleFilterClick}>
      {
        filters.map((items,idx)=>{
          return(
            <>
            <button 
           className={activefilters.includes(items) ? 'selected':''}
            key={idx}
            id={items}
            >{items}</button>
            </>
          )
        })
      }
      </div>
      <div className='product-list'>
        {
            fiterData.map((items,idx)=>{
                return(
                    <>
                    <div className='item' key={idx}>
                        <p>{items.name}</p>
                        <p className='category'>{items.category}</p>
                    </div>
                    </>
                )
            })
        }
      </div>
    </div>
      
     </>
    );
  
}

export default Home;