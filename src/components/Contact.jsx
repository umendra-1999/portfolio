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
    <>
      <div className="bg-black h-150">
        <div className="border-4 w-140 h-130 top-12 relative left-16 bg-black text-amber-50 rounded-2xl">
          <h1 className="text-3xl relative left-14 top-10">Contact Me</h1>
          <h1 className="text-6xl relative left-14 top-12">
            Reach out for Opportunities
          </h1>
          <h1 className="font-medium relative left-14 top-16">
            Let’s Connect to discuss about Jobs and <br /> internship opportunities.
          </h1>
        </div>

        <div className="relative left-220 bottom-118 font-bold rounded-2xl w-140">
          <form onSubmit={handleSubmit}>
            <div className="grid place-items-center text-amber-50 bg-black border-4 w-140 rounded-2xl h-130 p-6 gap-4">

              {/* First Name */}
              <div className="flex flex-col">
                <label>First Name:</label>
                <input
                  value={formData.firstName}
                  onChange={handleChange}
                  name="firstName"
                  className="border-2 w-60 p-1 text-amber-50 rounded"
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
                  className="border-2 w-60 p-1 text-amber-50 rounded"
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
                  className="border-2 w-60 p-1 text-amber-50 rounded"
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
                  className="border-2 w-60 p-1 text-amber-50 rounded"
                ></textarea>
                {errors.message && (
                  <span className="text-red-400 text-sm">{errors.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="border-2 w-20 rounded-2xl bg-amber-50 text-black mt-2 hover:bg-amber-200 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
