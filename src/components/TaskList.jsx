import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import supabase from "../supabase";
import DeleteTask from "./DeleteTask";
// import { useRealtime } from "react-supabase";

function TaskList() {
    
    // const [{ data, error, fetching }, reexecute] = useRealtime('todos')
    const[tasks,setTasks]=useState([]);

  const fetchData = async () => {
    let { data: tasks, error } = await supabase.from("todos").select("*");
    setTasks(tasks);
    console.log(tasks);
  };

  useEffect(()=>{
    fetchData();
  },[])


  return (
    <Grid
      container
      direction="column"
      spacing={1}
      sx={{
        border: "1px solid",
        borderColor: "gray.100",
        borderRadius: "lg",
        padding: "5",
        margin: "10",
        maxWidth: { xs: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" },
        alignItems: "stretch",
      }}
    >
      <Grid item>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            borderRadius: "lg",
            padding: "8px",
            "&:hover": { backgroundColor: "grey.200" },
          }}
        >
           {tasks.map((task) => (
        <Grid item key={task.id}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ borderRadius: 'lg', padding: '8px', '&:hover': { backgroundColor: 'grey.200' } }}
          >
            <Typography variant="body1" sx={{ flexGrow: 1 }}>
              {task.text}
            </Typography>
            <DeleteTask id={task.id}/>
          </Grid>
          <Divider />
        </Grid>
      ))}
          {/* <DeleteTask id={task.id} /> */}
          
        </Grid>
        <Divider />
      </Grid>
    </Grid>
  );
}

export default TaskList;
