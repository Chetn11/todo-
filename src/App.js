import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { Box, Container, Stack } from '@mui/material';
import NavBar from './components/NavBar';


function App() {
  return (
    <div>
    <NavBar/>
    <Container
  component="section"
  sx={{
    display: 'flex',
    justifyContent: 'center',
   
  }}
>
  <Stack spacing={2} alignSelf="auto">

    <AddTask />
    <TaskList />
  </Stack>
</Container>

</div>
  );
}

export default App;
