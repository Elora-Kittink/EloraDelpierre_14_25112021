import React from "react";
import { Table } from "react-redux-table";
import "./employeeList.css";

const EmployeeList = ({ employees }) => {
  const headArray = [
    { title: "First Name", category: "firstName" },
    { title: "Last Name", category: "lastName" },
    { title: "Start Date", category: "startDate" },
    { title: "Department", category: "department" },
    { title: "Date of Birth", category: "birthDate" },
    { title: "Street", category: "street" },
    { title: "City", category: "city" },
    { title: "State", category: "state" },
    { title: "Zip Code", category: "zipCode" },
  ];

  const rowsArray = [];

  employees.forEach((employee) => {
    const formatedBirthDate = employee.birthDate.toLocaleDateString("en-US");
    const formatStartDate = employee.startDate.toLocaleDateString("en-US");

    rowsArray.push([
      { cellValue: employee.firstName, category: "firstName" },
      { cellValue: employee.lastName, category: "lastName" },
      { cellValue: formatStartDate, category: "startDate" },
      { cellValue: formatedBirthDate, category: "birthDate" },
      { cellValue: employee.department, category: "department" },
      { cellValue: employee.street, category: "street" },
      { cellValue: employee.city, category: "city" },
      { cellValue: employee.state, category: "state" },
      { cellValue: employee.zipCode, category: "zipCode" },
    ]);
  });

  return (
    <div>
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
