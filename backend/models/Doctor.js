/**
 * These are the fields that the Employee schema will have in out database
 * subjected to futher changes.
 */

class OpdSearch {
    constructor (
        from,
        to,
        uhid,
        ipNo,
        department,
        doctor
    ){
        this.from = from;
        this.to = to;
        this.uhid = uhid;
        this.ipNo = ipNo;
        this.department = department;
        this.doctor = doctor;
    }
}

module.exports = {
    OpdSearch,
};