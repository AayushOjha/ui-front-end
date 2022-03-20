import "./App.css";
import NavBar from "./components/NavBar";
import Box from "@mui/material/Box";
import Boxes from "./components/Boxes";
import db from "./utils/firebase";

function App() {
  const addToDB = () => {
    const x = db.database().ref("btnPart");
    const data = {
      html: "<a>link</a>",
      css: "sdfdf",
      js: "logitout",
    };
    x.push(data);
  };

  return (
    <div className="App">
      <NavBar />
      <Box sx={{ height: "110vh", width: "90%", margin: "0 auto" }}>
        <Boxes />
        <button style={{ margin: "20px", padding: "10px" }}>
          <h1>Fire Action</h1>
        </button>
      </Box>
    </div>
  );
}

export default App;
