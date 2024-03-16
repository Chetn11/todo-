import React, { useState } from 'react';
import { IconButton} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import supabase from '../supabase';

export default function DeleteTask({ id }) {
  const [loading, setLoading] = useState(false);


  async function handleDelete() {
    setLoading(true);
    const { data, error } = await supabase.from('todos').delete().eq('id', id);
    setLoading(false);
    window.location.reload(false);

    
  }

  return (
    <IconButton
      color="inherit"
      onClick={handleDelete}
      disabled={loading}
    >
    
      <DeleteIcon />
    </IconButton>
  );
}
