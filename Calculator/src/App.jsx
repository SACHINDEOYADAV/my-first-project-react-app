import Display from "./Components/display";
import ButtonsContainer from "./Components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";


function App() {
  const [calVal, setcalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setcalVal("");

    } else if (buttonText === '=') {
      const result = eval(calVal);
      setcalVal(result);

    } else {
      const newDisplayValue = calVal + buttonText ;
      setcalVal(newDisplayValue);
    }
  }



  return (
  <div className={styles.Calculator}>
    <Display displayValue={calVal}></Display>
    <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
     
    
  </div>
  );
} 

export default App;
