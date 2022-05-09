/**
 * These are the fields that the Employee schema will have in out database
 * subjected to futher chnages
 */

class Employee {
    constructor(
        id,
        firstName,
        lastName,
        gender,
        email,
        password,
        userType
    ){
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.email = email
        this.password = password
        this.userType = userType
        
    }

    // Check Employee fields are valid or not
    // @TODO - Add Employee
    isValid(){
        return true;
    }


}

module.exports = Employee;