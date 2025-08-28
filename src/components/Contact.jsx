import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // validation
  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully ✅");
      console.log("Form Data:", formData);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-4 py-10">
      {/* Header Section */}
      <div className="border-4 max-w-3xl w-full text-center md:text-left 
                      bg-black text-amber-50 rounded-2xl p-6 md:p-10 mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold">Contact Me</h1>
        <h2 className="text-4xl md:text-6xl font-bold mt-4">
          Reach out for Opportunities
        </h2>
        <p className="text-md md:text-lg font-medium mt-6">
          Let’s Connect to discuss about Jobs and <br className="hidden md:block" />
          Internship opportunities.
        </p>
      </div>

      {/* Form Section */}
      <div className="border-4 max-w-2xl w-full bg-black text-amber-50 rounded-2xl p-6">
        <form onSubmit={handleSubmit} className="grid gap-4">
          {/* First Name */}
          <div className="flex flex-col">
            <label>First Name:</label>
            <input
              value={formData.firstName}
              onChange={handleChange}
              name="firstName"
              className="border-2 w-full md:w-80 p-2 text-amber-50 rounded bg-transparent"
              type="text"
            />
            {errors.firstName && (
              <span className="text-red-400 text-sm">{errors.firstName}</span>
            )}
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label>Last Name:</label>
            <input
              value={formData.lastName}
              onChange={handleChange}
              name="lastName"
              className="border-2 w-full md:w-80 p-2 text-amber-50 rounded bg-transparent"
              type="text"
            />
            {errors.lastName && (
              <span className="text-red-400 text-sm">{errors.lastName}</span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label>Email:</label>
            <input
              value={formData.email}
              onChange={handleChange}
              name="email"
              className="border-2 w-full md:w-80 p-2 text-amber-50 rounded bg-transparent"
              type="text"
            />
            {errors.email && (
              <span className="text-red-400 text-sm">{errors.email}</span>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label>Message:</label>
            <textarea
              value={formData.message}
              onChange={handleChange}
              name="message"
              rows="4"
              className="border-2 w-full md:w-96 p-2 text-amber-50 rounded bg-transparent"
            />
            {errors.message && (
              <span className="text-red-400 text-sm">{errors.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="border-2 w-full md:w-32 py-2 rounded-2xl 
                       bg-amber-50 text-black mt-4 hover:bg-amber-200 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
