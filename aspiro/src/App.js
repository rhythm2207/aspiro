import React from 'react'
import './App.css';
import Navbar from './components/navbar/navbar'
import Description from './components/Description/description';
import Category from './components/category/category'
import TopSell from './components/top-selling/top-selling';
import Tripbook from './components/book-trip/book-trip';
import Subscribe from './components/subscribe/subscribe';
import Footer from './components/footer/footer';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <div className='part1'>
          <Navbar></Navbar>
          <Description className="desc"></Description>
        </div>
        <div className="part2">
          <Category></Category>
        </div>
        <div className="part3">
          <TopSell></TopSell>
        </div>
        <div className="part4">
          <Tripbook></Tripbook>
        </div>
        <div className="part5">
          <Subscribe></Subscribe>
        </div>
        <div className="part6">
          <Footer className="part6"> </Footer>
        </div>
      </div>
    )
  }
}
export default App;
