import React from 'react'
import Styles from './Response.module.css'
import '../../App.css'

function Response() {
  return (
    <div className={Styles.response_container}>
        <div className={Styles.response_item1}>
            <h3>What they say about us</h3>
            <img src="images/response/resp1.png" alt="" />
            <div className={Styles.star}>
              <img src='/images/response/rstar.png'/>
              <img src='/images/response/rstar.png'/>
              <img src='/images/response/rstar.png' />
              <img src='/images/response/rstar.png' /> 
              <img src='/images/response/erstar.png'/>
            </div>
             <h6>Slate helps you see how many more days you need to work to <br/>reach your financial goal.</h6>
            <p><a href="#">Regina Miles</a></p>
            <h6>Designer</h6>
        </div>
        <div className={Styles.response_item2}>
            <img src='/images/response/resp2.png'/>
            <img src='/images/response/resp5.png'/>
            <img src='/images/response/resp4.png'/>
            <img src='/images/response/resp6.png'/>
            <img src='/images/response/resp10.png'/>
            <img src='/images/response/resp9.png'/>
            <img src='/images/response/resp7.png'/>
            <img src='/images/response/resp8.png'/>
            <img src='/images/response/resp3.png'/>
        </div>
        
    </div>
  )
}

export default Response