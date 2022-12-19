import React, { useState } from 'react';
import HorseDetails from '../horseDetails/HorseDetails';
import styles from './Table.module.css'
import {RowProps} from './types'

const TableRow:React.FC<RowProps> = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  const handleRowClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <tr onClick={handleRowClick}>
        <td>
        <div className={styles.row}>
            <span>{data.number}</span>
            <span>{data.horse.name}-</span>
            <span>{data.driver.firstName+' '+data.driver.lastName}</span>
        </div>
        </td>
      </tr>
      {expanded && (
        <tr>
            <td>
            <HorseDetails horseInfo={data?.horse}></HorseDetails>
            </td>
        </tr>
      )}
    </>
  );
};

export default TableRow;