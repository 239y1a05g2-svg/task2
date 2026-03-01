import './App.css';
import Landing from './Landing/Landing';
import Nav from './Nav/Nav';
//import Login1 from './Login1/Login1';
import Register from './Register/Register';
import Login from './Login/Login'
import About from './About/About';
import Contact from './Contact/Contact';
import Course from './Course/Course';
import Faculty from './Faculty/Faculty';
//import Nav from '../Nav/Nav';import Login1 from './Login1/Login1';import Usestate from './Usestate/Usestate';


// let student={
//  name:"vishnu",
//  age:20,
//  course:"B.tech"

//}

// <Landing name={student.name} age={student.age} course={student.course}/>
//        <Nav/>
//        <Login/>
//        <Register/>
//        <About/>
//        <Contact/> <Login1/>  <Usestate/>
// let student=[
//   {name:"vishnu",age:21,loc:"atp"},
//   {name:"abc",age:21,loc:"kdp"},
// {name:"efg",age:21,loc:"krd"},
// ]

function App() {
  
  return (
    
      <div className="App">
      <Landing />
      <Nav />
      <Register />
      <Login />
      <About />
      <Course/>
      <Faculty/>
      <Contact />
    </div>
    

  );
}

export default App;
