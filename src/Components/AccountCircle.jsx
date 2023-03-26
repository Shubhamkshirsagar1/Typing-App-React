import React, { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppBar, Modal, Tab, Tabs } from '@mui/material';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AccountCircle = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);
    const handleClose = ()=>{
        setOpen(false);
    }

    const handleValueChange = (e,v)=>{
        setValue(v);
    }
  return (
    <div>
        <AccountCircleIcon onClick={()=>setOpen(true)}/>
        
        <Modal
            open={open}
            onClose={handleClose}
            style={{
                display : 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(2px)'
            }}
        >
            <div className="box" style={{width: '400px'}}>
                <AppBar position='static' style={{background: 'transparent'}}>
                    <Tabs
                        value={value}
                        onChange={handleValueChange}
                        variant='fullWidth'>
                        <Tab label='login' style={{color: 'white'}}/>
                        <Tab label='signup' style={{color: 'white'}}/>
                    </Tabs>
                </AppBar>
                {value === 0 && <LoginForm/>}
                {value === 1 && <SignupForm/>}
            </div>
        </Modal>

    </div>
  )
}

export default AccountCircle;
