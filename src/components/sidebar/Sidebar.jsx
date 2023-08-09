
import React from 'react'
import { RiDashboard3Line } from "react-icons/ri";
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2'
import { BiUser } from 'react-icons/bi';
import { SlNotebook } from 'react-icons/sl'
import { MdOutlinePayments, MdInventory } from 'react-icons/md'
import { LiaLessThanSolid } from 'react-icons/lia'
import { AiOutlineDown } from 'react-icons/ai'
import Link from 'next/link'
import { useState ,useEffect} from 'react';
import styles from "./page.module.css"
import Image from 'next/image';
import MyContext from '../../../context/MyContext';


const Sidebar = () => {
    const settings = [
        { id: 1, link: "#", value: "Form" },
        { id: 2, link: "#", value: "Group" },
        { id: 3, link: "#", value: "Status" },
        { id: 4, link: "#", value: "QRcodes" },
        { id: 5, link: "#", value: "Email Templates" }
    ]
    const students = [
        { id: 1, link: "#", value: "Students" },
        { id: 2, link: "#", value: "Student Course" }
    ]
    

    const [settingState, settingFunction] = useState("offclick")
    const setting = () => {
        if (settingState == "offclick") {
            settingFunction("onclick")
        } else {
            settingFunction("offclick")
        }
    }
    useEffect(() => {
        if (settingState == "onclick") {
            document.getElementById("setting").style.display = "block"
        } else {
            document.getElementById("setting").style.display = "none"
        }
    })

    const [setStudent, studentFunction] = useState("offclick")
    const student = () => {
        if (setStudent == "offclick") {
            studentFunction("onclick")
        } else {
            studentFunction("offclick")
        }
    }
    useEffect(() => {
        if (setStudent == "onclick") {
            document.getElementById("students").style.display = "block"
        } else {
            document.getElementById("students").style.display = "none"
        }
    })

  return (
    <MyContext.Consumer>
    {( {state,toggle} ) => {
        return <div className={styles.sidenav} style={state=="open"? {width:"250px"} : {width:"0px"}}>

        <div className={styles.imageContainer}>
            <Image src="/times_global.jpg" alt="times global" width="50" height="40" className={styles.img} />
            <p>admin</p>
        </div>

        <hr />
        <p className={styles.times_global}>MAIN NAVIGATION</p>

        <button className={styles.dropDownBtn}> <Link href="/dashboard" className={styles.link}> <RiDashboard3Line /> <p>Home </p> </Link></button>

        <button onClick={setting} className={styles.dropDownBtn}> <Link href="#" className={styles.link}> <BiUser /> <p>Setting </p> { settingState=="offclick" ? <LiaLessThanSolid /> :  <AiOutlineDown /> } </Link> </button>
        <div className={styles.dropdownContainer} id="setting">
            {
                settings.map((data) => <Link href={data.link} key={data.id} className={styles.link}>o {data.value}</Link>
                )
            }
        </div>


        <button onClick={student} className={styles.dropDownBtn}> <Link href="#" className={styles.link}> <BiUser /> <p>Student</p> { setStudent=="offclick" ? <LiaLessThanSolid /> :  <AiOutlineDown /> } </Link> </button>
        <div className={styles.dropdownContainer} id="students">
            {
                students.map((data) => <Link href={data.link} key={data.id} className={styles.link}>o {data.value}</Link>
                )
            }
        </div>

        <button className={styles.dropDownBtn}> <Link href="#" className={styles.link}> <SlNotebook /> <p>Course</p></Link></button>
        <button className={styles.dropDownBtn}> <Link href="#" className={styles.link}> <MdOutlinePayments /> <p>Payment</p>  </Link></button>
        <button className={styles.dropDownBtn}> <Link href="/inventory" className={styles.link}> <MdInventory /> <p>Inventory</p>  </Link></button>

    </div>
      }
    }
    
            </MyContext.Consumer>
  )
}

export default Sidebar
