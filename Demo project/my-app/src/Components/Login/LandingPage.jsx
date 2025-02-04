import React from 'react'
import {Link} from 'react-router-dom'
import admin from '../../Assets/admin.jpeg'
import user from '../../Assets/user.jpeg'
import styles from '../../Styles/LandingPage.module.css'
export default function LandingPage() {
  return (
    <div className={styles.LandingPage}>
      <Link className={styles.anchor} to = "/adminlogin">
      <img className ={styles.adminImage}src={admin} alt="" />
      <br />
      <span>Admin Login</span>
      </Link>
      <Link className ={styles.anchor}to = "/userlogin">
      <img  className ={styles.userImage}src={user} alt="" />
      <br />
      <span>User Login</span>
      </Link>
    </div>
  )
}
