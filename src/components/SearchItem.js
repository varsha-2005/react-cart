import React from 'react'
import './SearchItem.css'
const SearchItem = ({search,setSearch}) => {
  return (
   <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
    <label htmlFor='search'></label>
    <input 
        id='search'
        role='searchbox'
        placeholder='Search Items'
        type='text'
        value={search}
        onChange={(e)=>setSearch(e.target.value)     
        }
     >  
    </input>

   </form>
  )
}

export default SearchItem
