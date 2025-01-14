function validateLogin(username, password) {
    const correctUsername = 'user123';
    const correctPassword = 'pass123';

    if (username === correctUsername && password === correctPassword) {
        console.log('Login Successful');
    } else {
        console.log('Login Failed');
    }
}

const usernameInput = 'user123'; 
const passwordInput = 'pass123'; 
validateLogin(usernameInput, passwordInput);
