import React from 'react';
import './Contacts.css';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Navbars from './Navbars';
import Footer from './Footer';

const Contacts: React.FC = () => {
  return (
    <div className="contacts-wrapper">
      <h1>Contacts</h1>
      <div className="contact-item">
        <h2>Name1</h2>
        <p>Facebook: name1</p>
        <p>Instagram: @name1</p>
      </div>
      <div className="contact-item">
        <h2>Name2</h2>
        <p>Facebook: name2</p>
        <p>Instagram: @name2</p>
      </div>
      <div className="contact-item">
        <h2>Name3</h2>
        <p>Facebook: name3</p>
        <p>Instagram: @name3</p>
      </div>
    </div>
  );
};

function Contacts2() {

  const current_page = "/Contacts";

  return (
    <Box
      id="contacts"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 50%',
        backgroundRepeat: 'no-repeat',
        color: (theme) =>
                    theme.palette.mode === 'light' ? 'primary.main' : 'primary.light'
      })}
      className="pt-16"
    >
      <Navbars page={ current_page }/>
      <Container
          sx={{
          display: 'flex',
          flexDirection: 'column',
          pt: { xs: 4, sm: 8 },
          pb: { xs: 4, sm: 8 },
          }}
      >
        <div />
      </Container>
      <Footer />
    </Box>
  );
};

export default Contacts2;