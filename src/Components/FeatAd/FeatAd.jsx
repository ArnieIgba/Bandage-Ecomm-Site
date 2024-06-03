import React from 'react'
import Styles from './FeatAd.module.css'

function FeatAd() {
  return (
    <div className={Styles.FeatAd}>
        <div className={Styles.FeatAd_top}>
            <h6>Practice Advice</h6>
            <h2>Featured Posts</h2>
        </div>

        <div className={Styles.FeatAd_Card}>
          <div className={Styles.FeatAd_Card_item}>
            <div className={Styles.adpic}>
              <img src="/images/features/feat1.png" alt="" />  
              <p>NEW</p>               
            </div>                        
          </div>

          <div className={Styles.FeatAd_Card_item}>
            <div className={Styles.adpic}>
              <img src="/images/features/feat2.png" alt="" />  
              <p>NEW</p>               
            </div>                        
          </div>

          <div className={Styles.FeatAd_Card_item}>
            <div className={Styles.adpic}>
              <img src="/images/features/feat3.png" alt="" />  
              <p>NEW</p>               
            </div>                        
          </div>          
        </div>
    </div>
  )
}

export default FeatAd