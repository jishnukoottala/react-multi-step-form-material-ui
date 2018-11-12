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
        <Header title="Confirm"/>


        <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
        <List className={classes.listStyle}>
        <ListItem>
          
        <ListItemText  className={classes.listStyle}><Typography variant="body2" gutterBottom>
       FirstName: {values.firstName}
      </Typography></ListItemText>
        </ListItem>
        <ListItem>
          
        <ListItemText  className={classes.listStyle}><Typography variant="body2" gutterBottom>
       Email: {values.email}
      </Typography></ListItemText>
        </ListItem>
        <ListItem>
          
        <ListItemText  className={classes.listStyle}><Typography variant="body2" gutterBottom>
       City: {values.city}
      </Typography></ListItemText>
        </ListItem>
        <ListItem>
          
        <ListItemText  className={classes.listStyle}><Typography variant="body2" gutterBottom>
       Occupation: {values.occupation}
      </Typography></ListItemText>
        </ListItem>
        <ListItem>
          
        <ListItemText  className={classes.listStyle}><Typography variant="body2" gutterBottom>
       Bio: {values.bio}
      </Typography></ListItemText>
        </ListItem>
        
        </List>
           
        </Grid>

      

        <Grid item xs={12}>
        <Button variant="contained"  className={classes.button}  onClick={this.back}>
       Back
      </Button>
         <Button variant="contained" color="primary" className={classes.button}  onClick={this.continue}>
       Confirm and Submit
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