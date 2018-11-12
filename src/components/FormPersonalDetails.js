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



 class FormPersonalDetails extends Component {


    continue = e=>{
        e.preventDefault();
        this.props.nextStep();
    }

    back = e=>{
        e.preventDefault();
        this.props.prevStep();
    }
  render() {
    const { classes } = this.props;
    const {values,handleChange} = this.props;
    return (
      <MuiThemeProvider>
        <Header title="Enter Personal Details"/>


        <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
        <TextField
          id="occupation"
          label="Occupation"
          className={classes.textField}
          defaultValue={values.occupation}
          onChange={handleChange('occupation')}
          margin="normal"
        />
           
        </Grid>

        <Grid item xs={12}>
        <TextField
          id="City"
          label="City"
          className={classes.textField}
          defaultValue={values.city}
          onChange={handleChange('city')}
          margin="normal"
        />
          
        </Grid>

        <Grid item xs={12}>
        <TextField
          id="Bio"
          label="Bio"
          className={classes.textField}
          defaultValue={values.bio}
          onChange={handleChange('bio')}
          margin="normal"
        />
         
        </Grid>

        <Grid item xs={12}>
        <Button variant="contained"  className={classes.button}  onClick={this.back}>
       Back
      </Button>
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




FormPersonalDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormPersonalDetails);