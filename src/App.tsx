import "./App.css";
import Input from "./combonents/Input";

function App() {
  return (
    <>
      <Input
        id="FirstName"
        label="First Name"
        type="text"
        parentStyle=""
        inputStyle="p-2"
        stateStyles={{
          enabled: "border-gray-300 bg-white text-gray-700",
          hovered: "border-pink-400",
          focused:
            "border-rose-500 ring-2 ring-rose-300 shadow-lg shadow-rose-200",
          populated:
            "border-green-500 bg-green-50 text-green-700 ring-2 ring-green-300",
          disabled:
            "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed",
          error: "border-red-500 bg-red-50 text-red-700 ring-2 ring-red-300",
        }}
        labelStyles={{  enabled: " text-gray-700",
        hovered: "text-pink-400",
        focused:
          "text-rose-500",
        populated:
          "text-green-500",
        disabled:
          "text-gray-200 cursor-not-allowed",
        error: "text-red-500",}}
      />
    </>
  );
}

export default App;
