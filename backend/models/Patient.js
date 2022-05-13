/**
 * These are the fields that the Pateint schema will have in out database
 * subjected to futher changes
 */

class Patient {
    constructor(
        name,
        age,
        gender,
        employeeUid,
        avpu,
        severity
    ){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.employeeUid = employeeUid;
        this.avpu = avpu;
        this.severity = severity;
    }
}

class PatientId {
    constructor(
        id,
        idType,
    ){
        this.id = id;
        this.idType = idType;
    }

}

class PatientVitals {
    constructor(
        bp,
        temperature,
        pulse,
        pain,
        respiratoryRate,
        cbg,
        spo2,
    ){
        this.bp = bp;
        this.temperature = temperature;
        this.pulse = pulse;
        this.pain = pain;
        this.respiratoryRate = respiratoryRate;
        this.cbg = cbg;
        this.spo2 = spo2;

    }
}

module.exports = {
    Patient,
    PatientId,
    PatientVitals,
};