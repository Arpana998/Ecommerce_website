import "./ContactUsPage.css";
import { useRef } from "react";

const ContactUsPage = () => {
  const nameRef = useRef("");
  const emailIdRef = useRef("");
  const phoneNumberRef = useRef("");
  let userInput;
  async function userInputHandler(event) {
    event.preventDefault();
    const response = await fetch(
      "https://ecommerce-website-8df52-default-rtdb.firebaseio.com/user.json",
      {
        method: "POST",
        body: JSON.stringify(
          (userInput = {
            name: nameRef.current.value,
            emailId: emailIdRef.current.value,
            phoneNumber: phoneNumberRef.current.value,
          })
        ),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    console.log(data);
  }

  return (
    <div className="inputform">
      <form onSubmit={userInputHandler}>
        <label htmlFor="title">NAME</label>
        <input type="text" id="ftitle" ref={nameRef} />

        <label htmlFor="openingtext">EMAIL_ID</label>
        <input type="text" id="fopeningtext" ref={emailIdRef} />

        <label htmlFor="releasedate">PHONE_NUMBER</label>
        <input type="text" id="freleasedate" ref={phoneNumberRef} />

        <span id="button">
          <button>SUBMIT</button>
        </span>
      </form>
    </div>
  );
};

export default ContactUsPage;
