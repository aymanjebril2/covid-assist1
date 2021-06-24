import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { createMuiTheme, ThemeProvider, Tooltip, Collapse } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "#0000FF",
      },
    },
  });
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(10),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: "#FE6760",
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: "#FE6760",
      color: "white",
      "&:hover": {
        backgroundColor: "lightgray",
      },
    },
  }));

const SignUp = () => {
    const classes = useStyles();
    const history = useHistory();
    const [alert, revealAlert] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [termsAndConditions, agreeToTermsAndConditions] = useState(false);
    const[user,setUser]=useState({
    firstName:"",
    lastName :"",
    email:"",
    password:""
    })


    const handleChange = (event) => {
        const updatedField = { [event.target.name]: event.target.value };
    
        const editedUser = Object.assign(user, updatedField);
    
        setUser(editedUser);
      };
     

      const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(user)
        // if (brand.title.length && brand.img.length && brand.link.length !== 0) {
        await axios({
          url: `/api/signup`,
          method: "POST",
          data: user,
        })
          .then((res) => {
              if(res.data.errors){
                  const {firstName , lastName , email ,password} = res.data.errors
                  console.log(email)
                revealAlert(`${email}`);
          }})
        
            // 
      
            //   if(res.status ===200){
            //     const {firstName , lastName , email , password} = res.data
            //       if( email.length > 0  ){
            //         setErrMsg(email)
            //         revealAlert(!email);
            //       }
            //     // setErrMsg(res.data)
            //     // revealAlert(!res.data);
            //   }
            //   console.log(res)
            //   if(res.status===201){
               
            //   }
            //   if (!termsAndConditions) {
            //     console.log('here')
            //     setErrMsg('Please agree to Terms & Conditions')
            //     revealAlert(true)
            //     return;
            //   }
        
    
        //   .catch((err) => console.log(err))
    
       
        
      };


    return (
       <div >
        <Container component="main" maxWidth="xs" >
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <ThemeProvider theme={theme}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      onChange={handleChange}
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      onChange={handleChange}
                      autoComplete="lname"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      onChange={handleChange}
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Tooltip title="Passphrase must be 16 characters long" placement="left">
                      <TextField
                      color="primary"
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Passphrase"
                        type="password"
                        id="password"
                        onChange={handleChange}
                        autoComplete="current-password"
                      />
                    </Tooltip>
                  </Grid>
                </ThemeProvider>
                <Grid container xs={12} justify="center">
                  <Grid item xs={9}>
                  <Collapse in={alert}>
                    <Alert severity="error">{errMsg}</Alert>
                  </Collapse>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="allowExtraEmails"
                        style={{ color: "black" }}
                        />
                      }
                    onChange={(e) => agreeToTermsAndConditions(e.target.checked)}
                    label="I agree to the Terms & Conditions and Privacy Policy."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justify="space-around">
                <Grid item>
                  <Link
                    href="/signin"
                    variant="body2"
                    style={{ color: "black" }}
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}></Box>
        </Container>
       </div>
      );
}

export default SignUp
