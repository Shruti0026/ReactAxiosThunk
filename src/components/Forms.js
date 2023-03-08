import React, {useEffect}from "react";
import { Grid } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import { useSelector , useDispatch} from "react-redux";
import {useState} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import { PostApiAction } from "../redux/action/action";


const paperStyle = { padding: 20, height: '50vh', width: 300, margin: "20px auto" }
const stylePaper ={padding: 20, height: 'auto', width: 450, margin: "20px auto" }
const avatarStyle = { backgroundColor: '#1bbd7e' }
const btnstyle = { margin: '8px 0' }


function Forms() {
    const dispatch = useDispatch();
    const isResponse= useSelector(state=> state.reducer.isResponse)
    //const userList = useSelector((state)=> userSelector.selectAll(state))
console.log('form response', isResponse)
    const [username , setUsername] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const usernameHandle=(e)=>{
        setUsername(e.target.value);
    }
    const emailHandle=(e)=>{
        setEmail(e.target.value);
    }
    const passwordHandle=(e)=>{
        setPassword(e.target.value);
    }

    //const Navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const finalData={
            username: username,
            email:email,
            password:password
        }
        dispatch(PostApiAction(finalData));
    };
    
    if(isResponse){
        alert("your response has been submitted")
    }
   
    return ( 
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField id="standard-basic" label="Username" placeholder='Enter username' fullWidth required variant="standard" 
                 onChange={(e)=>usernameHandle(e)}/>
                <TextField id="standard-basic" label="Email" placeholder='Enter email id' fullWidth required variant="standard"
                 onChange={(e)=>emailHandle(e)}/>
                <TextField id="standard-basic" label="Password" placeholder='Enter password' type='password' fullWidth required variant="standard" 
                onChange={(e)=>passwordHandle(e)}/>
                    
                {/* <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                /> */}
                <Button type='submit' color='primary' variant="contained" style={btnstyle} 
                onClick={(e)=>{handleSubmit(e)}} fullWidth>Sign in</Button>
                
            </Paper>
                 
        </Grid>


    )
}

export default Forms;