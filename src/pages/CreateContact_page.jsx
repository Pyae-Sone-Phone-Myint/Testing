import React from "react";
import CreateContactForm from "../components/contacts/CreateContactForm";
import {  useNavigate } from "react-router-dom";
import { TbArrowBackUp} from 'react-icons/tb'

const CreateContact_page = () => {
  const nav= useNavigate();
  const back= ()=>{
    nav(-1)
  }
  return (
    <div className="w-[50vw] mx-auto  relative">
      <button onClick={()=>back()}><TbArrowBackUp className=" text-xl absolute top-[5%] left-[-15%]"/></button>
      <h1 className=" text-color font-semibold text-xl mb-5">Enter Contact Details</h1>
      <CreateContactForm />
    </div>
  );
};

export default CreateContact_page;
