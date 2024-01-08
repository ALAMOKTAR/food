import axios from 'axios'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react'

const UserList = () => {
    const [data,setData]=useState([])
    useEffect(() => {
        const Data = async () => {
                const response = await axios.get('http://localhost:5000/users');
                setData(response.data);
            };
        Data();
    },[])
  return (
        <div>
      <h1>User List</h1>
      <ul>
        {data.map((user) => 
          <li style={{display:'flex',justifyContent:'space-around'}} key={user.id}><h4>{user.name}
          </h4>   <h4>{user.email}</h4>   <Link key={user.id} to={`User/${user.id}/`}> <button>profil</button> </Link>  </li> )}
      </ul>
    </div>
  )
}

export default UserList