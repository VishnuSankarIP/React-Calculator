import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import '../App.css'; 

function MainPage() {
    const [input, setInput] = useState('');
   

    const ClearInput = () => {
        setInput("");
    }
    const handleButton = (value) => {
        setInput((prevInput) => prevInput + value);
    };

    const handleDelete = () => {
        setInput((prevInput) => prevInput.slice(0, -1));
    };



    const calculate = () => {
        try {
            const calculatedResult = eval(input);
            setInput(calculatedResult.toString()); 
        } catch (error) {
            setInput('Error'); 
        }
    };

    return (
        <>
            <div className="cc  mt-5 " >
                <Card style={{ width: '24rem' }}>

                    <Card.Body>

                        <Card.Text>
                           <h3><input style={{ height: '60px', width: '100%' }} value={input}></input></h3> 
                            <div className="row mt-2 ">
                                <div className="col ms-1">
                                    <button className='ac' onClick={ClearInput }><h3 style={{ width: '155px' }}>AC</h3></button>
                                    <button className='del' onClick={handleDelete}><h3 style={{ width: '70px' }}>DEL</h3></button>
                                    <button  className='div' onClick={() => handleButton('/')} ><h3 style={{ width: '70px' }}>/</h3></button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col ms-1">
                                    <button onClick={() => handleButton('7')} ><h3 style={{ width: '70px' }}>7</h3></button>
                                    <button onClick={() => handleButton('8')}><h3 style={{ width: '70px' }}>8</h3></button>
                                    <button onClick={() => handleButton('9')} ><h3 style={{ width: '70px' }}>9</h3></button>
                                    <button className='mul' onClick={() => handleButton('*')}><h3 style={{ width: '70px' }}>*</h3></button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col ms-1">
                                    <button onClick={() => handleButton('4')}><h3 style={{ width: '70px' }}>4</h3></button>
                                    <button onClick={() => handleButton('5')}><h3 style={{ width: '70px' }}>5</h3></button>
                                    <button onClick={() => handleButton('6')}><h3 style={{ width: '70px' }}>6</h3></button>
                                    <button  className='add' onClick={() => handleButton('+')}><h3 style={{ width: '70px' }}>+</h3></button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col ms-1">
                                    <button  onClick={() => handleButton('1')}><h3 style={{ width: '70px' }}>1</h3></button>
                                    <button onClick={() => handleButton('2')}><h3 style={{ width: '70px' }}>2</h3></button>
                                    <button onClick={() => handleButton('3')}><h3 style={{ width: '70px' }}>3</h3></button>
                                    <button  className='sub' onClick={() => handleButton('-')}><h3 style={{ width: '70px' }}>-</h3></button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col ms-1">
                                    <button onClick={() => handleButton('0')}><h3 style={{ width: '70px' }}>0</h3></button>
                                    <button onClick={() => handleButton('.')}><h3 style={{ width: '70px' }}>.</h3></button>
                                    <button className='equ' onClick={calculate}><h3 style={{ width: '155px' }}>=</h3></button>


                                </div>
                            </div>
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default MainPage