import axios from "axios";
export const login = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      data);
    return response.data;
  } catch (error) {
    return error.message
  }

}

export const signupAPI = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/auth/signup`,
    {
      ...data,
    }
  );
  return response.data;
};

export const initiateTokenVerification=async (data)=>{
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/auth/initateTokenVerification`,
    {
      ...data
    }
  )
  return response.data
}


export const ResendOTP = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/auth/initateTokenVerification`,
    data
  )
  return response.data
}