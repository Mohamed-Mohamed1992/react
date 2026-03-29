// import React, { useEffect, useState } from "react";

// // 1. Define the type of each user object
// interface User {
//     id: number;
//     name: string;
//     email: string;
//     phone: string;
//     // Add more fields as needed
// }

// const UserList: React.FC = () => {
//     // 2. Type the users array with "User()"
// const [users, setUsers] = useState<User[]>([]);

// // 3. useEffect to fetch users on mount
//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then((res) => res.json())
//         .then((data: User[]) => setUsers(data));
//     }, []);

//     return (
//         <div>
//             <h2>Users:</h2>
//             <ul>
//                 {users.map((user) => (
//                     <li key={user.id}>
//                         <strong>Name: </strong>{user.name}
//                         <br />
//                         <strong>Email: </strong>{user.email}
//                         <br />
//                         <strong>Phone: </strong>{user.phone}
//                         <hr />
//                         </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default UserList

// import React, { useState, useEffect } from "react";

// const UserList: React.FC =() => {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         console.log("useEffect runs after every render");
//     },[]);

//     return (
//         <div>
//             <h2>Count: {count}</h2>
//             <button onClick={() => setCount(count + 1)}>Click Me</button>
//         </div>
//     );
// };

// export default UserList;

import React, { useState, useEffect } from "react";

const UserList: React.FC = () => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  useEffect(() => {
    console.log(`Width or Height changed: ${width}x${height}`);
  }, [width, height]);

  return (
    <div>
      <button className="bg-green-500 border rounded m-4 p-2" onClick={() => setWidth(width + 10)}>Increase Width</button>
      <button className="bg-green-500 border rounded m-4 p-2" onClick={() => setHeight(height + 10)}>Increase Height</button>
    </div>
  );
};

export default UserList;
