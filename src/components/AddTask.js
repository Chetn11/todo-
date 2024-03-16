import React, { useState } from "react";
import { TextField, Button, Stack, Container } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import supabase from "../supabase";
import TaskList from "./TaskList";

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
    if(!error){
      setLoading(false);
      alert("data added")
      window.location.reload(false);
    }
    else{
      console.log(error)
    }
    
  };

  return (
    <Container component="section"
    sx={{
      margin:"auto"
    }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <TextField
          variant="outlined"
          placeholder="Do the laundry"
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={loading}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
          sx={{ minWidth: "auto" }}
        >
          {loading ? "Adding..." : "Add"}
        </Button>
      </Stack>



    </Container>
  );
};

export default AddTask;
