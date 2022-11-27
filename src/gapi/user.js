import axios from "axios";

export const getUserInfo = async () => {
  let userInfo = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json');
  return userInfo;
}