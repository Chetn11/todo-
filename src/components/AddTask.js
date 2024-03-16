import React, { useState } from "react";
import {
  Container,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";

import supabase from "../supabase";
import LoopIcon from '@mui/icons-material/Loop';
import AddIcon from "@mui/icons-material/Add";


const AddTask = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text) {
      alert("empty box");
      return;
    }
    setLoading(true);
    const { data, error } = await supabase.from("todos").insert([{ text }]);
    if (!error) {
      setLoading(false);
      alert("data added");
      window.location.reload(false);
    } else {
      console.log(error);
    }
  };

  return (
    <Container
      component="section"
      sx={{
        margin: "auto",
      }}
    >
      <Paper
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
          placeholder="Add Todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={loading}
        />

        <IconButton
          type="button"
          sx={{ p: "10px", bgcolor: "#4190f7", color: "white" }}
          aria-label="search"
          onClick={handleSubmit}
        >
          {loading ? <LoopIcon/> :  <AddIcon />}
        </IconButton>
      </Paper>
    </Container>
  );
};

export default AddTask;
