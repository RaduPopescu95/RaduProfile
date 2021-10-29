import React, { useState,useEffect } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import "./contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Contacts = () => {

useEffect(() => {
    Aos.init();
    
  }, [])


  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, formState: { errors }} = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_AFM5cdJFbJQz9Vv8tTvEB";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description
      },
      userID
    )
    r.target.reset();
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
      }).catch(err => console.error(`Something went wrong ${err}`));
  }

  return (
    <div id="contactu" className="contacts">
      <div className="text-center
      ">
        <h1>contact me</h1>
        <p>Please fill out the form and describe you project needs and I'll contact you as soon as possible.</p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form className="formular" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
               <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              <div  className="inputs-div text-center
              ">
                <input
                  type="text"
                  className="inputul form-control"
                  placeholder="Name"
                  name="name"
                  {...register("name",{
                      required: "Please enter your name",
                      maxLength: {
                        value: 20,
                        message: "Please enter a name with fewer than 20 characters"
                      }
                    })
                  }
                />
                {/* <div className="line"></div> */}
              </div>
             
              {/* PHONE INPUT */}
              <span className="error-message">
                {errors.phone && errors.phone.message}
              </span>
              <div  className="inputs-div text-center
              ">
                <input
                  type="text"
                  className="inputul form-control"
                  placeholder="Phone Number"
                  name="phone"
                  {...register("phone",{
                      required: "Please add your phone number",
                    })
                  }
                />
                {/* <div className="line"></div> */}
              </div>
              
              {/* EMAIL INPUT */}
               <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              <div  className="inputs-div text-center
              ">
                <input
                  type="email"
                  className="inputul form-control"
                  placeholder="Email"
                  name="email"
                  {...register("email",{
                      required: "Please provide you email",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid Email"
                      }
                    })
                  }
                />
                {/* <div className="line"></div> */}
              </div>
             
              {/* SUBJECT INPUT */}
               <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
              <div  className="inputs-div text-center
              ">
                <input
                  type="text"
                  className="inputul form-control"
                  placeholder="Subject"
                  name="subject"
                  {...register("subject",{
                      required: "OOPS, you forget to add the subject.",
                    })
                  }
                />
                {/* <div className="line"></div> */}
              </div>
             
            </div>
            <div className="col-md-6 col-xs-12">
              {/* DESCRIPTION */}
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>
              <div  className="inputs-div text-center
              ">
                <textarea
                  type="text"
                  className="descriptor form-control"
                  placeholder="Please describe shortly you project..."
                  name="description"
                  {...register("description",{
                      required: "Please describe shortly your project needs...",
                    })
                  }
                ></textarea>
                {/* <div className="line"></div> */}
              </div>
              <div  className="btn-div">
              <button className="btn-main-offer contact-btn" type="submit">contact me</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts;
