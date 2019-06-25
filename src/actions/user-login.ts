export const USER_LOGIN = 'user:userLogin';
export const USER_LOGIN_FAILURE = 'user:userLoginFailure';

export const userLogin = (email: string, password: string) => (dispatch: any) => {
  fetch('http://localhost:3000/agencies/1/login', {
    method: 'post',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {'Content-Type':'application/json'},
   })
    .then(res => {
      if (res.ok) {
        return res.json()
      }

      throw new Error('Login Failed');
    })
    .then(data => {
      dispatch({
        type: USER_LOGIN,
        payload: data
      })
    })
    .catch((err: string) => {
        console.log('Error Occurred');
        dispatch({
          type: USER_LOGIN_FAILURE,
          payload: err
        });
    })
};

