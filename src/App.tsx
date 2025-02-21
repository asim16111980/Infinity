import "./App.css";
import Input from "./combonents/Input";

function App() {
  return (
    <>
      {/* <div className="ring-2 ring-blue-500"></div> */}
      <Input
        id="FirstName"
        label="First Name"
        type="text"
        parentStyle=""
        inputStyle=""
        stateStyles={{
          enabled: "",
          hovered: "ring-2 ring-blue-500 bg-blue-700",
          focused: "",
          populated: "",
          disabled: "",
        }}
      />
    </>
  );
}

export default App;
