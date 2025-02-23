import "./App.css";
import Button from "./combonents/Button";
import Input from "./combonents/Input";

function App() {
  return (
    <>
      <Input
        id="FirstName"
        label="First Name"
        type="text"
        stateStyles={{
          enabled: {
            parent: "border-gray-300 bg-white text-gray-700",
            input: "",
            label: "text-gray-700",
          },
          hovered: {
            parent: "border-pink-400",
            input: "",
            label: "text-pink-400",
          },
          focused: {
            parent:
              "border-rose-500 ring-2 ring-rose-300 shadow-lg shadow-rose-200",
            input: "",
            label: "text-rose-500",
          },
          disabled: {
            parent:
              "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed",
            input: "",
            label: "text-gray-200 cursor-not-allowed",
          },
          success: {
            parent:
              "border-green-500 bg-green-50 text-green-700 ring-2 ring-green-300",
            input: "",
            label: "text-green-500",
          },
          error: {
            parent: "border-red-500 bg-red-50 text-red-700 ring-2 ring-red-300",
            input: "",
            label: "text-red-500",
          },
        }}
      />
      <Button
        type="button"
        value="Click me"
        icon=""
        stateStyles={{
          enabled: "bg-pink-500 text-white",
          hovered: "bg-pink-600",
          focused: "ring-2 ring-pink-400 outline-none",
          pressed: "bg-pink-700",
          disabled: "bg-gray-300 disabled:cursor-not-allowed",
        }}
      />
    </>
  );
}

export default App;
