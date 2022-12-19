import {GametypeEventProps} from './types'
import React,{ useState} from 'react';
import styles from './gameTypeSelection.module.css'
const GameTypeSelection: React.FC<GametypeEventProps> = ({
    selectGameType
})=> {
    const gameType:string[] = ['V75','V86','GS75']
    const [selectedGameType,setSelectedGameType] = useState<string>('')
    const handelChange = (value:string):void=>{
        setSelectedGameType(value)
        selectGameType(value)
    }
    return (
    <select className={styles.betType} onChange={(e)=>handelChange(e.target.value)} value={selectedGameType}>
        <option>Select Game Type</option>
        {
            gameType.map((game: string)=>(
            <option key={game} value={game}>{game}</option>
            ))
        }
    </select>
    );
  }
  
  export default GameTypeSelection;