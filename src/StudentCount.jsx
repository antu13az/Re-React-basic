import { useState } from "react";
 
const StudentCount = () => {
  const [count, setCount] = useState(0);
  const Add = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div className="studentCount">
      <h1>Student Count:{count}</h1>
      <button onClick={Add}>Add</button>
    </div>
  );
};

export default StudentCount;
