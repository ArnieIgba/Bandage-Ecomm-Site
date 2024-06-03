import React from 'react'
import Styles from './Footer.module.css'



const Footer = () => {
  return (
    <div className={Styles.footer_wrap}>
        <div className={Styles.footer_logo}>
            <h3>Bandage</h3>
            <div className={Styles.footer_socials}>
                <img src="/images/footer/f.png" alt="" />
                <img src="/images/footer/i.png" alt="" />
                <img src="/images/footer/x.png" alt="" />
            </div>
        </div>

        <div className={Styles.footer_specs}>
            <div className={`${Styles.footer_unit1} ${Styles.footer_unit}`}>
                <h5>Company Info</h5>
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
               
                
            </div>
            <div className={`${Styles.footer_unit2} ${Styles.footer_unit}`}>
                <h5>Legal</h5>
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
                                
            </div>
            <div className={`${Styles.footer_unit3} ${Styles.footer_unit}`}>
                <h5>Features</h5>
                <li>Business Marketing</li>
                <li>User Analytic</li>
                <li>Live Chat</li>
                <li>Unlimited Support</li>
               
                
            </div>
            <div className={`${Styles.footer_unit4} ${Styles.footer_unit}`}>
                <h5>Resources</h5>
                <li>IOS & Android</li>
                <li>Watch a Demo</li>
                <li>Customers</li>
                <li>API</li>
                
                
            </div>
            <div className={`${Styles.footer_unit5} ${Styles.footer_unit}`}>
                <h5>Get In Touch</h5>
                <form action="">
                    <input type="text" placeholder='Your Email'/>
                    <button>Subscribe</button>
                </form>
                <p>Lore imp sum dolor Amit</p>
                
            </div>
            
        </div>
        <div className={Styles.copyright_view}>
            <h6>Made With Love By Finland All Right Reserved </h6>
        </div>
    </div>
  )
}

export default Footer