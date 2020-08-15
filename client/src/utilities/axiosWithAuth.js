import Axios from "axios"

export const axiosWithAuth = () => {
  const token = localStorage.getItem('bubbleToken')
  return Axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
      authorization: token
    }
  })
}