
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const {user} = useContext(AudioContext);
  const user = true;
  return (
    user ? <Outlet /> : <Navigate to="/login"/>
  )
}

export default PrivateRoute