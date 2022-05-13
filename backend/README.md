### Base URL
https://pacific-garden-92293.herokuapp.com/

### API Endpoints
/ -  shows a text to show the server is running <br />

#### For authentication
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
<br />

/auth/gentoken (GET) -  Send "Bearer" keyword along with refresh token with a space in Authorization part of the request header, to generate a new pair of access token and refresh token when token expiration error occurs (HTTP CODE := 401)

#### For patient registration
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
