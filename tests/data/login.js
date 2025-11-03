export const USERS = {
  valid: {
    username: process.env.VALID_USERNAME,
    password: process.env.VALID_PASSWORD,
  },
  blocked: {
    username: process.env.BLOCKED_USERNAME,
    password: process.env.BLOCKED_PASSWORD,
  },
  invalid: {
    username: process.env.INVALID_USERNAME,
    password: process.env.INVALID_PASSWORD,
  },
  wrongPassword: {
    username: process.env.WRONG_PASSWORD_USERNAME,
    password: process.env.WRONG_PASSWORD_PASSWORD,
  },
};

export const MESSAGES = {
  success: {
    login: 'User successfully logged in!',
    authenticated: (user) => `User ${user} authenticated`,
    logout: 'You have been logged out. Please log in.',
  },
  errors: {
    blocked: 'User blocked!',
    invalid: 'User not found!',
    wrongPassword: 'Incorrect username or password!',
    tooManyAttempts: 'User temporarily blocked!',
  },
};
