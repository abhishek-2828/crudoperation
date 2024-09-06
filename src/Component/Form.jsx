import '../Style/Form.css';
import Button from 'react-bootstrap/Button';

const Form = ({data, setData, firstName, lastName, email, phone, gender, setFname, setLname, setEmail, setPhone, setGender, isUpdate, setIsUpdate, editingItem, setEditingItem}) => {

    const handleEdit = (id) => {

        const dt = data.filter(item => item.id === id);
        console.log("data : ", dt)
        setIsUpdate(true);
    
        setFname(dt[0].firstName);
        setLname(dt[0].lastName);
        setEmail(dt[0].email);
        setPhone(dt[0].phone);
        setGender(dt[0].gender);
        setEditingItem(id);


    };
    
    const handleDelete = (id) => {
        if(id > 0){
            // if (window.confirm('Are you sure you want to delete this data?')) {
            // }
            setData(data.filter(item => item.id !== id));
        }
    };
    

    const handleReset = () => {

        setIsUpdate(false);
        // setEditingItem(null);

        setFname('');
        setLname('');
        setEmail('');
        setPhone('');
        setGender('');

    };

    const handleData = (id) => {

        if (isUpdate) {
            // Update existing item
            setData(
                data.map(item =>
                    item.id === id
                        ? {
                              ...item,
                              firstName,
                              lastName,
                              email,
                              phone,
                              gender,
                          }
                        : item
                )
            );
        } else {
            // Add new item
            const newId = data.length > 0 ? Math.max(...data.map(item => item.id)) + 1 : 1; // Handle empty data case
            
            const newItem = {
                id: newId, // New ID
                firstName,
                lastName,
                email,
                phone,
                gender
            };
            setData([...data, newItem]);
        }
        
        // Clear form fields after submit
        handleReset();
    };
    

    return (
        <div className="mainFormContainer">
            <div className="Container">
                <div className="formContainer">
                            <h2 className='formHeading'>{isUpdate ? 'Update Data' : 'Add Data'}</h2>

                            <form className="formTag">
                                <div className='fieldContainer'>
                                    <input type="text" className="inputField" name="firstName" placeholder="Enter First name"  onChange={(e) => setFname(e.target.value)} value={firstName} required/>
                                </div>

                                <div className='fieldContainer'>
                                    <input type="text" className="inputField" name="lastName" placeholder="Enter Last Name" onChange={(e) => setLname(e.target.value)} value={lastName} required/>
                                </div>

                                <div className='fieldContainer'>
                                    <input type="text" className="inputField" name="Email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
                                </div>

                                <div className='fieldContainer'>
                                    <input type="text" className="inputField" name="Phone" placeholder="Enter Phone Number" onChange={(e) => setPhone(e.target.value)} value={phone} required/>
                                </div>

                                <div className='fieldContainer'>
                                    <input type="text" className="inputField" name="gender" placeholder="Enter Gender" onChange={(e) => setGender(e.target.value)} value={gender} required/>
                                </div>

                            </form>
                </div>
                    
                <div className="actionSection">
                    <button className="resetBtn" onClick={handleReset}>Reset</button>
                    <button className="submitBtn" onClick={() => handleData(editingItem)}> 
                        {isUpdate ? 'Update' : 'Submit'}
                    </button>
                </div>

            </div>

            <div className='tableData' style={{ height: '90vh', overflow: 'auto' }}>
                <table className='table table-bordered table-hover table-sm table-dark'>
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Gender</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.gender}</td>
                                <td><Button variant="success" size="sm" onClick={() => handleEdit(item.id)}>Edit</Button></td>
                                <td><Button variant="danger" size="sm" onClick={() => handleDelete(item.id)}>Delete</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Form;