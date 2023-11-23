import React, { useState } from 'react';
import { Box, Tab, Tabs, Paper } from '@mui/material';
import ButtonAppBar from '../ButtonAppBar';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import { tabStyle, paperStyle } from '../../constants/styles';


const Auth = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex)
    }

    return (
        <div>
            <ButtonAppBar/>
            <Paper elevation={3} style={paperStyle}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Tabs 
                        value={tabIndex}
                        onChange={handleTabChange}
                        sx = {{
                            '& .MuiTabs-indicator': { backgroundColor: '#F875AA'},
                        }}>
                        <Tab label="Sign In" style={tabStyle}/>
                        <Tab label="Sign Up" style={tabStyle}/>
                    </Tabs>
                    
                    { tabIndex === 0 && <SignInForm/> }
                    { tabIndex === 1 && <SignUpForm/> }
                </Box>
            </Paper>
        </div>
    )
}

export default Auth
