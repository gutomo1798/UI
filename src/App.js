import React from 'react';
import './App.css';

import Box from '@material-ui/core/Box';
import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function App() {
    this.state = {
      nama : 'Gutomo'
    };


  return (
        <div className="app">
          <Box Component="span" display="block">
            <Textfield
              id="standart-with-placeholder"
              label="Nama lengkap"
              placeholder="Masukan nama"
              margin="normal"
              value="{this.state.nama}"
              onChange={this.handleNama}
              />
            </Box>
              
            <Box>
              <Button variant="contained" color="primary" type="submit">
                Ganti Nama
              </Button>
            </Box>
          <form>
          <nama name={this.state.name}/>
          </form>
        </div>
   );
   
}



export default App
