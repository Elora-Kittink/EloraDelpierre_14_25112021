import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "eloradelpierre_p14-modal/dist/Modal";
import DatePicker from "react-date-picker";
import Dropdown from "react-dropdown";
import { states, departments } from "../../components/data/data";
import "./createEmployee.css";

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

  console.log(newEmployee);

  // validate form and then add the employee and open modal

  const handleAddEmployee = (e) => {
    e.preventDefault();

    if (document.getElementById("first-name").validity.patternMismatch) {
      return alert("Champs incorrect");
    }
    if (document.getElementById("last-name").validity.patternMismatch) {
      return alert("Champs incorrect");
    }
    if (document.getElementById("street").validity.patternMismatch) {
      return alert("Champs incorrect");
    }
    if (document.getElementById("city").validity.patternMismatch) {
      return alert("Champs incorrect");
    } else {
      addEmployee(newEmployee);
      setIsOpen(true);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const modalContent = <p>Employé créé !</p>;

  return (
    <div className="createEmployee">
      <h1>HRnet</h1>
      <Link to="/list"></Link>

      <form className="form" onSubmit={handleAddEmployee}>
        <h2>Create employee</h2>
        <div className="input">
          <label className="input-label" htmlFor="first-name">
            First Name
          </label>
          <input
            required
            min={2}
            onChange={(e) => setNewEmployee({ ...newEmployee, firstName: e.target.value })}
            className="input-field"
            type="text"
            name="firstName"
            id="first-name"
            max={32}
            pattern="[A-Za-z]{2,32}"
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
            max={32}
            pattern="[A-Za-z]{2,32}"
            min={2}
          />
        </div>

        <div className="input">
          <label htmlFor="birth-date" className="input-label" type="text">
            Date of Birth
          </label>
          <DatePicker
            required
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
            required
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
            max={32}
            pattern="[A-Za-z]{2,32}"
            min={2}
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
            max={32}
            pattern="[A-Za-z]{2,32}"
            min={2}
          />
        </div>

        <div className="input">
          <label className="input-label" type="text" htmlFor="state">
            State
          </label>
          <Dropdown
            required
            menuClassName="menuClassName"
            controlClassName="controlClassName"
            placeholderClassName="placeholderClassName"
            arrowClassName="arrowClassName"
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
            required
            size={5}
            menuClassName="menuClassName"
            controlClassName="controlClassName"
            placeholderClassName="placeholderClassName"
            arrowClassName="arrowClassName"
            options={departments}
            placeholder={departments[0].name}
            onChange={(e) => setNewEmployee({ ...newEmployee, department: e.value })}
          />
        </div>

        <button type="submit" className="saveBtn">
          Save
        </button>
        <Modal isOpen={isOpen} closeModal={closeModal} content={modalContent} />
      </form>
    </div>
  );
};

export default CreateEmployee;
