// import "./App.css";
// import { Button, Table, Modal, Input } from "antd";
// import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
// import { useState, useEffect } from 'react';

// function GuestList() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingguest, setEditingguest] = useState(null);

//   function loadProject(){
//     fetch('./routes/guest-routes')
//     .then((Response)=> Response.json())
//     .then((data)=> setDataSource(data))
//   }

//   const[dataSource, setDataSource] = useState([]);
//   useEffect(()=>{loadProject()});

//   const columns = [
//     {
//       key: "1",
//       title: "ID",
//       dataIndex: "id",
//     },
//     {
//       key: "2",
//       title: "Name",
//       dataIndex: "name",
//     },
//     {
//       key: "3",
//       title: "Email",
//       dataIndex: "email",
//     },
//     {
//       key: "4",
//       title: "Address",
//       dataIndex: "address",
//     },
//     {
//       key: "5",
//       title: "Actions",
//       render: (record) => {
//         return (
//           <>
//             <EditOutlined
//               onClick={() => {
//                 onEditguest(record);
//               }}
//             />
//             <DeleteOutlined
//               onClick={() => {
//                 onDeleteguest(record);
//               }}
//               style={{ color: "red", marginLeft: 12 }}
//             />
//           </>
//         );
//       },
//     },
//   ];

//   const onAddguest = () => {
//     const randomNumber = parseInt(Math.random() * 1000);
//     const newguest = {
//       id: randomNumber,
//       name: "Name " + randomNumber,
//       email: randomNumber + "@gmail.com",
//       address: "Address " + randomNumber,
//     };
//     setDataSource((pre) => {
//       return [...pre, newguest];
//     });
//   };
//   const onDeleteguest = (record) => {
//     Modal.confirm({
//       title: "Are you sure, you want to delete this guest record?",
//       okText: "Yes",
//       okType: "danger",
//       onOk: () => {
//         setDataSource((pre) => {

//           // deleteGuest(id);
//           return pre.filter((guest) => guest.id !== record.id);

//         });
//       },
//     });
//   };
//   const onEditguest = (record) => {
//     setIsEditing(true);
//     setEditingguest({ ...record });
//   };
//   const resetEditing = () => {
//     setIsEditing(false);
//     setEditingguest(null);
//   };
//   return (
//     <div className="App">
//       <header className="App-header">
//       <span className={"search-page-text-wrapper"}>Paradise Made Easy</span>
//       {/* <span className={"search-page-span"}>dise</span> */}

//         <Button onClick={onAddguest}>Add a new guest</Button>
//         <Table columns={columns} dataSource={dataSource}></Table>
//         <Modal
//           title="Edit guest"
//           visible={isEditing}
//           okText="Save"
//           onCancel={() => {
//             resetEditing();
//           }}
//           onOk={() => {
//             setDataSource((pre) => {
//               return pre.map((guest) => {
//                 if (guest.id === editingguest.id) {
//                   return editingguest;
//                 } else {
//                   return guest;
//                 }
//               });
//             });
//             resetEditing();
//           }}
//         >
//           <Input
//             value={editingguest?.name}
//             onChange={(e) => {
//               setEditingguest((pre) => {
//                 return { ...pre, name: e.target.value };
//               });
//             }}
//           />
//           <Input
//             value={editingguest?.email}
//             onChange={(e) => {
//               setEditingguest((pre) => {
//                 return { ...pre, email: e.target.value };
//               });
//             }}
//           />
//           <Input
//             value={editingguest?.address}
//             onChange={(e) => {
//               setEditingguest((pre) => {
//                 return { ...pre, address: e.target.value };
//               });
//             }}
//           />
//         </Modal>
//       </header>
//     </div>
//   );
// }

// export default GuestList;

import React from "react";
// import Guests from './cards/Guests';

const GuestList = ({ users }) => {
  if (!users.length) {
    return <h2>No guests for this trip</h2>;
  }
  return (
    <div>
      <h3>Guests</h3>
      <div className="flex-row justify-space-between my-4">
        {users &&
          users.map((user) => (
            <div key={user._id}>
              <div>
                <h4>{user.name}</h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GuestList;
