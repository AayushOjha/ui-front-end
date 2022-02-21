import './App.css';
import NavBar from './components/NavBar';
import Box from '@mui/material/Box';
import Boxes from './components/Boxes';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Box sx={{ height: '110vh', width:'90%', margin:'0 auto' }} >
        <Boxes/>
      </Box>
    </div>
  );
}

export default App;
