import "./App.css";
import Bottols from "./component/bottolsCompo/bottols/Bottols";
import Countries from "./component/countries/Countries";

// const students = [
//   { name: "John", age: 20, grade: "A", subject: "Math" },
//   { name: "Jane", age: 22, grade: "B", subject: "Science" },
//   { name: "Alex", age: 21, grade: "A", subject: "English" },
//   { name: "Emily", age: 23, grade: "C", subject: "History" },
//   { name: "Michael", age: 19, grade: "B", subject: "Art" },
// ];
function App() {
  return (
    <>
      <Countries/>
      <Bottols/>
    </>
  );
}

export default App;
