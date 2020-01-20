import React,{Component} from 'react';
import './App.css';
import { CardList } from './conponents/card-list/card-list-component';
import { SearchField } from './conponents/SearchField/SearchFieldComponent'

class App extends Component{
    
    constructor(){
            super();
            this.state={
          classes:[],
          searchField:''
        };
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
           .then(response => response.json())
           .then(user => this.setState({classes:user}))
    }
   handleChanges = e => {
       this.setState(
    {searchField:e.target.value});
   } 
render(){
    const { classes , searchField } = this.state;
    const result = classes.filter(classe => classe.name.toLowerCase().includes(searchField.toLowerCase()))
    
return (
    <div className="App">

    <SearchField  placeholder='Search ...'
    handleChange={this.handleChanges}/>

    <CardList cards={result} />
    </div>
  )
}}

export default App;
