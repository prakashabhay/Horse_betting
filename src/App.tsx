import {useState} from 'react';

import './App.css';
import BetTypeSelection from './components/gameTypeSelection/GameTypeSelection'
import GameinfoContainer from './components/gameInfoContainer/GameInfoContainer';
import Spinner from './components/spinner/Spinner';
import {sortByTime,getData } from './utils';
import {RaceProducts,RaceProps} from './types'

function App() {
  const [raceResults, setraceResults] = useState<RaceProps|null>(null);
  const [recentProducts, setrecentProducts] = useState<RaceProducts|null>(null);
  const [spinner,setSpinner] = useState<boolean>(false);

  const setGameType = (gameType:string):void => {
    if(gameType && gameType !== 'Select Bet'){
      fetchProducts(gameType);
    }else{
      setSpinner(false)
      setraceResults(null);
    }
  };

  const fetchProducts = async (gameType:string) => {
    setSpinner(true);
    getData(`products/${gameType}`).then((data)=>{
      if (data?.results?.length>0) {
        const product = data.results.sort(sortByTime)[0];
        setrecentProducts(product);
        fetchGame(product.id);
      }
    },()=>{
      setSpinner(false);
      setraceResults(null);
    })
  };

  const fetchGame = async (id:string) => {
    getData(`games/${id}`).then((data)=>{
      setSpinner(false);
      setraceResults(data);
    },()=>{
      setraceResults(null);
      setSpinner(false);
    })
  };

  return (
    <>
    <header className="header">
     <BetTypeSelection selectGameType={setGameType}></BetTypeSelection>
    </header>
    <div className='container'>
    <GameinfoContainer raceResults = {raceResults} recentProducts={recentProducts}></GameinfoContainer>
    </div>
    {spinner && <div className='spinner'>
    <Spinner></Spinner>
    </div>
  }
  </>
  );
}

export default App;
