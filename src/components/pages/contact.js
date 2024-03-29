import React, { useState } from "react";

function Contact() {
    const formData = { userName: "", userEmail: "", userMessage: "" };

    // this sets two state variables for firstName and lastName using 'useState'
    const [data, setData] = useState(formData);
    const handleInputChange = (e) => {
        // this gets the value and name inputs that triggered the change 
        const { id, value } = e.target;

        setData({ ...data, [id]: value });
    };
    const handleFormSubmit = (e) => {
        // preventing the default behaviour so the page does not refresh and loose data given 
        e.preventDefault();

        // alert telling the user the message was succesful and thanking them by their name
        alert(`Message was successfully sent, thank you ${data.userName}`);
        setData(formData);
    };
    return (
    <div class="row">
      <h1 >Contact Page</h1>
      <p>
        I am always available for a chat if you have any questions or interest in working with me. You can contact me via email, LinkedIn, or for any immediate enquiries, using this contact form:
      </p>
      <form onSubmit={handleFormSubmit}>
                   <div className="form-group">
                       <label htmlFor="exampleFormControlInput1">Name</label>
                       <input
                            type="text"
                            className="form-control"
                            id="userName"
                            placeholder="Please enter your Name here"
                            value={data.userName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="userEmail"
                            placeholder="Please enter your Email address here"
                            value={data.userEmail}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Message</label>
                        <textarea
                            className="form-control"
                            id="userMessage"
                            placeholder="Please enter your Message here"
                            onChange={handleInputChange}
                            value={data.userMessage}
                        ></textarea>
                    </div>
                    <button style={{ background: '#b62075', border: 'none', 
                    margin: 'auto',
                    alignItems: 'center',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',}}
                    onMouseOver={e => e.currentTarget.style.opacity = 0.7}
                    onMouseOut={e => e.currentTarget.style.opacity = 1} type="submit" className="btn btn-primary mb-2">
                        Submit
                    </button>
                </form>
    </div>
  );
}

export default Contact;