import Button from '@mui/material/Button';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Navbars from './Navbars';
import Footer from './Footer';
import starburst from '../assets/star_burst.mp4';
import Box from '@mui/material/Box';
import emailjs from '@emailjs/browser';

export default function Contacts() {
  const current_page = "/Contacts";

  const handleSubmit = (event: any) => {
    event.preventDefault();
    emailjs.sendForm('service_ht1s9aa', 'template_4ilzyfo', event.target, 'Qo-tHjDpMDpRS2wAk');
  };

  const WhiteTextField = styled((props: TextFieldProps) => (
    <TextField
      {...props}
      InputProps={{
        ...props.InputProps,
        sx: {
          color: 'white',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            },
          },
        },
      }}
      InputLabelProps={{
        ...props.InputLabelProps,
        sx: {
          color: 'white',
          '&.Mui-focused': {
            color: 'white',
          },
        },
      }}
    />
  ))({
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  });

  return (
    <Box
      id="problem"
      sx={() => ({
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
      })}
      className="pt-16"
      >
        <video
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
      >
        <source src={starburst} type="video/mp4" />
      </video>
      <Navbars page={ current_page }/>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
            width: '100%',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding: 3,
              borderRadius: 2,
              width: '100%',
              maxWidth: 600,
            }}
          >
            <Typography component="h1" variant="h5" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
              Contact us via email
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <WhiteTextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <WhiteTextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <WhiteTextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <WhiteTextField
                    required
                    fullWidth
                    name="message"
                    label="Message"
                    type="message"
                    id="message"
                    multiline
                    rows={4}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      <Footer />
    </Box>
  );
}