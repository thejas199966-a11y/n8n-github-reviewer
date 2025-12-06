// Utility functions for validation

const VALID_EMAIL = 'user@example.com';
const VALID_PASSWORD = 'password123';

function validateUser(email, password) {
    return email === VALID_EMAIL && password === VALID_PASSWORD;
}

function additionFunction(a, b) {
    return a + b;
}

const dummyConstant = "Addition";

export { validateUser, additionFunction, dummyConstant };
