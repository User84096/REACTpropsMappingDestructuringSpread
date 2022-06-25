const Employee = (props) => {
  const { firstName, lastName, age } = props;
  return (
    <div>
      <h4>
        Employee name: {firstName} {lastName}, who is {age}.
      </h4>
    </div>
  );
};

export default Employee;
