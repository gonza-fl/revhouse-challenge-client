const { REACT_APP_API_URL: baseUrl } = process.env;
const constants = {
  getUsers: `${baseUrl}/user`,
  createUser: `${baseUrl}/user`,
};

export default constants;
