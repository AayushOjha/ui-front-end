import './App.css';
import NavBar from './components/NavBar';
import Box from '@mui/material/Box';
import Boxes from './components/Boxes';
import db from './utils/firebase';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const [components, setcomponents] = useState([]);
  const dbRef = collection(db, 'Buttons');

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(dbRef);
      setcomponents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getData();
  }, []);

  const addToDB = () => {
    const x = db.database().ref('btnPart');
    const data = {
      html: '<a>link</a>',
      css: 'sdfdf',
      js: 'logitout',
    };
    x.push(data);
  };

  if (components != []) {
    return (
      <div className="App">
        <NavBar />
        <Box sx={{ height: '110vh', width: '90%', margin: '0 auto' }}>
          <div>
            <Boxes data={components} />
          </div>
        </Box>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

export default App;
