#hosted this on Github"
from there you need to clone the whole project then execute the following command

for checking the backend functionality
run the following command on terminal
cd movie-app
cd Backend 
node index.js

for checking API is working or not
Copy the API from index.js in login folder
then on postman copy that API then click on body then raw then select JSON format then put the parameters in the given format
{
    "firstName":"YourName",
    "lastName":"lastName",
    "email":"email",
    "password":"password"
}
message will be displayed.

for frontend 
cd movie-app
npm start
