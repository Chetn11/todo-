import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import supabase from "../supabase";
import DeleteTask from "./DeleteTask";

import { Edit } from "@mui/icons-material";

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

  return (
    <>
      <Container 
        component="section"
  sx={{
    display: 'flex',
    flexDirection:"column",
    justifyContent: 'center',
  }}>
        {update ? (
          <Stack direction="row" spacing={2} alignItems="center">
            <TextField
              variant="outlined"
              placeholder="Do the laundry"
              value={text}
              onChange={(e) => setText(e.target.value)}
              disabled={loadingup}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleUpdate}
              disabled={loadingup}
              sx={{ minWidth: "auto" }}
            >
              {loadingup ? "updating" : "Update"}
            </Button>
          </Stack>
        ) : null}
        <Grid
          container
          direction="column"
          spacing={1}
          sx={{
            // border: "1px solid",
            borderRadius: "lg",
            padding: "5",
            marginTop:"50px",
            marginLeft:"-30px"
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
                  style={{ margin: "5px", width:"300px" }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    sx={{
                      borderRadius: "lg",
                      padding: "8px",
                      "&:hover": { backgroundColor: "grey.200" },
                    }}
                  >
                    <Typography variant="body1" sx={{ flexGrow: 1 }}>
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
