'use client'
import { useState, useEffect } from 'react'
 
export default function Profile() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
 
  useEffect(() => {
    setLoading(true)
    fetch('http://127.0.0.1:8000/api/getInventory')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
 
  return (
    <div style={{color:"black"}}>
     { data.map((datas)=><h1>{datas.particular}</h1>)}
    </div>
  )
}