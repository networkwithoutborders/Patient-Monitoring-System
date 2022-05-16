/**
 * These are the fields that the Employee schema will have in out database
 * subjected to futher changes.
 */

class Employee {
    constructor(
        uid,
        firstName,
        lastName,
        gender,
        email,
        password,
        userType,
        primaryContact,
        secondaryContact,
        description,
    ){
        this.uid = uid
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.userType = userType;
        this.primaryContact = primaryContact;
        this.secondaryContact = secondaryContact;
        this.description = description;

    }

    // Check Employee fields are valid or not
    // @TODO - Add Employee
    isValid(){
        return true;
    }


}

module.exports = Employee;