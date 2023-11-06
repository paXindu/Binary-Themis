import React from "react";

export default function ContactUs() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <h1>Contact Us</h1>
          <p>
            Thank you for your interest in Binary Themis. Please use the contact
            information below to get in touch with us.
          </p>
          <ul className="list-unstyled mt-5">
            <li>
              <i className="bi bi-geo-alt-fill me-3"></i>
              <span>
                123 Main Street
                <br />
                Suite 101
                <br />
                Anytown, USA 12345
              </span>
            </li>
            <li>
              <i className="bi bi-telephone-fill me-3"></i>
              <span>1-800-123-4567</span>
            </li>
            <li>
              <i className="bi bi-envelope-fill me-3"></i>
              <span>info@binarythemis.com</span>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone number
              </label>
              <input type="tel" className="form-control" id="phone" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
