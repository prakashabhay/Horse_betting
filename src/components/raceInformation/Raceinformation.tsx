import React from 'react';

import styles from './Raceinformation.module.css';

import { formatDate } from '../../utils';
import {Props} from './types'
 
const Raceinformation:React.FC<Props> = ({data})=>{
  const time = formatDate(data?.startTime);
   return(
       <div className={styles.row + ' '+styles.raceRow}>
       <span>{data?.number}-</span>
       <span>{data?.name ?? "No name available"}</span>
       <span>{time}</span>
     </div>
   );
}


export default Raceinformation;