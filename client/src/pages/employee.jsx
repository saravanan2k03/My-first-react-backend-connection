import axios from "axios";
import "./employee.css";
import React, { useState } from "react";
function Emp() {
  const [name, setName] = useState("");
  const [Age, setAge] = useState("0");
  const [Country, setCountry] = useState("");
  const [Position, setPosition] = useState("");
  const [salary, setsalary] = useState("0");
  const [EmployeeList, setEmployeeList] = useState([]);
  const addEmployee = () => {
    axios
      .post("http://localhost:5000/create", {
        name: name,
        age: Age,
        country: Country,
        position: Position,
        salary: salary,
      })
      .then(() => console.log("success"));
  };

  const getEmployee = () => {
    axios.get("http://localhost:5000/show").then((response) => {
      setEmployeeList(response.data);
    });
  };

  return (
    <>
      <div className="shodow">
        <div className="App">
          <form onSubmit={addEmployee}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <label>Age</label>
            <input
              type="text"
              name="Age"
              onChange={(e) => setAge(e.target.value)}
            />
            <label>Country</label>
            <input
              type="text"
              name="Country"
              onChange={(e) => setCountry(e.target.value)}
            />

            <label>Position</label>
            <input
              type="text"
              name="Position"
              onChange={(e) => setPosition(e.target.value)}
            />

            <label>salary</label>
            <input
              type="text"
              name="salary"
              onChange={(e) => setsalary(e.target.value)}
            />
            <br />
            <button type="submit">Add Employee</button>
          </form>
        </div>
        <div className="employees">
          <button onClick={getEmployee}>Show</button>
          {EmployeeList.map((emp) => {
            return (
              <div>
                <p>{emp.name}</p>
                <p>{emp.salary}</p>
                <p>{emp.country}</p>
                <p>{emp.position}</p>
                <p>{emp.age}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Emp;
