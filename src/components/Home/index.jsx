import React from 'react';
import Header from '../shared/Header';
import {Link} from 'react-router-dom';

// You need to import your shared header...

const Home = () => {
  return (
    <>
    <Header />
    <button style={{fontfamily: "Comic Sans MS, Comic Sans, cursive",backgroundcolor: "white",color: "black", border: "2px solid #cc5200", padding: "15px"}}>
      <Link to="/About">About</Link>
    </button>
      {/* You need to use your shared header component... */}
      {/* You need a link to your about page as a call to action */}
    </>
  );
}
 
export default Home;

//@MauliN