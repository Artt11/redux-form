import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { form_full } from "../redux/actions/actions";

export const Form = () => {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const dispatch = useDispatch();
  const { errorMessage, successMessage } = useSelector(
    (state) => state.operationsReducer
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(form_full(value));
  };

  const handleInputChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-section">
      <form onSubmit={handleSubmit} className="forms">
        <input
          type="text"
          name="firstName"
          value={value.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={value.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
        />
        <input
          type="text"
          name="email"
          value={value.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        {errorMessage && <div className="error">{errorMessage}</div>}
        {successMessage && <div className="success">{successMessage}</div>}
        <button type="submit" className="submit">
          Register
        </button>
      </form>
    </div>
  );
};
