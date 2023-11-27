import './App.css';
import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPoster from './Components/RowPoster/RowPoster';
import{orginals,action,comedy,horror}from './urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      
      <RowPoster url={orginals} title='Netflix Orginals'/>
      <RowPoster url={action} title='Action' isSmall />
      <RowPoster url={comedy} title='Comedy' isSmall />
      <RowPoster url={horror} title='Horror' isSmall />
     
    </div>
  );
}

export default App;


