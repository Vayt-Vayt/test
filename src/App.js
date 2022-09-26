import React, { useEffect, useState } from 'react'
import './App.css';
import { Component } from './component/Component';

function App() {
  const data = [
    {id: 0, name: 'Yshky.net', status: 'green', type: 'TRST', conditions: 'x2,6 months', volume: 120000, roi: 4, free: 20, hedge: 20},
    {id: 1, name: 'Pyshky.net', status: 'green', type: 'TRST', conditions: 'x2,6 months', volume: 120000, roi: 4, free: 20, hedge: 20},
    {id: 2, name: 'NFT-Flowershop', status: 'yellow', type: 'THT', conditions: 'x4,2 years', volume: 80000, roi: 23, free: 12, hedge: 0},
    {id: 3, name: 'Eb3 P2P University', status: 'red', type: 'TRST', conditions: 'x2,1 years', volume: 200000, roi: 6, free: 1, hedge: 0},
    {id: 4, name: 'B3 P2P University', status: 'red', type: 'TRST', conditions: 'x2,1 years', volume: 200000, roi: 6, free: 1, hedge: 0},
    {id: 5, name: 'FT-Flowershop', status: 'yellow', type: 'TRST', conditions: 'x4,2 years', volume: 80000, roi: 23, free: 12, hedge: 0},
    {id: 6, name: 'NFT-Flowershop', status: 'yellow', type: 'THT', conditions: 'x4,2 years', volume: 80000, roi: 23, free: 12, hedge: 0},
  
  ]
  const [dataArray, setDataArray]  = useState([...data])
  const [typeFilter, setTypeFilter] = useState('')
  const [types, setTypes] = useState('')
  const [sorts, setSorts] = useState('')

  const [sortBolean, setSortBoolean] = useState({value: 0, name: 'name'})


useEffect(() => {
  setDataArray(sortAr(sortBolean, dataArray))

}, [sortBolean])

 
  const sortAr = (value, array) => {

    if (value.value === 0) {
       return [...array]
    }
 
     if (value.value === 1) {
      if (value.name === 'name') {
        return [...array].sort((a,b) => a.name.localeCompare(b.name))
      }
     
      if (value.name === 'volume') {
        return [...array].sort((a,b) => b.volume - a.volume)
      }

    } 

    if (value.value === 2) {
      if (sortBolean.name === 'name') {
        return [...array].sort((a,b) => b.name.localeCompare(a.name))
      }
     
      if (value.name === 'volume') {
        return [...array].sort((a,b) => a.volume - b.volume)
      }
  
    }
  }


  const sort = (color) => {
    const newArray = [...data]
      setSorts(color)
    switch (color) {
      case 'green':
        return  sortdata(newArray.filter(array => array.status === 'green'))
        case 'yellow':
          return sortdata(newArray.filter(array => array.status === 'yellow'))
          case 'red':
            return sortdata(newArray.filter(array => array.status === 'red'))
      default:
        setTypes(color)
        return sortdata( data)
    }
  }
 
  const sortdata = (value) => {
    const newArrays = sortAr(sortBolean, value)
    setDataArray(newArrays) 
    setTypeFilter(newArrays)
  
  }
  const filterType = (type) => {
    setTypes(type)
    if (typeFilter === '') {
      setTypeFilter([...dataArray])
    }

    if (type === 'all') {
       setDataArray([...typeFilter])
    } else {
       setDataArray(dataArray.filter(array => array.type === type ))
    }
  }

  return (
    <div >
      <Component items={dataArray} sort={sort} value={sorts} types={types} filterType={filterType}
        setSortBoolean={setSortBoolean}
      />
    </div>
  );
}

export default App;
