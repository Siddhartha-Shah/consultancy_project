import React from 'react'

export async function getData() {
  const res = await fetch('http://127.0.0.1:8000/api/getInventory')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Students= async () => {
  const data = await getData()
  

  return (
    <div style={{color:black}}>{
    data.map((datas)=><h1>data.particular</h1>)
    }
    </div>
  )
}

export default Students
