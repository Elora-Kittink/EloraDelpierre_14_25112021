import { Routes, Route } from "react-router-dom";
import CreateEmployee from "./pages/createEmployee/createEmployee";
import EmployeeList from "./pages/employeeList/employeeList";
import "./App.css";
import { useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<CreateEmployee addEmployee={addEmployee} />} />
          <Route path="list" element={<EmployeeList employees={employees} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
