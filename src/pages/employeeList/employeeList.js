import React from "react";
import { Table } from "react-redux-table";

const EmployeeList = ({ employees }) => {
  console.log(employees);

  const headArray = [
    { title: "First Name", category: "firstName" },
    { title: "Last Name", category: "startDate" },
    { title: "Start Date", category: "lastName" },
    { title: "Department", category: "department" },
    { title: "Date of Birth", category: "birthDate" },
    { title: "Street", category: "street" },
    { title: "City", category: "city" },
    { title: "State", category: "state" },
    { title: "Zip Code", category: "zipCode" },
  ];

  const rowsArray = [];

  employees.forEach((employee) => {
    rowsArray.push([
      { cellValue: employee.firstName, category: "firstName" },
      { cellValue: employee.lastName, category: "lastName" },
      { cellValue: employee.startDate, category: "startDate" },
      { cellValue: employee.birthDate, category: "birthDate" },
      { cellValue: employee.department, category: "department" },
      { cellValue: employee.street, category: "street" },
      { cellValue: employee.city, category: "city" },
      { cellValue: employee.state, category: "state" },
      { cellValue: employee.zipCode, category: "zipCode" },
    ]);
  });

  console.log(rowsArray);

  return (
    <div>
      Liste Employés
      <Table
        headersArray={headArray}
        rowsContent={rowsArray}
        title="Employees list"
        filter={true}
        entriesSelector={[10, 100]}
        showEntries={true}
        hideButtons={true}
      />
    </div>
  );
};

export default EmployeeList;
