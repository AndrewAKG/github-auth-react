import axios from "axios";

export const saveUserToken = (code) => dispatch => {
  axios.get("http://localhost:8000/github-auth/signin/callback?code=" + code)
  .then(response => {
    if(response && response.data){
      localStorage.setItem('USER_TOKEN', response.data);
      dispatch({
        type: "USER_SIGNIN",
        payload: response.data,
      });
    }  
  })
};

export const getTasks = async () => {
  const user_token = localStorage.getItem('USER_TOKEN');
  const tasks = await axios.get("http://localhost:8000/tasks", {
    headers: {
      Authorization: `bearer ${user_token}`,
    },
  });

  return tasks.data;
};
