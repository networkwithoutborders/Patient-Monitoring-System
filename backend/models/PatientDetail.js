/**
 * These are the fields that the Employee schema will have in out database
 * subjected to futher changes.
 */


class PatientDetail {
    constructor(
        orderNo,
        patientName,
        uhid,
        age,
        gender,
        doctorName,
    ){
        this.orderNo = orderNo;
        this.patientName = patientName;
        this.uhid = uhid;
        this.age = age;
        this.gender = gender;
        this.doctorName = doctorName;
    }
}

module.exports = {
    PatientDetail,
};