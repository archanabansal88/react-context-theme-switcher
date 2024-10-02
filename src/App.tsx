import "./App.css";
import ThemeSwitcher from "./components/theme-switcher";
import { ThemeProvider } from "./context/theme-context";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    </div>
  );
}

export default App;
