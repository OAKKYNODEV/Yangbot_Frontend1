import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';


import CssBaseline from '@material-ui/core/CssBaseline';

import axios from 'axios';

const styles = theme => ({
  appBarSpacer: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(2)

  },
});

function App(props) {
  const { classes } = props;
  
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
   
  };
  

  return (
    <div className={classes.root}>
      <CssBaseline />
    <div className={classes.appBarSpacer} />
    <div class="container">
    <div className="d-flex flex-column align-items-center">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload} className="btn btn-primary mt-3">อัปโหลด</button>
      </div>
    </div>
     
    </div>
  );
}

export default withStyles(styles)(App);
