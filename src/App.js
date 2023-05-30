import React from 'react';
import './app.css';
import Form from './components/Form';
import background from './assets/bg.jpg'

function App() {
  return ( 
    
    <div className="screen flex-center" >
        <img src={background} alt='desktop' className='absolute'/>
        <Form />
    </div>
    

    

  )

  } 

export default App ;
