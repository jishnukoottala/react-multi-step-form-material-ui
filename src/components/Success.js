import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
  },

  listStyle:{
    textAlign: 'center',
  }
});



 class FormPersonalDetails extends Component {


    continue = e=>{
        e.preventDefault();
        // process form //
        this.props.nextStep();
    }

    back = e=>{
        e.preventDefault();
        this.props.prevStep();
    }
  render() {

    
    const { classes } = this.props;
    const {values,handleChange} = this.props;
    console.log('all values are ',values)
    return (
      <MuiThemeProvider>
        <Header title="Success"/>

        <h1>Thanks for Submitting</h1>
        
        

        
      </MuiThemeProvider>
    )
  }
}




FormPersonalDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormPersonalDetails);