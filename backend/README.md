### Base URL
https://pacific-garden-92293.herokuapp.com/

### API Endpoints
/ -  shows a text to show the server is running <br />

#### For authentication
/auth/login (POST) - Send id and password as json body to login <br />
/auth/register (POST) - Send id, first_name, last_name, gender, email, password, user_type(doctor, patient, nurse, emt, mod) as json body to register a new Employee
/auth/gentoken (GET) -  Send "Bearer" keyword along with refresh token with a space in Authorization part of the request header, to genreate a new pair of access token and refresh token when token expiration error occurs (HTTP CODE := 401)