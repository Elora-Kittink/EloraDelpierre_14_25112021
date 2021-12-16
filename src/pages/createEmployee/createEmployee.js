import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// import Modal from "../../components/Modal/Modal";
import Modal from "eloradelpierre_p14-modal/dist/Modal";
import DatePicker from "react-date-picker";
import Dropdown from "react-dropdown";
import { states, departments } from "../../components/data/data";
// import Select from "react-select";

const CreateEmployee = ({ addEmployee }) => {
  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  const handleAddEmployee = (e) => {
    e.preventDefault();
    console.log(newEmployee);
    addEmployee(newEmployee);
    setIsOpen(true);
  };

  const [isOpen, setIsOpen] = useState(true);

  const handleModalOpening = () => {
    setIsOpen(!isOpen);
  };

  console.log(newEmployee);
  return (
    <div className="createEmployee">
      <h1>HRnet</h1>
      <Link to="/list"></Link>

      <form id="" onSubmit={handleAddEmployee}>
        <h2>Create employee</h2>
        <div className="input">
          <label className="input-label" htmlFor="first-name">
            First Name
          </label>
          <input
            required
            onChange={(e) => setNewEmployee({ ...newEmployee, firstName: e.target.value })}
            className="input-field"
            type="text"
            name="firstName"
            id="first-name"
          />
        </div>

        <div className="input">
          <label className="input-label" htmlFor="last-name">
            Last Name
          </label>
          <input
            onChange={(e) => setNewEmployee({ ...newEmployee, lastName: e.target.value })}
            className="input-field"
            required
            type="text"
            name="lastName"
            id="last-name"
          />
        </div>

        <div className="input">
          <label htmlFor="birth-date" className="input-label" type="text">
            Date of Birth
          </label>
          <DatePicker
            value={newEmployee.birthDate}
            format="dd-MM-y"
            onChange={(value) => setNewEmployee({ ...newEmployee, birthDate: value })}
          />
        </div>

        <div className="input">
          <label htmlFor="start-date" className="input-label" type="text">
            Start Date
          </label>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            value={newEmployee.startDate}
            format="dd-MM-y"
            onChange={(value) => setNewEmployee({ ...newEmployee, startDate: value })}
          />
        </div>

        <div className="input">
          <label className="input-label" htmlFor="street">
            Street
          </label>
          <input
            onChange={(e) => setNewEmployee({ ...newEmployee, street: e.target.value })}
            className="input-field"
            required
            type="text"
            name="street"
            id="street"
          />
        </div>

        <div className="input">
          <label className="input-label" htmlFor="city">
            City
          </label>
          <input
            onChange={(e) => setNewEmployee({ ...newEmployee, city: e.target.value })}
            className="input-field"
            required
            type="text"
            name="city"
            id="city"
          />
        </div>

        <div className="input">
          <label className="input-label" type="text" htmlFor="state">
            State
          </label>
          <Dropdown
            options={states}
            placeholder={states[0].name}
            onChange={(e) => setNewEmployee({ ...newEmployee, state: e.value })}
          />
        </div>

        <div className="input">
          <label className="input-label" htmlFor="zip-code">
            Zip Code
          </label>
          <input
            onChange={(e) => setNewEmployee({ ...newEmployee, zipCode: e.target.value })}
            className="input-field"
            required
            type="number"
            name="zipCode"
            id="zip-code"
          />
        </div>

        <div className="input">
          <label required className="input-label" htmlFor="department">
            Department
          </label>
          <Dropdown
            options={departments}
            placeholder={departments[0].name}
            onChange={(e) => setNewEmployee({ ...newEmployee, department: e.value })}
          />
        </div>

        <button type="submit" className="btn">
          Save
        </button>
        <Modal isOpen={isOpen} handleModalOpening={handleModalOpening} />
      </form>
    </div>
  );
};

export default CreateEmployee;
