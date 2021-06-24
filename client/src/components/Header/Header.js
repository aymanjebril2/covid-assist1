import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from './img/logo.png'
import HeaderLink from './HeaderLink/HeaderLink'
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    root: {
    //   flexGrow: 1,
    },
     menuButton: {
       left:-10
    
    },
  }));

const Header = () => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{backgroundColor:"black" ,  height:80}}>
          <Toolbar variant="dense">
          <Link to="/">
             <img src={logo} alt="covid-assit-logo" style={{ height:80 }}/>
             </Link>
          <HeaderLink />
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default Header
