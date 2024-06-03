import React, { useState, useEffect } from 'react';
import useCollection from '../firebase/firestorage';

const Crud = () => {
    const { add, getAll, update, remove, results, isPending } = useCollection("users");
    const [user, setUser] = useState({ name: '', email: '' });
    const [selectedUser, setSelectedUser] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleSave = async () => {
        if (selectedUser) {
            await update(selectedUser.id, user);
        } else {
            await add(user);
        }
        await getAll();
        setUser({ name: '', email: '' });
        setSelectedUser(null);
    };

    const handleDelete = async (user) => {
        await remove(user.id);
        await getAll();
    };

    const handleUpdate = (user) => {
        setSelectedUser(user);
        setUser({ name: user.name, email: user.email });
    };

    useEffect(() => {
        getAll();
    }, []);

    return (
        <div>
            <input 
                type="text" 
                name="name" 
                onChange={handleInputChange} 
                value={user.name} 
                placeholder="User Name" 
            />
            <input 
                type="email" 
                name="email" 
                onChange={handleInputChange} 
                value={user.email} 
                placeholder="User Email" 
            />
            <button onClick={handleSave} disabled={isPending}>
                {isPending ? 'Saving...' : 'Save'}
            </button>
            <ul>
                {results.map((item) => (
                    <li key={item.id}>
                        <p>{item.name} - {item.email}</p>
                        <button onClick={() => handleUpdate(item)}>Edit</button>
                        <button onClick={() => handleDelete(item)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Crud;
