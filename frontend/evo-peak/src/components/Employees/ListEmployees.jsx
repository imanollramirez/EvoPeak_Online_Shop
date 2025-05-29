// components/Employees/ListEmployees.jsx
import CardAdminEmployees from "./CardAdminEmployees.jsx";

const ListEmployees = ({ employees, deleteEmployee, updateEmployee }) => {
  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <CardAdminEmployees
          key={employee._id}
          employee={employee}
          deleteEmployee={deleteEmployee}
          updateEmployee={updateEmployee}
        />
      ))}
    </div>
  );
};

export default ListEmployees;
