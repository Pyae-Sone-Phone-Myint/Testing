import React from "react";
import { useGetAllContactsQuery } from "../../redux/api/contactApi";
import { BsFillPersonPlusFill } from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import { Table } from '@mantine/core';
const ContactTable = () => {
  const token = "5131|zXyFJyY0LjcQJxbWOFEsOUT6qAOOX8QicPMDVMfh";
  const { data, isLoading, isError, isSuccess } = useGetAllContactsQuery(token);
  const nav= useNavigate();
  
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isSuccess) {
    console.log(data?.contacts.data);
    if (data?.contacts.data.length > 0) {
      const rows = data?.contacts.data.map((element) => (
        <tr key={element.id}>
          <td>{element.name}</td>
          <td>{element.email}</td>
          <td>{element.phone}</td>
          <td>{element.address}</td>
        </tr>
      ));
      return (<div>
        <p>Here are contacts</p>
    

    
   

       
            <Table>
              <thead>
                <tr>
                  <th>Element position</th>
                  <th>Element name</th>
                  <th>Symbol</th>
                  <th>Atomic mass</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
      
        
      </div>);
    } else {
      return (
        <div className=" w-full min-h-[80vh] flex justify-center items-center">
          <div className="">
            <img
              className="w-[150px] mx-auto"
              src="public\empty-box.png"
              alt="empty-contact=img"
            />
            <div className=" mt-5 flex items-center flex-col gap-3">
              <p className=" text-color">
                Looks like you haven't added any contacts yet.
              </p>
              <button onClick={()=>nav('/create')}  className="  btn-color px-4 py-2 flex items-center gap-2 rounded tracking-wider shadow-sm hover:bg-orange-700 duration-300"> <BsFillPersonPlusFill/> Create Contact</button>
            </div>
          </div>
        </div>
      );
    }
  }
  
};

export default ContactTable;
