import React,{useEffect} from "react";
import {GetApiAction, DeleteApiAction} from "../redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles'
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { tableCellClasses } from "@mui/material/TableCell";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpdateIcon from '@mui/icons-material/Update';
// import {Routes, Route, useNavigate} from 'react-router-dom';
import { purple } from "@mui/material/colors";
import {Link} from 'react-router-dom'


const paperStyle = { float:'center',padding: "20px 20px 20px 20px", height: 'auto', width: 800, backgroundColor: purple[50], margin: "20px auto"}
const avatarStyle = { backgroundColor: '#1bbd7e' }
const btnstyle = { float: 'left', width: 200 , margin: "40px 15px 50px 40px"}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function Home() {
    const dispatch = useDispatch();
    const responseData= useSelector(state=> state.reducer.UsersData) 
    const isDeleteResponse= useSelector(state=> state.reducer.isDeleteResponse) 

    console.log("response data from action" , responseData)
    useEffect(()=>{
        dispatch(GetApiAction());
    },[dispatch]);


    if(isDeleteResponse){
        alert("your data is deleted")
        window.location.reload(false)
    }

    const result =()=> responseData? responseData.map((data,index)=>{
        return (
            <StyledTableRow key={index}>
                <StyledTableCell align = "center" > { data.id }</StyledTableCell> 
                <StyledTableCell align = "center" > { data.username  } </StyledTableCell> 
                <StyledTableCell align = "center" > { data.email  } </StyledTableCell> 
                <StyledTableCell align = "center" > { data.password } </StyledTableCell>  
                <StyledTableCell onClick={()=>dispatch(DeleteApiAction(data.id))}> 
                        <Avatar style = { avatarStyle } >
                        <DeleteForeverIcon/>
                        </Avatar> 
                </StyledTableCell > 
                <StyledTableCell > 
                        < Avatar style = { avatarStyle }>
                        <Link to={`/edit/${data.id}`} >
                            <UpdateIcon  />
                        </Link>
                        </Avatar> 
                </StyledTableCell> 
            </StyledTableRow>
        )
    }):null
    return (
    <Grid className="table">
            <Paper style={paperStyle}>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth >Add User</Button>
                    <Grid item xs width = { 750 } marginLeft = { 5 } >
                    <TableContainer component = { Paper } style = {{ margin: 'auto', marginTop: 50 , }} >
                        <Table sx = {{ minWidth: 500 }} aria-label = "customized table" >
                            <TableHead >
                                <TableRow>
                                    <StyledTableCell > S.No </StyledTableCell> 
                                    <StyledTableCell align = "center" > Username </StyledTableCell> 
                                    <StyledTableCell align = "center" > Email </StyledTableCell> 
                                    <StyledTableCell align = "center" > Password </StyledTableCell>
                                    <StyledTableCell align = "center" > Delete </StyledTableCell> 
                                    <StyledTableCell align = "center" > Update </StyledTableCell> 
                                </TableRow > 
                            </TableHead>
                        <TableBody> { result() } </TableBody> 
                        </Table > 
                    </TableContainer> 
                    </Grid >
            </Paper>
        </Grid>
   
    )
}


export default Home;
