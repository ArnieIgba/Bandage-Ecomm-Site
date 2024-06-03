import React from 'react'
import Styles from './BestServ.module.css'

function BestServ() {
  return (
            <div className={Styles.services_container}>
                <div className={Styles.services_title}>
                    <div className={Styles.serv_prod1}>
                        <h4>Featured Products</h4>
                    </div>
                    <div className={Styles.serv_prod2}>
                        <h3>THE BEST SERVICES</h3>
                    </div>
                    <div className={Styles.serv_prod3}>
                        <p>problems trying to resolve the conflict between</p>
                    </div>
                </div> 
                <div className={Styles.serv_pics}>
                    <div>
                        <img src='/images/serv1.png' alt='' />
                        <h3>Easy Wins</h3>
                        <p>Get your best looking smile <br />now!</p>
                    </div>
                    <div>
                        <img src='/images/serv2.png' alt='' />
                        <h3>Concrete</h3>
                        <p>Defalcate is most focused in <br /> helping you discover your most<br /> beautiful smile</p>
                    </div>
                    <div>
                        <img src='/images/serv3.png' alt='' />
                        <h3>Hack Growth</h3>
                        <p>Overcame any hurdle or any<br />other problem.</p>
                    </div>
                </div>

        </div>
      )
    }


export default BestServ