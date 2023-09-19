// Write your solution in this file!

const employee = {
    name: "John Doe",
    streetAddress: "123 Main Street"
  };

  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee };
    
    updatedEmployee[key] = value;
    
    return updatedEmployee;
  }
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm Street");

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    
    return employee;
  }

  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm Street");

  function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = { ...employee };
    
    delete updatedEmployee[key];
    
    return updatedEmployee;
  }

  const UpdatedEmployee = deleteFromEmployeeByKey(employee, "streetAddress");

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    
    return employee;
  }
  destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  
