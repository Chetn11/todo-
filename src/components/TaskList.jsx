import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import supabase from "../supabase";
import DeleteTask from "./DeleteTask";
import LoopIcon from '@mui/icons-material/Loop';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import CloseIcon from '@mui/icons-material/Close';
import { Edit } from "@mui/icons-material";
import image from "../image/todo blank.svg"

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [update, setUpdate] = useState(false);
  const [uid, setUid] = useState(null);
  const [loadingup, setLoadingUp] = useState(false);

  console.log(text);
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!text) {
      alert("empty box");
      return;
    }
    const { data, error } = await supabase
      .from("todos")
      .update({ text: text })
      .eq("id", uid);
    setUid(null);
    window.location.reload(false);
  };

  const fetchData = async () => {
    let { data: tasks, error } = await supabase.from("todos").select("*");
    setTasks(tasks);
    console.log(tasks);
  };

  useEffect(() => {
    fetchData();
  }, []);


  if(!tasks || !tasks.length){
    return(
      <Box textAlign="center" mt="30px" maxWidth="95%" margin="auto">
  <img src={image} alt="blank" />
  <Typography variant="h5" fontFamily='raleway'>Create Your Todo !</Typography>
</Box>

    )
  }
  return (
    <>
      <Container 
        component="section"
  sx={{
    display: 'flex',
    flexDirection:"column",
    justifyContent: 'center',
  }}>
     {update ?<Paper
        component="form"
        sx={{
          p: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          marginBottom: "40px",
          width: 400,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Update Todo"
          value={text}
              onChange={(e) => setText(e.target.value)}
              disabled={loadingup}
          
        />

        <IconButton
          type="button"
          sx={{ p: "5px", bgcolor: "#4190f7", color: "white",m:"2px" }}
          aria-label="Update"
          onClick={handleUpdate}
              disabled={loadingup}
        >
          {loadingup ? <LoopIcon/> :  <UpgradeIcon />}
          
        </IconButton>
        <IconButton
          type="button"
          sx={{ p: "5px", bgcolor: "red", color: "white" }}
          aria-label="close"
          onClick={(e)=>setUpdate(!update)}
             
        >
         <CloseIcon/>
          
        </IconButton>
        
      </Paper>:null}
      
        <Grid
          container
          direction="column"
          spacing={1}
          sx={{
            // border: "1px solid",
            borderRadius: "lg",
            padding: "5",
            marginTop:"30px",
            
          }}
        >
          <Container
            component="section"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              alignItems="center"
              
            >
              {tasks.map((task) => (
                <Card
                  item
                  key={task.id}
                  variant="outlined"
                  style={{ margin: "5px", width:"400px",backgroundColor:"#a9e5e5", p:"10px" }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{
                      borderRadius: "lg",
                      padding: "8px",
                      "&:hover": { backgroundColor: "grey.200" },
                    }}
                  >
                    <Typography variant="h6" sx={{ flexGrow: 1 , fontFamily:'raleway', fontWeight:"400"}}>
                      {task.text}
                    </Typography>
                    <IconButton
                      color="inherit"
                      onClick={() => {
                        setUpdate(true);
                        setUid(task.id);
                      }}
                    >
                      <Edit />
                    </IconButton>
                    <DeleteTask id={task.id} />
                  </Grid>
                  <Divider />
                </Card>
              ))}
            </Grid>
            <Divider />
          </Container>
        </Grid>
      </Container>
    </>
  );
}

export default TaskList;
