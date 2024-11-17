import { useState } from "react";

const useForm = (initialState, validate, functionHandler) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      await  functionHandler(values);
    }
  };

  const handleReset = () => {
    setValues(initialState);
  };
  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleReset,
  };
};

export default useForm;