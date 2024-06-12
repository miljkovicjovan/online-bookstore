import { useState, useEffect } from 'react';
import axios from 'axios';

function Books() {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div className='vh-100 bg-dark text-white pt-5 ps-5'>
      <h1>Books</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>Title:</strong> {book.title}, <strong>Author:</strong> {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;