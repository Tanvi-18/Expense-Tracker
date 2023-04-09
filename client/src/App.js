import './App.css';
import Graph from './components/Graph';
import Form from './components/Form';

//import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages and components
//import Home from './pages/Home'
//import Signup from './pages/Signup'
//import Login from './pages/Login'
//import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <div className= "container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
      <h1 className="text-4xl py-8 mb-10 bg-blue-900 text-white rounded">Expense Tracker</h1>

      {/*grid columns*/}
      <div className="grid md:grid-cols-2 gap-4">
        {/*Charts*/}
        <Graph></Graph>
        {/*Form*/}
        <Form></Form>
      </div>
     </div>
    </div>
  );
}

export default App;
