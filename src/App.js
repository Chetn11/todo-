import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { Box, Container, Stack } from '@mui/material';

function App() {
  return (
    <Container
  component="section"
  sx={{
    display: 'flex',
    justifyContent: 'center',
    padding:"50px"
  }}
>
  <Stack spacing={2} alignSelf="auto">

    <AddTask />
    <TaskList />
  </Stack>
</Container>
  );
}

export default App;
