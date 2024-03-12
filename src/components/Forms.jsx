import React, { useState } from "react";

const Forms = () => {
  const [FormData, SetFormData] = useState({});
  const handleSubmit = () => {};
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="FirsrtName" name="firstname" />
          <input type="text" placeholder="LastName" />
        </div>
        <div>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Forms;
