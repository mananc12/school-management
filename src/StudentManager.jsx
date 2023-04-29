import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, TextField } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    margin: '8px',
    width: '300px',
  },
  submitButton: {
    margin: '16px',
  },
});

function StudentManager() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4">Student Manager</Typography>
      <form className={classes.form}>
        <TextField
          className={classes.textField}
          label="Name"
          variant="outlined"
          size="small"
        />
        <TextField
          className={classes.textField}
          label="Email"
          variant="outlined"
          size="small"
        />
        <Button
          className={classes.submitButton}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default StudentManager;
