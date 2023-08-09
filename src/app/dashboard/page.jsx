"use client"
import React from 'react'
import styles from "./page.module.css"
import { LiaMoneyBillAltSolid } from 'react-icons/lia'
import { BiTime } from 'react-icons/bi'
import { AiOutlinePercentage } from 'react-icons/ai'
import Example from './lineChart'


const Dashboard = () => {
  const collectionAndDiscount = [
    { id: 1, total: "Total Collection", amount: "A$600.00", icon: <LiaMoneyBillAltSolid className={styles.iconStyle} /> },
    { id: 2, total: "Pending Collection", amount: "A$7200.00", icon: <BiTime className={styles.iconStyle} /> },
    { id: 3, total: "Total Discount", amount: "A$700.00", icon: <AiOutlinePercentage className={styles.iconStyle} /> }
  ]
  const topCourses = [
    { id: 1, name: "Certificate IV in Ageing Support" },
    { id: 2, name: "HLTAID009 Provide Cardiopulmonary Resuscitation" },
    { id: 3, name: "Manual Handling" },
    { id: 4, name: "Certificate III in Commercial Cooker" },
    { id: 5, name: "Certificate III in Individual (Ageing and Disability)" }
  ]
  return (


    <>
    <div className={styles.dashboardContainer}>
      <p>Summary</p>
      <div className={styles.payment}><p>Payment</p></div>
      <div className={styles.collection_and_discount_container}>
        {
          collectionAndDiscount.map((data) => <div className={styles.collection_and_discount} key={data.id}>
            <div className={styles.total}>{data.total}</div>
            <div className={styles.amount_and_icon}><p>{data.amount}</p> <div className={styles.icon}>{data.icon}</div></div>
          </div>)
        }
      </div>

      <hr style={{ padding: "0px 20px", backgroundColor: "green", marginTop: "15px" }} />
      <div className={styles.payment}><p>Top Courses</p></div>

      <div className={styles.topCoursesContainer}>

        {
          topCourses.map((data) => <div className={styles.topCourses} key={data.id}>
            <div className={styles.key}>{data.id}</div>
            <div className={styles.name}>{data.name}</div>
          </div>)
        }
      </div>

      <div className={styles.payment}><p>Latest Inventory</p></div>
      <div className={styles.latestInventory}>
      <p className={styles.tag}>Documents</p>
      <hr style={{width:"90%"}}/>
      <p className={styles.tag}>Pens</p>
      </div>
    </div>
    <div className={styles.dashboardContainer} style={{marginTop:"0px"}}>
    <p>Charts</p>
    <Example/>

    <div>
    </div>
    

    </div>
    </>
  )
}

export default Dashboard
