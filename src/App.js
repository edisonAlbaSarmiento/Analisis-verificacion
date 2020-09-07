/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import AnyChart from 'anychart-react'
import anychart from 'anychart'

let stage = anychart.graphics.create();
let chart1 = anychart.line([1, 2, 3]);
chart1.bounds(0, 0, '100%', '50%');
let chart2 = anychart.column();
chart2.column([3, 2, 1]);
chart2.line([3, 5, 6]);
chart2.bounds(0, '50%', '100%', '50%');


function App() {
  const [count, setCount] = useState(0);
  const [resultArray, setResultArray] = useState([]);
  const arrOrginal = [100, 4, 420, 322, 617, 122, 433, 314, 653, 1];

  
  const mergeSort = arr => {
    const l = arr.length;
    let j, temp;
    let contador = 0;
    for ( let i = 1; i < l; i++ ) {
      j = i;
      temp = arr[ i ];
      while ( j > 0 && arr[ j - 1 ] > temp ) {
        arr[ j ] = arr[ j - 1 ];
        j--;
      }
      contador = i++;
      console.log('contador',contador)
      arr[ j ] = temp;
    }
    setCount(contador)
    
    return arr;
  };
  
  useEffect(() => {
    const result = mergeSort(arrOrginal);
    setResultArray(result)
  }, []);

  

console.log('result',resultArray)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        lista original
        <br/>
        <div style={{ display: "flex"}}>
        {arrOrginal.map(itemOld => (
             <p>
             {itemOld},
             </p>
          ))}
        </div>
       
        </p>
    
        <p>
        lista organizada
        </p>
        <div style={{ display: "flex"}}>
        {resultArray.map(item => (
             <p>
             {item},
             </p>
          ))}
        </div>
        <p>
        Numero de comparaciones
        </p>
        <p>
        {count}
        </p>
        <AnyChart
          instance={stage}
          width={800}
          height={600}
          charts={[chart1, chart2]}
        />
      </header>
    </div>
  );
}

export default App;
