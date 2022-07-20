/**
 * These are the fields that the Employee schema will have in out database
 * subjected to futher changes.
 */

class OpdSearch {
    constructor (
        from,
        to,
        patientUid,
        ipNo,
        department,
        doctorUid
    ){
        this.from = from;
        this.to = to;
        this.patientUid = patientUid;
        this.ipNo = ipNo;
        this.department = department;
        this.doctorUid = doctorUid;
    }
}

module.exports = {
    OpdSearch,
};