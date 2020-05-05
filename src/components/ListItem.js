import React from 'react'
import { Container, Checkbox, FormControlLabel, IconButton } from '@material-ui/core'
import './listitem.css'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

class ListItem extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            checked : props.todo.checked,
            id : props.id
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        }

    handleClick(){
        this.setState({
            checked : !this.state.checked
        })
    }

    handleDelete(){
        console.log(this.state.id)
        this.props.deleteTodo(this.state.id)
    }
   
    render(){

        return(
            <>
                <div  className="root">
                    <Container>
                    <FormControlLabel
                    className={this.state.checked && "checked"}
          control={<Checkbox color="primary" checked={this.state.checked} onClick={this.handleClick}/>}
          label={this.props.todo.todo}
          labelPlacement="end"
        />
        <IconButton className="hiddens" onClick={this.handleDelete}>
            <HighlightOffIcon/>
        </IconButton>
                    </Container>
                </div>
            </>
        )
    }
    
}

export default ListItem