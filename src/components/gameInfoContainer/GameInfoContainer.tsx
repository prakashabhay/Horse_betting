import Raceinformation from '../raceInformation/Raceinformation';
import Racedetails from '../raceDetails/Racedetails';
import {Props} from './types'
import styles from './gameInfoContainer.module.css'
import { formatDate } from '../../utils';

const RaceinfoContainer:React.FC<Props>= ({raceResults,recentProducts})=>{
  const time = formatDate(recentProducts?.startTime ?? '')
    return(
    <>
      {raceResults && (
          <div className={styles.raceContainer}>
            <b>{`${(recentProducts?.tracks[0]?.name ?? "No name available")} - ${time}`}</b>
            {raceResults?.races?.map((race) => (
            <div className={styles.raceInformation} key={race.id}>
              <Raceinformation data={race}></Raceinformation>
              <Racedetails starts={race.starts}></Racedetails>
            </div>
            ))}
          </div>
        )}
        </>
    );     
}

export default RaceinfoContainer;