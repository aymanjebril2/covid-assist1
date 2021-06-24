import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
   btn:{
     backgroundColor:"#FE6760"
   }
  }));


const HeaderLink = () => {
    const classes = useStyles();
    return (
        <div className="div_link">
          
             <Link to="/">
             <li>HOME</li>
             </Link>
             <Link to="/food">
             <li>FOOD</li>
             </Link>
             <Link to="/shelter">
             <li>SHELTER</li>
             </Link>
             <Link to="/mentalhealth">
             <li>MENTAL HEALTH</li>
             </Link>
             <Link to="/aboutus">
             <li>ABOUT US</li>
             </Link>
             <div>
             <Link to="/signin">
             
             <Button variant="contained" className={classes.btn}>
              Sgin In
            </Button>
            </Link>
            </div>
            </div>



          
            
       
    )
}

export default HeaderLink
