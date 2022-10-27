import React from 'react';
import { useState } from 'react';
import './App.css';
import Modal from "react-modal"

Modal.setAppElement('#root')

function App() {

   const [carrosUM, setCarrosUM] = useState(30)

   const [toogleUM, setToogleUM] = React.useState(true);
   const [corUM, setCorUM] = React.useState('#E0FFFF');
   React.useEffect(() => {
     if (carrosUM < 30){
         setCorUM((state) => toogleUM ? '#1E90FF': '#1E90FF');
         setToogleUM(state => !state)
     }
     if (carrosUM < 6){
         setCorUM((state) => toogleUM ? '#B22222': '#B22222');
         setToogleUM(state => !state)
     }
   }, [toogleUM]); 
   
   const [disableUM, setDisableUM] = React.useState(false);

   function comprar_carroUM(){
      setCarrosUM(carrosUM - 1)

      setToogleUM(state => !state)

      if (carrosUM < 2){
         setDisableUM(true)
     }
   } 

   const [modalIsopen, setIsopen] = useState(false)

   function openModal(){
     setIsopen(true);
   }
 
   function closeModal(){
     setIsopen(false);
   }

  return (
    <div className="App">
     <div id='bloco1' style={{background: corUM}}>
        <p>Bloco 01</p>
        <button onClick={openModal}>Open</button>
        <Modal
          isOpen={modalIsopen}
          onRequestClose={closeModal}
          contentlabel="example modal"
          overlayClassName="modal"
          className="modal-content"
        >
            <h2>Foi caraio</h2>
            <br />
            <button disabled={disableUM} className='carrosUM' onClick={comprar_carroUM} >{carrosUM}</button>
            <button onClick={closeModal}>close</button>
        </Modal>
     </div>
     <div id='bloco2'>
        <p>Bloco 02</p>
     </div>
     <div id='bloco3'>
        <p>Bloco 03</p>
     </div>
     <div id='bloco4'>
        <p>Bloco 04</p>
     </div>
     <div id='bloco5'>
        <p>Bloco 05</p>
     </div>
     <div id='bloco6'>
        <p>Bloco 06</p>
     </div>
     <div id='bloco7'>
        <p>Bloco 07</p>
     </div>
     <div id='bloco8'>
        <p>Bloco 08</p>
     </div>
     <div id='bloco9'>
        <p>Bloco 09</p>
     </div>
     <div id='bloco10'>
        <p style={{marginTop: '300px'}}>Bloco 10</p>
     </div>
     <div id='bloco11'>
        <p>Bloco 11</p>
     </div>
    </div>
  );
}

export default App;
