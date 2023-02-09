import { Typography } from '@mui/material'
import { Box , Container } from '@mui/system'
import React from 'react'


const Footer = () => {

  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        {'WAJDI_JBR'}
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  return (
    <>
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          titre
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
description de blog        </Typography>
        <Copyright />
      </Container>
    </Box>
    </>
  )
}

export default Footer