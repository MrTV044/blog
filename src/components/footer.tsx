"use client";

import { useState } from "react";
import "./footer.css";

export default function Contact_me() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function Delete(e: React.FormEvent) {
    e.preventDefault();
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <>
      <div className="contact-me" id="contact-me-id">
        <div>
          <h1 className="text-3xl text-green-600 pb-2">Lets Connect!</h1>
          <p>
            Say hello at <a href="">arifincahyadisantoso@gmail.com</a>
          </p>
        </div>
        <div>
          <form action="" onSubmit={Delete}>
            <label>
              <p>Name</p>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded"
                type="text"
                required
              />
              <p className="mt-3">Email</p>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded"
                type="email"
                required
              />
              <p className="mt-3">
                {" "}
                <label htmlFor="subject">Subject</label>
              </p>
            </label>
            <label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="rounded subject"
                type="text"
                required
              />
              <p className="mt-3">Message</p>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="rounded w-150 l-150"
                name=""
                id=""
                required
              ></textarea>
            </label>
            <br />
            <button className="border-solid border w-20 h-8 border-white rounded-full mt-5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
