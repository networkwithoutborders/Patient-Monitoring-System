/**
 * These are the fields that the Patient schema will have in out database
 * Some fields will be added during patient pre-registration and others will be updated later
 * subjected to futher chnages
 */

 class Patient {
    constructor(
        id,                 // default id/primary key
        pt_id,              // Unique ID - phone number/Aadhar/Driver's license(used for generating QR code)
        firstName,
        lastName,
        age,
        gender,             // Male/Female/Others
        avpu,               // Array of strings - must stores multiple entries like "ALERT, "RESPONDS ONLY TO PAIN"
        bp,
        temp,
        pulse,
        pain_index,
        respiratory_rate,
        cbg,
        spo2,
        pt_severity_code    // Red, Yellow or Green
        
    ){
        this.id = id
        this.pt_id = pt_id
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.gender = gender
        this. avpu =  avpu
        this.bp = bp
        this.temp = temp
        this.pulse = pulse
        this.pain_index = pain_index
        this.respiratory_rate = respiratory_rate
        this.cbg = cbg
        this.spo2 = spo2
        this.pt_severity_code = pt_severity_code
       
        
    }

    // Check Patient fields are valid or not
    // @TODO - Add Patient
    isValid(){
        return true;
    }


}

module.exports = Patient;