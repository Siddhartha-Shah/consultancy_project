"use client"
import React, { useState, useEffect } from 'react'

import styles from './page.module.css'
import Image from 'next/image'

import MenuBar from '../menubar/MenuBar'
import Sidebar from '../sidebar/Sidebar'
import MyContext from '../../../context/MyContext'

const Header = () => {
    return (
        <div className={styles.mainContainer }>
            <Sidebar/>

            <MyContext.Consumer>
            {( state ) => {
                return <div className={styles.main}  >
                <MenuBar/>
                <button className={styles.userButton}>
                <Image src="/user.jpg" alt="User Image" height="50" width="60" className={styles.img} />
               <p className={styles.admin}>admin</p>
               </button>
            </div>
              }
            }
            
            </MyContext.Consumer>

            <hr className={styles.hrtag}/>
        </div>
    )
}

export default Header
