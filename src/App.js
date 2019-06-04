import React,{ Component } from 'react';
import './App.css';
import Person from './person/container/person'
import Myheader from './header/container/header'

// 有状态组件
// const App= () => {
  class App extends Component {
     constructor(props){
       super(props)
       this.state = {
        persondata:[
          {id:1,name:'fastfan',count:5},
          {id:2,name:'xifeng',count:15},
          {id:3,name:'xixiaof',count:25},
          {id:4,name:'xixiaofeng',count:35},
        ],
        flag:false
      };
     }
    switchDatahandler = () => {
      console.log(111)
      let dosflag=this.state.flag;
        this.setState({
          flag:!dosflag
        })
     }
     switchNamehandler = (nameIndex) => {
      const persons=[...this.state.persondata];
      persons.splice(nameIndex,1)
      this.setState({
        persondata:persons
      })
     }
     nameChangedhandler=(event,id)=>{
      const personIndex=this.state.persondata.findIndex(word=>{
        return word.id===id;
      })
      const person={
        ...this.state.persondata[personIndex]
      }
      person.name=event.target.value;
      const persons=[...this.state.persondata];
      persons[personIndex]=person;
      this.setState({
        persondata:persons
      })
     }

    render(){

      let contents=null;

      if(this.state.flag) {
        contents=  <Person persons={this.state.persondata} 
                changed={this.nameChangedhandler} 
                clicked={this.switchNamehandler} />      
      }

      return (
      <div className="App">
        <Myheader clickeds={this.switchDatahandler}/>
        {contents}
      </div>
    );
    }

  }
  
// }

export default App;
