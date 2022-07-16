import { Component } from 'react';
import Customer from './components/CustomerId'
import './App.css';

const customer = [{
  'id' : 1,
  'image' : 'http://placeimg.com/64/64/1',
  'name' : '김동현',
  'birthday' : '010619',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'http://placeimg.com/64/64/2',
  'name' : 'ddd',
  'birthday' : '020619',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 3,
  'image' : 'http://placeimg.com/64/64/3',
  'name' : 'aaa',
  'birthday' : '010619',
  'gender' : '남자',
  'job' : '대학생'
}
]

class App extends Component{
  
  render(){
    return (
      customer.map(c => {
        return(
          <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}></Customer>
        )
      })
    );
  } 
}


export default App;
