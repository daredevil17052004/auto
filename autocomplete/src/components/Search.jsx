import React, { useState } from 'react'
import { country } from '../../../resources/countryData'

const Search = () => {

    let [data, setData] = useState(false)
    let [searching, setSearching] = useState('')

    function handleChange(e){
        setSearching(e.target.value)
        setData(true)
        e.preventDefault()
    }

    function handleEscape(event){
        if (event.key === 'Escape'){
            event.preventDefault()
            setData(false)
        }else{
            setData(true)
        }
        console.log(event.key);
    }

  return (
    <div>
        <h1>Search</h1>
        <input type="text" onChange={(e)=> handleChange(e)} onKeyDown={handleEscape} value={searching}/><button>Search</button>
        {
            country.filter((valu)=>{
                if(searching === ''){
                    return valu
                }else if(valu.name.toLowerCase().startsWith(searching.toLowerCase())){
                    return valu;
                }
            })
            .map((item,index)=>{
                return(
                    <div key={index}>
                  {
                    data ?`${item.name}`:null
                  }
                  </div>
                )
                
            })
        }
    </div>
  )
}

export default Search