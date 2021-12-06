import { Routes, Route } from "react-router-dom";
import CreateEmployee from "./pages/createEmployee/createEmployee";
import EmployeeList from "./pages/employeeList/employeeList";
import "./App.css";
import { useState } from "react";

function App() {
  const [employees, setEmployees] = useState([
    {
      firstName: "Elora",
      lasteName: "Delpierre",
      birthDate: "01/01/2001",
      startDate: "02/02/2021",
      street: "lourmel",
      city: "Paris",
      state: "France",
      zipCode: "75015",
      department: "75",
    },
    {
      firstName: "Nicolas",
      lasteName: "Tesla",
      birthDate: "01/01/1829",
      startDate: "01/01/1800",
      street: "blabla",
      city: "blabla",
      state: "blabla",
      zipCode: "00001",
      department: "00",
    },
    {
      firstName: "Leonard",
      lasteName: "DaVinci",
      birthDate: "01/01/1812",
      startDate: "01/01/1800",
      street: "blabla",
      city: "blabla",
      state: "blabla",
      zipCode: "blabla",
      department: "blabla",
    },
  ]);

  console.log(employees);

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, { newEmployee }]);
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
