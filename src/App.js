import './App.css';
import Form from './Component/Form';
import { useEffect, useState } from 'react';


function App() {

  const getData = () => {
    const prev_data = localStorage.getItem('data');

    if(prev_data){
      return JSON.parse(prev_data);
    }else{
      return [];
    }
  }


  const [data, setData] = useState(getData());
  // const [data, setData] = useState([]);

  const [firstName, setFname] = useState('');
  const [lastName, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');

  const [isUpdate, setIsUpdate] = useState(false);
  const [editingItem, setEditingItem] = useState(null);



  // Effect to update localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  // Effect to set initial data (hardcoded data) if localStorage is empty
  useEffect(() => {
    if (data.length === 0) {
      const initialData = [
        { id: 1, firstName: 'Abhishek', lastName: 'Gupta', email: 'abhishekgupta@gmail.com', phone: '1234567890', gender: 'Male' },
        { id: 2, firstName: 'Shivam', lastName: 'Dubey', email: 'shivamdubey@gmail.com', phone: '9876543210', gender: 'Male' },
        { id: 3, firstName: 'Pooja', lastName: 'Hawale', email: 'poojahawale@gmail.com', phone: '1234567890', gender: 'Female' },
        { id: 4, firstName: 'Ravi', lastName: 'Singh', email: 'ravisingh@example.com', phone: '2345678901', gender: 'Male' },
        { id: 5, firstName: 'Sapna', lastName: 'Patel', email: 'snehapatel@example.com', phone: '3456789012', gender: 'Female' },
        { id: 6, firstName: 'Amit', lastName: 'Kumar', email: 'amitkumar@example.com', phone:  '4567890123', gender: 'Male' },
        { id: 7, firstName: 'Nisha', lastName: 'Sharma', email: 'nishasharma@example.com', phone: '5678901234', gender: 'Female' },
      ];
      setData(initialData);
    }
  }, []);

  return (
    <div className="App">

      <Form data={data} setData={setData}
            firstName={firstName} setFname={setFname} 
            lastName={lastName} setLname={setLname}
            email={email} setEmail={setEmail}
            phone={phone} setPhone={setPhone}
            gender={gender} setGender={setGender}
            
            isUpdate={isUpdate} setIsUpdate={setIsUpdate}
            editingItem={editingItem} setEditingItem={setEditingItem}

      />

    </div>
  );
}

export default App;
