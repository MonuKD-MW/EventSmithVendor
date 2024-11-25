import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../redux/features/loginSlice';
// import {login} from '../../utils/API/initialAPI'
// call the api 

const useLogin = () => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
//   this object will send when api hit
//   const loginObject = {
//     email: '',
//     password: '',
//   };
  const changeHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    //     login api call
    //     const response = await login(loginObject);
    //     if (response.status === 200) {
        dispatch(setCredentials({ email: loginData.email, password: loginData.password ,isLoggedIn:true}));
        //     } else {
//       // Handle error
//       console.log("something went wrong")
//     }
  };

  return { loginData, changeHandler, submitHandler };
};

export default useLogin;
