### Base URL
https://pacific-garden-92293.herokuapp.com/

### API Endpoints
/ -  displays a text showing the server is running<br />

### For authentication
/auth/login (POST) - Send uid and password as json body to login <br />

/auth/register (POST) - To register a new employee. A request of the following form must be sent to the end-point:
```
{
    "uid": "123",
	"first_name": "mock",
    "last_name": "jay",
    "gender": "M",
    "email" : "sadu@gmail.com",
    "password": "admin",
    "user_type": "paramedic",
    "contacts":{
        "primary_contact": 1234567890,
        "secondary_contact": 1234567890
    }
}
```
uer_type can contain on of the 4 strings (doctor, paramedic, nurse, emt, mod)
<br />

/auth/gentoken (GET) -  Send "Bearer" keyword along with refresh token with a space in Authorization part of the request header, to generate a new pair of access token and refresh token when token expiration error occurs (HTTP CODE := 401)

### For patient registration
/patient/register (POST) - To register a new patient. A request of the following form must be sent to the end-point:
```
{
    "id_type": "phone_number",
    "id_num": "0123456789",
    "details": {
        "name": "Moicking Jay",
        "age": 21,
        "gender": "M"
    },
    "avpu": "Alert",
    "severity": "#ffffff",
    "vitals": {
        "bp": 12.3,
        "temperature": 20,
        "pulse": 21.5,
        "pain": 20,
        "respiratory_rate": 35.3,
        "cbg": 231,
        "spo2": 19
    }
}
```
(Note => Make sure to add "Bearer " + access token you have received while logging to the 'authorization' section of the request header while using the endpoint.)

### For employee

/employee/profile/{uid} (GET) - To find the profile of the employee replace uid with the employee's uid who'se profile you want to search.

/employee/patients (GET) -  Displays a list of patients that the employee is going to provide treatment for.

(Note => Make sure to add "Bearer " + access token you have received while logging to the 'authorization' section of the request header while using the endpoint.)

### For doctor

#### Opd Consultation

doctor/opd/search (GET) - To search for patients that are registered under a particular doctor.

This url sends list as paged data (for performance efficiency) along with the url send page number (page) and page size (pageSize) as get url parameters.
Sample => http://localhost:3000/doctor/opd/search?page=1&&pageSize=30
* Value of page starts from 1.
* If both the values are not provided the defualt value of page will be 1 and   page_size will be 30.

Sample json format to search =>

```
    "from": "2021-07-06T18:30:00.425Z",
    "to": "2022-07-07T07:07:33.184Z",
    "patient_uid": "PID1014"
```
Property Defination => 

from -> to search patients that are registered after a particular date.

to -> to search patients that are registered before a particular date.

patient_uid -> to search for a particular patient using patient's uid.

For javascript frontend => Send the json format of date and time using the Date() objects toJson() method. 

Example => new Date.toJson()

If none of the values are provided it will show all the patients as defualt.

(Note => Make sure to add "Bearer " + access token you have received while logging to the 'authorization' section of the request header while using the endpoint.)

