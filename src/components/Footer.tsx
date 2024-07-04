import React from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import DiscordIcon from '../assets/DiscordIcon';

export default function Footer() {
    const [value, setValue] = React.useState('');

    const handleMouseEnter = (newValue: string) => {
        setValue(newValue);
    };

    const handleMouseLeave = () => {
        setValue('');
    };

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);

        switch (newValue) {
            case 'instagram':
                window.open('https://www.instagram.com/sos_camp13', '_blank');
                break;
            case 'discord':
                window.open('https://discord.gg/ecZyTjqBqy', '_blank');
                break;
            case 'github':
                window.open('https://github.com/PanidaRumriankit/SOS13', '_blank');
                break;
            default:
                break;
        }
    };
  
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '10vh', 
                backgroundColor: 'white'
            }}
        >
            <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
                <BottomNavigationAction
                label="sos_camp13"
                value="instagram"
                icon={<InstagramIcon />}
                onMouseEnter={() => handleMouseEnter('instagram')}
                onMouseLeave={handleMouseLeave}
                />
                <BottomNavigationAction
                label="บ้านน้อนske22"
                value="discord"
                icon={<DiscordIcon />}
                onMouseEnter={() => handleMouseEnter('discord')}
                onMouseLeave={handleMouseLeave}
                />
                <BottomNavigationAction
                label="SOS13"
                value="github"
                icon={<GitHubIcon />}
                onMouseEnter={() => handleMouseEnter('github')}
                onMouseLeave={handleMouseLeave}
                />
            </BottomNavigation>
        </Box>
    );
  }