
import React from 'react';
import Table from '../expandTable/Table';

import {Props} from './types'

const Racedetails:React.FC<Props>=({starts})=><Table data={starts}></Table>

export default Racedetails;