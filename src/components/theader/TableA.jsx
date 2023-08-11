"use client"
import { useState, useEffect } from 'react'
import { Table } from "@nextui-org/react";
export default function TableA() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  var ids=[];
 
  useEffect(() => {
    setLoading(true)
    fetch('http://127.0.0.1:8000/api/getInventory')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
 
  if (isLoading) return <p style={{color:"black"}}>Loading...</p>
  if (!data) return <p style={{color:"black"}}>No profile data</p>
 
  return (
    <div style={{backgroundColor:"white",height:"100vh"}}>
    <Table
      bordered
      shadow={false}
      color="secondary"
      aria-label="Example pagination  table"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      selectionMode="multiple"
    >
      <Table.Header>
        <Table.Column>PARTICULAR</Table.Column>
        <Table.Column>PRICE</Table.Column>
        <Table.Column>QUANTITY</Table.Column>
        <Table.Column>TOTAL</Table.Column>
        <Table.Column>PURCHASED BY</Table.Column>
        <Table.Column>CREATED DATE</Table.Column>
      </Table.Header>
      <Table.Body>
      {
        data.map((datas)=>(
          <Table.Row key={datas.inventory_id}  enableSelectAll={true}>
          <Table.Cell>{datas.particular}</Table.Cell>
          <Table.Cell>{datas.price}</Table.Cell>
          <Table.Cell>{datas.quantity}</Table.Cell>
          <Table.Cell>{datas.total}</Table.Cell>
          <Table.Cell>{datas.purchased_by}</Table.Cell>
          <Table.Cell>{datas.created_date}</Table.Cell>
        </Table.Row>
        )
        )
      }
      </Table.Body>

      <Table.Pagination
        shadow
        noMargin
        align="center"
        rowsPerPage={8}
        onPageChange={(page) => console.log({ page })}
      />
    </Table>
    </div>
    
  )
}