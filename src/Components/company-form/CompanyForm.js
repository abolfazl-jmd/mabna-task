import { useState } from "react";
import Input from "../input-field/Input";
import styles from "./CompanyForm.module.css";

const CompanyForm = () => {
  const [company, setCompany] = useState({
    companyName: "",
    companyID: "",
    registrationNumber: "",
    phoneNumber: "",
    faxNumber: "",
    website: "",
    address: "",
    managerName: "",
    agentName: "",
    agentNumber: "",
  });

  const inputChangeHandler = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  return (
    <form className={`${styles.company__form}`}>
      <Input
        type="text"
        name="companyName"
        placeholder="نام شرکت"
        changeHandler={inputChangeHandler}
        value={company.companyName}
      />
      <Input
        type="text"
        name="companyID"
        value={company.companyID}
        placeholder="شناسه ملی شرکت"
        changeHandler={inputChangeHandler}
      />
      <Input
        type="text"
        name="registrationNumber"
        value={company.registrationNumber}
        placeholder="شماره ثبت شرکت"
        changeHandler={inputChangeHandler}
      />
      <Input
        type="number"
        name="phoneNumber"
        value={company.phoneNumber}
        placeholder="شماره تماس"
        changeHandler={inputChangeHandler}
      />
      <Input
        type="number"
        name="faxNumber"
        value={company.faxNumber}
        placeholder="شماره فکس"
        changeHandler={inputChangeHandler}
      />
      <Input
        type="text"
        name="website"
        value={company.website}
        placeholder="نشانی اینترنت"
        changeHandler={inputChangeHandler}
      />
      <Input
        type="text"
        name="address"
        value={company.address}
        placeholder="آدرس"
        changeHandler={inputChangeHandler}
      />
      <Input
        type="text"
        name="managerName"
        value={company.managerName}
        placeholder="نام و نام خانوادگی مدیر عامل"
        changeHandler={inputChangeHandler}
      />
      <Input
        type="text"
        name="agentName"
        value={company.agentName}
        placeholder="نام و نام خانوادگی نماینده"
        changeHandler={inputChangeHandler}
      />
      <Input
        type="number"
        name="agentNumber"
        value={company.agentNumber}
        placeholder="شماره تماس نماینده"
        changeHandler={inputChangeHandler}
      />
    </form>
  );
};

export default CompanyForm;
