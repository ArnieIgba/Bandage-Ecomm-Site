import React from 'react'
import Styles from './HeroSection.module.css'
import '../../App.css'

function HeroSection() {
  return (
    <main className={Styles.wrapper}>
         <div className={Styles.hero_sec}>
            
                <div className={`${Styles.hero_gallery1} ${Styles.arena}`}>
                   <h6 className={Styles.hero_items}>5 items</h6>
                   <h2>Furniture</h2>
                   <h6>Read More</h6>
                </div>
            
            
                <div className={`${Styles.hero_gallery2} ${Styles.arena}`}>
                   <h6 className={Styles.hero_items}>5 items</h6>
                   <h2>Furniture</h2>
                   <h6>Read More</h6>
                </div>
                <div className={`${Styles.hero_gallery3} ${Styles.arena}`}>
                   <h6 className={Styles.hero_items}>5 items</h6>
                   <h2>Furniture</h2>
                   <h6>Read More</h6>
                </div>
                <div className={`${Styles.hero_gallery4} ${Styles.arena}`}>
                   <h6 className={Styles.hero_items}>5 items</h6>
                   <h2>Furniture</h2>
                   <h6>Read More</h6>
                </div> 
               
        
        </div>  
    </main>
  )
}

export default HeroSection