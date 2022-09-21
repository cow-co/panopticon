import { Component } from "react";
import "./App.css";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/layout/Header";
import VisualisationPanel from "./components/layout/VisualisationPanel";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Header />
          <Container maxWidth="sm">
            <h1>PANOPTICON</h1>
            <VisualisationPanel />
          </Container>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
