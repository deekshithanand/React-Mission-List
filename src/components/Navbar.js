import React from 'react'
import {AppBar , Toolbar, Typography} from '@material-ui/core'

export default class Navbar extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            todoItems : []

        }

    }
    render(){
        return(
            <>
              <AppBar position='fixed'>
                  <Toolbar>
                      <Typography variant='h6'>
                          TodoList
                      </Typography>
                  </Toolbar>
                  </AppBar>  
                  <Toolbar/>
            </>
        )
    }
}