import { useState, useEffect } from 'react';
import axios from 'axios';

function Orders() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  return (
    <div className='vh-100 bg-dark text-white pt-5 ps-5'>
      <h1>Orders</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <strong>buyer:</strong> {order.user_id}, <strong>book:</strong> {order.book_id}, <strong>oder_date:</strong> {order.order_date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;