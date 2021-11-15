import { useState } from 'react';
import * as math from 'mathjs';
import './App.css';
import Button from './components/Button'
import Display from './components/Display';

function App() {
  const [problem, setProblem] = useState('0');

  const onButtonClick = val => {
    if (isNaN(val) && isNaN(problem.charAt(problem.length - 1))) {
      return;
    } else {
      setProblem(problem + val);
    }
  }

  const clearButton = () => {
    setProblem('0');
  }
  
  const solveProblem = () => {
    if (!isNaN(problem.charAt(problem.length - 1))) {
      let val = math.evaluate(problem);

      if (val || val === 0) {
        setProblem(val.toString());
      } else {
        return;
      }

    } else {
      return;
    }
  }
  
  return (
    <div className="app">
      <div className="calc-container">
        <h1>Basic React Calc</h1>
        <Display input={problem} />

        <div className="row">
          <Button text='7' clicked={onButtonClick} />
          <Button text='8' clicked={onButtonClick} />
          <Button text='9' clicked={onButtonClick} />
          <Button text='/' clicked={onButtonClick} />
        </div>

        <div className="row">
          <Button text='4' clicked={onButtonClick} />
          <Button text='5' clicked={onButtonClick} />
          <Button text='6' clicked={onButtonClick} />
          <Button text='*' clicked={onButtonClick} />
        </div>
        
        <div className="row">
          <Button text='1' clicked={onButtonClick} />
          <Button text='2' clicked={onButtonClick} />
          <Button text='3' clicked={onButtonClick} />
          <Button text='-' clicked={onButtonClick} />
        </div>
        
        <div className="row">
          <Button text='.' clicked={onButtonClick} />
          <Button text='0' clicked={onButtonClick} />
          <Button text='CA' clicked={clearButton} />
          <Button text='+' clicked={onButtonClick} />
        </div>

        <div className="row">
          <Button text='=' clicked={solveProblem} />
        </div>
      </div>
    </div>
  );
}

export default App;
