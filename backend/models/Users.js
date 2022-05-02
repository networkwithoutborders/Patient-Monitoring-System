/**
 * These are the fields that the user schema will have in out database
 * subjected to futher chnages
 */

class User {
    constructor(
        id,
        firstName,
        lastName,
        gender,
        email,
        password,
        designation
    ){
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.email = email
        this.password = password
        this.designation = designation
        
    }

    // Check user fields are valid or not
    // @TODO - Add user
    isValid(){
        return true
    }


}

module.exports = User