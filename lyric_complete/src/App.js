import logo from "./logo.svg";
import "./App.css";
import { Button, Stack, Box, TextField, Paper } from "@mui/material";
import { useState, useRef } from "react";
import { Link } from "react-router-dom"; 

function App() {
  const [lyric, setLyric] = useState("");
  const [lyricsList, setLyricsList] = useState([]);
  const [colorsList, setColorList] = useState([]);
  const [color, setColor] = useState("#ae92eb");
  const lyricsContainerRef = useRef(null);

  const displayLyric = () => {
    return (
      <Paper
        elevation={0}
        style={{
          width: "642px", 
          backgroundColor: color, 
          textAlign: "left", 
          padding: "10px",
          marginTop: "5px",
          height: '25px'
        }}
      >
        {lyric}
      </Paper>
    );
  };
  
  const getLyric = (e) => {
    setLyric(e.target.value);
    displayLyric();
    scrollToBottom();
  };

  const displayLyrics = () => {
    return lyricsList.map((lyric, index) => (
      <Paper
        key={index}
        elevation={0}
        style={{
          width: "642px",
          backgroundColor: colorsList[index],
          textAlign: "left",
          padding: "10px",
          marginTop: "5px",
          height: "25px",
        }}
      >
        {lyric}
      </Paper>
    ));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      saveLyric();
      e.preventDefault(); 
      setLyric("")
    }
  };

  const saveLyric = () => {
    if (lyric.trim() !== "") {
      setLyricsList([...lyricsList, lyric]);
      setColorList([...colorsList, color]);
      setLyric("");
      scrollToBottom();
    }
  };

  const scrollToBottom = () => {
    if (lyricsContainerRef.current) {
      lyricsContainerRef.current.scrollTop = lyricsContainerRef.current.scrollHeight;
    }
  };

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
            saveLyric()
            setColor("#ae92eb")
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
            saveLyric()
            setColor("#9fd36b")
          }}
        >
          {" "}
          Second Singer{" "}
        </Button>
        </Link>
        <Link to="/singer/third">
        <Button
          variant="contained"
          sx={{ bgcolor: "#48cdae", "&:hover": { bgcolor: "#48cdae" } }}
          onClick={() => {
            saveLyric()
            setColor("#48cdae")
          }}
        >
          {" "}
          Third Singer{" "}
        </Button>
        </Link>
        <Link to="/singer/fourth">
        <Button
          variant="contained"
          sx={{ bgcolor: "#ed87c1", "&:hover": { bgcolor: "#ed87c1" } }}
          onClick={() => {
            saveLyric()
            setColor("#ed87c1")
          }}
        >
          {" "}
          Fourth Singer{" "}
        </Button>
        </Link>
      </Stack>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "642px" },
          display: "flex",
          justifyContent: "center",
          margin: "10px auto",
        }}
      >
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          onChange={getLyric}
          onKeyPress={handleKeyPress}
          value = {lyric}
        />
      </Box>
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
        ref={lyricsContainerRef}
      >
        <Stack
        direction="column"
        spacing={0}
        >
          {displayLyrics()}
          {lyric !== "" && displayLyric()}
        </Stack>
      </Box>
    </>
  );
}

export default App;
