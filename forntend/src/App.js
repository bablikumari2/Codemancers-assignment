import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

import Post from './components/Feed/Post';




function App() {
  return (
    <div >
     
      <Header/>
      <div className='display'>
      <Sidebar/>
   
      
       <Post/>
    
      </div>
   
    </div>
  );
}

export default App;
