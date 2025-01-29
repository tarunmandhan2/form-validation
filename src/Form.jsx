import { useEffect, useState } from "react";

const Form = () => {
  const [currValue, setCurrValue] = useState({});
  const [errors, setErrors] = useState({});
  // console.log(currValue, "👍🏻👍🏻");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted -- 👍🏻 ", currValue);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCurrValue({ ...currValue, [name]: value });
    const validated = validate({ ...currValue, [name]: value });
    setErrors(validated);
  };

  const validate = (val) => {
    const error = {};
    if (!val.uname) {
      error.uname = "Username is invalid";
    } else if (val?.email?.length && !/\S{3}\@gmail.\S{2}/.test(val.email)) {
      error.email = "Email is invalid";
    }
    return error;
  };
  return (
    <>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="uname">User Name: </label>
        <input type="text" name="uname" id="uname" onChange={handleChange} />
        {errors.uname && <span>{errors.uname}</span>}
        <br />
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" id="email" onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
        <br />
        <input type="submit" name="submit" id="submit" />
      </form>
    </>
  );
};

export default Form;
