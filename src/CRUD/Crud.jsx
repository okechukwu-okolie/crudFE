// import React, { useState, useEffect, useRef, useMemo } from 'react';

// // The main application component.
// const Crud = () => {
//   // Use a state variable to hold the list of items.
//   // In a real app, this would be populated from an API.
//   const [items, setItems] = useState([]);
  
//   // State for loading and error handling.
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // State to manage the input value for the form.
//   const [inputValue, setInputValue] = useState('');
  
//   // State to track the item currently being edited.
//   // This is an object that holds the id and value of the item.
//   const [editingItem, setEditingItem] = useState(null);

//   // A ref to directly access the input element and focus it.
//   const inputRef = useRef(null);

//   // useEffect hook to simulate fetching data from an API on initial render.
//   // The empty dependency array [] ensures this runs only once.
//   useEffect(() => {
//     // Simulate a network request.
//     const fetchItems = async () => {
//       try {
//         setLoading(true);
//         // --- API INTEGRATION POINT ---
//         // Replace this with your actual API call.
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         const allData = data=> data
        
//         // Simulating data and a delay.
//         const mockData = [
//           { id: '1', value: 'Learn React Hooks' },
//           { id: '2', value: 'Build a CRUD app' },
//           { id: '3', value: 'Connect to a backend' },
//         ];
//         await new Promise(resolve => setTimeout(resolve, 1000));
        
//         setItems(mockData);
//         // setItems(data)
//         setError(null);
//       } catch (err) {
//         setError("Failed to fetch data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchItems();
//   }, []);

//   // useEffect to focus the input field when we enter edit mode.
//   // The dependency array [editingItem] makes this effect re-run whenever editingItem changes.
//   useEffect(() => {
//     if (editingItem && inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, [editingItem]);

//   // useMemo to demonstrate performance optimization.
//   // This hook memoizes the sorted list of items. It will only re-calculate
//   // if the 'items' array changes, preventing unnecessary re-sorts on every render.
//   const sortedItems = useMemo(() => {
//     // Sort items alphabetically.
//     return [...items].sort((a, b) => a.value.localeCompare(b.value));
//   }, [items]);

//   // --- CRUD OPERATIONS ---

//   // CREATE: Add a new item.
//   const handleAddItem = async () => {
//     if (inputValue.trim() === '') return;

//     const newItem = {
//       // Use a timestamp or a library like `uuid` for a unique ID.
//       id: Date.now().toString(),
//       value: inputValue.trim(),
//     };

//     // --- API INTEGRATION POINT ---
//     // In a real app, you would make a POST request here.
//     // await fetch('/api/items', {
//     //   method: 'POST',
//     //   headers: { 'Content-Type': 'application/json' },
//     //   body: JSON.stringify(newItem),
//     // });
    
//     setItems([...items, newItem]);
//     setInputValue('');
//   };

//   // READ: This is handled by rendering the `sortedItems` list in the JSX below.

//   // UPDATE (start): Set the state to prepare for editing.
//   const handleEditItem = (item) => {
//     setEditingItem(item);
//     setInputValue(item.value);
//   };

//   // UPDATE (submit): Update the item and reset state.
//   const handleUpdateItem = async () => {
//     if (!editingItem || inputValue.trim() === '') return;

//     const updatedItem = { ...editingItem, value: inputValue.trim() };

//     // --- API INTEGRATION POINT ---
//     // Make a PUT or PATCH request to your API here.
//     // await fetch(`/api/items/${editingItem.id}`, {
//     //   method: 'PUT',
//     //   headers: { 'Content-Type': 'application/json' },
//     //   body: JSON.stringify(updatedItem),
//     // });

//     setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item));
//     setEditingItem(null);
//     setInputValue('');
//   };

//   // DELETE: Remove an item.
//   const handleDeleteItem = async (id) => {
//     // --- API INTEGRATION POINT ---
//     // Make a DELETE request to your API here.
//     // await fetch(`/api/items/${id}`, { method: 'DELETE' });

//     setItems(items.filter(item => item.id !== id));
//   };
  
//   // Cancel the edit operation.
//   const handleCancelEdit = () => {
//     setEditingItem(null);
//     setInputValue('');
//   };

//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8 font-sans">
//       <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-xl">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">React CRUD App</h1>
        
//         {/* Input Form for Add/Update */}
//         <div className="flex flex-col gap-4 mb-8">
//           <div className="flex gap-2">
//             <input
//               ref={inputRef}
//               type="text"
//               className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder={editingItem ? "Update item..." : "Add a new item..."}
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)}
//               onKeyDown={(e) => e.key === 'Enter' && (editingItem ? handleUpdateItem() : handleAddItem())}
//             />
//             {editingItem ? (
//               <>
//                 <button
//                   onClick={handleUpdateItem}
//                   className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
//                 >
//                   Update
//                 </button>
//                 <button
//                   onClick={handleCancelEdit}
//                   className="px-6 py-3 bg-gray-400 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 transition-colors"
//                 >
//                   Cancel
//                 </button>
//               </>
//             ) : (
//               <button
//                 onClick={handleAddItem}
//                 className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
//               >
//                 Add Item
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Display loading, error, or the list of items */}
//         {loading ? (
//           <p className="text-center text-gray-500">Loading items...</p>
//         ) : error ? (
//           <p className="text-center text-red-500">{error}</p>
//         ) : (
//           <ul className="space-y-4">
//             {sortedItems.map(item => (
//               <li
//                 key={item.id}
//                 className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors"
//               >
//                 <span className="text-lg text-gray-700">{item.value}</span>
//                 <div className="flex space-x-2">
//                   <button
//                     onClick={() => handleEditItem(item)}
//                     className="px-4 py-2 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-600 transition-colors"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDeleteItem(item.id)}
//                     className="px-4 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-colors"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
      
//     </div>
//   );
// };

// export default Crud;

// // Load Tailwind CSS from CDN
// const tailwindScript = document.createElement('script');
// tailwindScript.src = 'https://cdn.tailwindcss.com';
// document.head.appendChild(tailwindScript);





// App.js
import React, { useState, useEffect, useMemo, useRef } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function Crud() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [formValues, setFormValues] = useState({ name: '', email: '' });
  const inputRef = useRef(null);

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setUsers(data);
    console.log(data)
  };

  const filteredUsers = useMemo(() => {
    // A simple example for useMemo
    return users.filter(user => user.name.toLowerCase().includes('a'));
  }, [users]);

  // Handle form submission for create/update
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentUser) {
      // Update
      const response = await fetch(`${API_URL}/${currentUser.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues),
      });
      const updatedUser = await response.json();
      setUsers(users.map(u => (u.id === updatedUser.id ? updatedUser : u)));
    } else {
      // Create
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues),
      });
      const newUser = await response.json();
      setUsers([...users, newUser]);
    }
    setFormValues({ name: '', email: '' });
    setCurrentUser(null);
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
    setFormValues({ name: user.name, email: user.email });
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <h1>User Management</h1>

      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Name"
          value={formValues.name}
          onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={formValues.email}
          onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
        />
        <button type="submit">{currentUser ? 'Update' : 'Add'}</button>
      </form>

      <h2>Users List</h2>
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud;
