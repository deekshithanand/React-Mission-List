import React from 'react'
import {TextField} from '@material-ui/core'
import ListItem from './ListItem'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import './todolist.css'

class TodoList extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            todos : {},
            hidden : false,
            value : '',
            idCount : 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
    }
    handleChange(event){
        this.setState({
            value : event.target.value
        })
    }
    handleClick(){
        if(this.state.value.length > 0){
            this.setState({
                todos : {...this.state.todos, [this.state.idCount]:{todo: this.state.value, checked : false}}
            })
            this.setState({
                value : '',
                idCount : this.state.idCount+1
            })
        }
    }

    deleteTodo(id){
        let val = this.state.todos
        delete val[id]
        this.setState(
            {todos : val}
        )
    }

    render(){
        let keys = Object.keys(this.state.todos)
    //    let notask = keys.length ? [] : [
    //        <Typography variant='caption'>
    //            All cleared! Add missions and keep going!!!
    //        </Typography>
    //    ]

        return(
            <>
            <div className="todolist">
            <TextField id="addtodo" label="Add Todo" type="search" variant="outlined"  onChange={this.handleChange} value={this.state.value}/> 
<div className="fabbutton">
            <Fab color="primary" aria-label="add" onClick={this.handleClick} >
        <AddIcon />
      </Fab>
      </div>
      
          <div className="lists">
          {/* display todos by map functions */}
          {
              keys.map(
                item =>{
                    return(<ListItem todo = {this.state.todos[item]} deleteTodo={this.deleteTodo}  key ={item} id={item} />)
                }
            )
             
          }
          </div>
      
      
            </div>
        
            
        
            </>

            )

    }
}

export default TodoList