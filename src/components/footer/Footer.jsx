'use client'
import { React ,useEffect }from 'react'
import  styles  from './page.module.css'
import MyContext from '../../../context/MyContext'


const Footer = () => {
  return (
    <>
    <hr className={styles.hrtag}/>
    <MyContext.Consumer>
    
      {( state ) => {
        return <div className={ styles.footer }  id="footer">
        <div> <b> Copyright © 2023. </b> All rights reserved.</div>
        <div>Version 0.1</div>
        </div>
      }
    }
    </MyContext.Consumer>

    </>
  )
}

export default Footer
