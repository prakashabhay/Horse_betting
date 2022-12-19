import TableRow from './TableRow';
import styles from './Table.module.css'

import {Props} from './types'

const Table:React.FC<Props> = ({ data }) => {
  return (
    <table className={styles.table}>
      <tbody>
        {data.map((item) => (
          <TableRow key={item.key} data={item} />
        ))}
      </tbody>
    </table>
  );
};

export default Table