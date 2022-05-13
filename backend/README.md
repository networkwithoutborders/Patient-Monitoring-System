### Base URL
https://pacific-garden-92293.herokuapp.com/

### API Endpoints
/ -  shows a text to show the server is running <br />

#### For authentication
/auth/login (POST) - Send id and password as json body to login <br />

/auth/register (POST) - Send id, first_name, last_name, gender, email, password, user_type(doctor, patient, nurse, emt, mod) as json body to register a new Employee <br />

/auth/gentoken (GET) -  Send "Bearer" keyword along with refresh token with a space in Authorization part of the request header, to generate a new pair of access token and refresh token when token expiration error occurs (HTTP CODE := 401)

#### For patient registration
/patient/register (POST) - To register a new patient. A request of the following form must be sent to the end-point:
```
{
    "id_type": "phone_number",
    "id_num": "9686014755",
    "details": {
        "name": "Oishik Sen Gupta",
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
        "spo2": "19"
    }
}
```
(Note => Make sure to add "Bearer " + access token you have received while logging to the 'authorization' section of the request header while using the endpoint.)
