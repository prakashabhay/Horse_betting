import React from 'react';
import styles from './horseDetails.module.css'
import {HorseDetailsType} from './types'

const HorseDetails:React.FC<HorseDetailsType>=({horseInfo})=>{
    return(
    <>
      <div className={styles.horseDetailContainer}>
        <span>Trainer:</span>
        <span>{horseInfo?.trainer?.firstName} {horseInfo?.trainer?.lastName}</span>
      </div>
      <div className={styles.horseDetailContainer}>
        <span>Horse Father:</span>
        <span>{horseInfo?.pedigree?.father?.name}</span>
      </div>
      </>
    );
}

export default HorseDetails;