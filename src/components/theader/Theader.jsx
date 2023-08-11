import React from 'react'
import SearchComponent from './SearchComponent'
import Button from './Button'

import TableA from './TableA'

const Theader = () => {
  return (
    <>
    <div className='flex d-flex justify-between mt-2'>
      <SearchComponent/>
      <Button color="bg-blue-500" text="Export" />
      <Button color="bg-blue-500" text="+ Add Inventory" />
      <Button color="bg-green-500" text="Y Filter" />
      </div>
      <div className='flex d-flex justify-between text-black'>
      <div className='flex d-flex justify-center'>
      <p className='mt-3 text-gray-500'>Action:</p>
      <select className='border-1 outline outline-offset-2 outline-1 h-6 m-3'>
      <option style={{color:"gray"}} className='text-gray-500'>--------------------------------</option>
      <option>delete selected inventory</option>
      </select>
        <button className='m-3 ml-1 border-indigo-200 outline outline-offset-2 outline-1'>GO</button>
      <p className='m-3 text-gray-500 text-sm'>0 of 3 selected</p>
      </div>

      <div className='flex d-flex mt-3'>
      <p>Search:</p>
      <input type="text" className='border-1 border-black h-6 outline outline-offset-2 outline-1 ml-1' placeholder='search' />
      </div>
      </div>
      <TableA/>
    </>
  )
}

export default Theader
