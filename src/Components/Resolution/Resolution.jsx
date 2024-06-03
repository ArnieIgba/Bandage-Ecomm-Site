import React from 'react'
import Styles from './Resolution.module.css'
import '../../App.css'

function Resolution() {
  return (
    <div className={Styles.res_wrap}>
      <div className={Styles.res_wrap_txt}>
        <h6>Designing Better Experience</h6>
        <h2>Problems trying to resolve <br /> the conflict between </h2>
        <p>Problems trying to resolve the conflict between the two major <br />realms of Classical physics: </p>
        <h3>$16.48</h3>
      </div>
      <button className={Styles.cta}>ADD YOUR CALL TO ACTION</button>
    </div>
  )
}

export default Resolution