import React from 'react'
import Styles from './Header.module.css'
import '../../App.css'
import { useState } from 'react';


function Header() {
    const [IsOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((open) => !open);
    };

  return (
  <header >
      <div>
        <div className={Styles.nav_container}>
            <div className={Styles.nav_dark_wrap}>
                <div className={Styles.nav_phone}>
                <p><img src='/images/phone.png' alt='phone' />(225) 555-0118</p>
                
                </div>
                <div className={Styles.nav_mail}>
                <p><img src='/images/mail.png' alt='phone' />michelle.rivera@example.com</p>
                </div>
            </div>
            <div>
                  <p>Follow Us  and get a chance to win 80% off</p>
            </div>
            <div className={Styles.nav_socials}>
                  <div>
                  <p>Follow Us :</p>
                  </div>
                  <div>
                  <img src='/images/ig.png' alt='phone' />
                  </div>
                  <div>
                  <img src='/images/play.png' alt='play' />
                  </div>
                  <div>
                  <img src='/images/fb.png' alt='fb' />
                  </div>
                  <div>
                  <img src='/images/twitx.png' alt='x' />
                  </div>
            </div>
        </div>
      </div>
      <div className={Styles.nav_light}>
      
                <h3>Bandage</h3>
          
          <div className={Styles.wrap}>              
                <ul>
                    <li>Home</li>
                    <li>About <img src="../../../public/images/darrow.png" alt="" /></li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Pages</li>
                                      
                </ul>
              
                <div className={Styles.right}>
                    <ul>
                        <li><img src="../../../public/images/log.png" alt="log" /></li>
                        <li>Login / Register</li>
                        <li><img src="../../../public/images/search.png" alt="search" /></li>
                        <li><img src="../../../public/images/shopcart.png" alt="shopcart" /></li>
                        <li><img src="../../../public/images/heart.png" alt="search" /></li>
                        
                    </ul>
                </div>              
          </div>  
          

      </div>
      
  </header>
  )
}

export default Header