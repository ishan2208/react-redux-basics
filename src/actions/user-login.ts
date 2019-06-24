export const USER_LOGIN = 'user:userLogin';

export const userLogin = (email: string, password: string) => (dispatch: any) => {
  fetch('http://localhost:3000/agencies/1/login', {
    method: 'post',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {'Content-Type':'application/json'},
   })
    .then(res => res.json())
    .then(data => dispatch({
        type: USER_LOGIN,
        payload: data
    })
  );
};

