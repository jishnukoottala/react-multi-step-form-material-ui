import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Header from './Header';



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
});



 class FormUserDetails extends Component {


    continue = e=>{
        e.preventDefault();
        this.props.nextStep();
    }
  render() {
    const { classes } = this.props;
    const {values,handleChange} = this.props;
    return (
      <MuiThemeProvider>
        <Header title="Enter User Details"/>


        <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
        <TextField
          id="first-name"
          label="First Name"
          className={classes.textField}
          defaultValue={values.firstName}
          onChange={handleChange('firstName')}
          margin="normal"
        />
           
        </Grid>

        <Grid item xs={12}>
        <TextField
          id="first-name"
          label="Last Name"
          className={classes.textField}
          defaultValue={values.lastName}
          onChange={handleChange('lastName')}
          margin="normal"
        />
          
        </Grid>

        <Grid item xs={12}>
        <TextField
          id="first-name"
          label="Email"
          className={classes.textField}
          defaultValue={values.email}
          onChange={handleChange('email')}
          margin="normal"
        />
         
        </Grid>

        <Grid item xs={12}>
         <Button variant="contained" color="primary" className={classes.button}  onClick={this.continue}>
       Continue
      </Button>
        </Grid>
        </Grid>
        
        </div>
       
        
        

        
      </MuiThemeProvider>
    )
  }
}




FormUserDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormUserDetails);