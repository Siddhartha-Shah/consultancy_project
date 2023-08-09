import React from 'react'
import styles from "./page.module.css"
import  MyContect  from '../../../context/MyContext'
const MenuBar = () => {

  return (
    <MyContect.Consumer>
    {
      ({state,toggle})=>{
        return <span className={styles.openNav} onClick={toggle} >&#9776;</span>
      }
    }
    
    </MyContect.Consumer>
  )
}

export default MenuBar
