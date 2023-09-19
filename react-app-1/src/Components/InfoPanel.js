import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function InfoPanel() {

  const [globalData, setGlobalData] = useState({});

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://corona.lmao.ninja/v2/countries/Italy");
      let data = await response.json();
      setGlobalData(data);
      console.log(data);
    }
    getData();
  }, [])

  return (
    <Box style={{ maxWidth: 1000, margin: '0 auto', marginTop: 50 }}>
      <Grid container spacing={3}>
        {Object.keys(globalData).map((key, ind) => {
          return (
            <Grid item xs={12} sm={4} key={ind}>
              <Item elevation={3} >
                <h3 style={{color: '#3f51b5'}}>{key.toUpperCase()}</h3>
                <h3>{globalData.cases}</h3>
                </Item>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  );
}
