import React, { useState } from 'react'
import { Card, Form } from 'react-bootstrap';
import './Calculator.css'

function Calculator() {
  const [result, setResult] = useState("")

  const handleClick = (value) => {
    setResult(result + value)
  }
  const handleClear = () => {
    setResult("")
  }
  const handleCalculate = () => {
    setResult(eval(result))
  }

    const customStyle = {
      backgroundColor: 'red',
      color: 'white',
      padding: '10px 60px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    };
    const customColor = {
      backgroundColor: 'gray',
      color: 'black',
      padding: '12px 18px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    };
    const customAC = {
      backgroundColor: 'lightblue',
      color: 'black',
      padding: '14px 18px',
      borderRadius: '5px',
      cursor: 'pointer',
    };

  return (
    <div>
      <h3>Calculator</h3>
      <div className="Cal">
        <Card border="warning" className='Car'>
          <Card.Header>
        <Form.Control
            placeholder='0'
            value={result}
            readOnly
            className='Form'
          />
          </Card.Header>
          <Card.Body>
            <div>
              <div>
                <button className='m-1' onClick={() => handleClick('1')} style={customColor}>1</button>
                <button className='m-1' onClick={() => handleClick('2')} style={customColor}>2</button>
                <button className='m-1' onClick={() => handleClick('3')} style={customColor}>3</button>
                <button className='m-1' onClick={handleClear} style={customAC}>AC</button>
              </div>
              <div>
                <button className='m-1' onClick={() => handleClick('4')} style={customColor}>4</button>
                <button className='m-1' onClick={() => handleClick('5')} style={customColor}>5</button>
                <button className='m-1' onClick={() => handleClick('6')} style={customColor}>6</button>
                <button className='m-1' onClick={() => handleClick('-')} style={customColor}><i class="fa-solid fa-minus"></i></button>
              </div>
              <div>
                <button className='m-1' onClick={() => handleClick('7')} style={customColor}>7</button>
                <button className='m-1' onClick={() => handleClick('8')} style={customColor}>8</button>
                <button className='m-1' onClick={() => handleClick('9')} style={customColor}>9</button>
                <button className='m-1' onClick={() => handleClick('*')}style={customColor}><i class="fa-solid fa-xmark"></i></button>
              </div>
              <div>
                <button className='m-1' onClick={() => handleClick('0')} style={customColor}>0</button>
                <button className='m-1' onClick={() => handleClick('.')} style={customColor}>.</button>
                <button className='m-1' onClick={() => handleClick('/')}style={customColor}><i class="fa-solid fa-divide"></i></button>
                <button className='m-1' onClick={() => handleClick('+')} style={customColor}><i class="fa-solid fa-plus"></i></button>
              </div>
              <div>
                <button className='m-1' onClick={handleCalculate} style={customStyle}><i class="fa-solid fa-equals"></i></button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Calculator