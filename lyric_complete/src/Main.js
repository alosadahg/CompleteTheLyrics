import "./App.css";
import { Button, Stack, Box, TextField, Paper } from "@mui/material";
import { useState } from "react";
import App from './App';
import { Link } from "react-router-dom"; 

function Main() {
  const [color, setColor] = useState("#ae92eb");
  return (
    <>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        Complete the Lyrics
      </h2>
      <Stack
        style={{ display: "flex", justifyContent: "center" }}
        direction="row"
        spacing={0}
      >
        <Link to="/singer/first">
        <Button
          variant="contained"
          sx={{ bgcolor: "#ae92eb", "&:hover": { bgcolor: "#ae92eb" } }}
          onClick={() => {
            setColor("#ae92eb");
          }}
        >
          {" "}
          First Singer
        </Button>
        </Link>
        <Link to="/singer/second">
        <Button
          variant="contained"
          sx={{ bgcolor: "#9fd36b", "&:hover": { bgcolor: "#9fd36b" } }}
          onClick={() => {
            setColor("#9fd36b");
          }}
        >
          {" "}
          Second Singer{" "}
        </Button>
        </Link>
        <Link to="/singer/third"><Button
          variant="contained"
          sx={{ bgcolor: "#48cdae", "&:hover": { bgcolor: "#48cdae" } }}
          onClick={() => {
            setColor("#48cdae");
          }}
        >
          {" "}
          Third Singer{" "}
        </Button></Link>
        <Link to="/singer/fourth">
        <Button
          variant="contained"
          sx={{ bgcolor: "#ed87c1", "&:hover": { bgcolor: "#ed87c1" } }}
          onClick={() => {
            setColor("#ed87c1");
          }}
        >
          {" "}
          Fourth Singer{" "}
        </Button>
        </Link>
      </Stack>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          width: "682px",
          height: "420px",
          border: "1px solid #c4c4c4",
          borderRadius: 4,
          margin: "10px auto",
          padding: "10px",
          overflowY: "auto",
        }}
      ></Box>
    </>
  );
}

export default Main;
