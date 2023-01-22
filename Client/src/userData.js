import React, { useState } from "react";
import "./userData.css";
function Form() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    likes: "",
    date: "",
    image: null,
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };
  const handleChange1 = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      image: event.target.files[0],
    }));
  };
  console.log(formData.image);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("location", formData.location);
    data.append("description", formData.description);
    data.append("likes", formData.likes);
    data.append("date", formData.date);
    data.append("image", formData.image);

    try {
      const response = await fetch("http://localhost:8081/userData", {
        method: "POST",
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        body: data,
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      // handle success here
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <label>
        Name:
        <input
          type='text'
          name='name'
          onChange={handleChange}
          value={formData.name}
        />
      </label>
      <br />
      <label>
        Location:
        <input
          type='text'
          name='location'
          onChange={handleChange}
          value={formData.location}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name='description'
          onChange={handleChange}
          value={formData.description}
        />
      </label>
      <br />
      <label>
        Likes:
        <input
          type='number'
          name='likes'
          onChange={handleChange}
          value={formData.likes}
        />
      </label>
      <br />
      <label>
        Date:
        <input
          type='date'
          name='date'
          onChange={handleChange}
          value={formData.date}
        />
      </label>
      <br />
      <label>
        Image:
        <input type='file' name='image' onChange={handleChange1} />
      </label>
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default Form;
