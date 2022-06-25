import "./styles.css";
import Employee from "./Employee";
import employeeInfo from "./EmployeeInfo";

export default function App() {
  return (
    <div className="App">
      <h1>Company Directory</h1>
      {employeeInfo.map((employee) => {
        const { firstName, lastName, age } = employee;
        return <Employee firstName={firstName} lastName={lastName} age={age} />;
        // spread operator: return <Employee key={employee.employeeID} {...employee} />
      })}

      {/* w/out mapping: <Employee firstName='Jerald' lastName='A' age='95'/>
      <Employee firstName='Jonathon'lastName='B' age='7'/>
      <Employee firstName='Bobby'lastName='C' age='27'/> */}
    </div>
  );
}
