import { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div className='vh-100 bg-dark text-white pt-5 ps-5'>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>username:</strong> {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;