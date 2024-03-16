import React, { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import supabase from "../supabase";

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
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2} alignItems="center">
        <TextField
          variant="filled"
          placeholder="Do the laundry"
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={loading}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={loading}
          sx={{ minWidth: "auto" }}
        >
          {loading ? "Adding..." : "Add"}
        </Button>
       
      </Stack>
    </form>
  );
};

export default AddTask;
