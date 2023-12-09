import { LoginCheck } from "./components/loginCheck";

function App() {

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "500px"
    }}>
      <LoginCheck/>
    </div>
  );
}

export default App;
