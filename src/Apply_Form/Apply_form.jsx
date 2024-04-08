import React from 'react';
import "./Apply-form.css";

const Apply_form = () => {
  return (
    <div>
      <main>
  {/* Hero Start*/}
  <div className="hero-area2  slider-height2 hero-overly2 d-flex align-items-center mb-0">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="hero-cap text-center pt-50">
            <h2>Apply Form</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*Hero End */}
  {/* Apply Area Start */}
  <div className="container">
    <div className="row d-flex justify-content-center">
      <div className="col-sm-12 col-md-10 col-lg-10 form-bg">
      <div className='p-5'>
        <div>
            <form
            method="post"
            className="comment-form contact__form ">
            <div
                className="alert alert-success contact__msg"
                style={{ display: "none" }}
                role="alert"
            >
                Your message was sent successfully.
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <p className="comment-form-subject">
                      <label htmlFor="First Name">
                      <i className="fa fa-pencil-alt" />
                      <span> First Name</span>
                      </label>
                      <input
                      placeholder="Type Your First Name"
                      className="form-control bg-white"
                      id="first-name"
                      name="first-name"
                      type="text"
                      defaultValue=""
                      required=""
                      />
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <p className="comment-form-subject">
                      <label htmlFor="Last Name">
                      <i className="fa fa-pencil-alt" />
                      <span> Last Name</span>
                      </label>
                      <input
                      placeholder="Type Your Last Name"
                      className="form-control bg-white"
                      id="last-name"
                      name="last-name"
                      type="text"
                      defaultValue=""
                      required=""
                      />
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                <p className="comment-form-subject">
                    <label htmlFor="subject">
                    <i className="fa fa-pencil-alt" />
                    <span> Email</span>
                    </label>
                    <input 
                    placeholder="Type Your Email"
                    className="form-control bg-white"
                    id="email"
                    name="email"
                    type="email"
                    defaultValue=""
                    required=""
                    />
                </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <p className="comment-form-subject">
                      <label htmlFor="subject">
                      <i className="fa fa-pencil-alt" />
                      <span> Phone Number</span>
                      </label>
                      <input
                      placeholder="Phone Number"
                      className="form-control bg-white"
                      id="phone"
                      name="phone"
                      type="number"
                      defaultValue=""
                      required=""
                      />
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <p  className="comment-form-subject">
                  <label htmlFor="subject">
                      <i className="fa fa-pencil-alt" />
                      <span> Select Your Loan Type</span>
                      </label>
                    <select class="form-control bg-white" aria-label="Default select example">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <p className="comment-form-subject">
                      <label htmlFor="subject">
                      <i className="fa fa-pencil-alt" />
                      <span> Company Name</span>
                      </label>
                      <input
                      placeholder="Company Name"
                      className="form-control bg-white"
                      id="Company Name"
                      name="Company Name"
                      type="text"
                      defaultValue=""
                      required=""
                      />
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <p  className="comment-form-subject">
                  <label htmlFor="subject">
                      <i className="fa fa-pencil-alt" />
                      <span> Select Your Company Type</span>
                      </label>
                    <select class="form-control bg-white" aria-label="Default select example">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <p className="comment-form-subject">
                      <label htmlFor="Pincode">
                      <i className="fa fa-pencil-alt" />
                      <span> Pincode</span>
                      </label>
                      <input
                      placeholder="Pincode"
                      className="form-control bg-white"
                      id="pincode"
                      name="pincode"
                      type="text"
                      defaultValue=""
                      required=""
                      />
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <p className="comment-form-subject">
                      <label htmlFor="State">
                      <i className="fa fa-pencil-alt" />
                      <span> State</span>
                      </label>
                      <input
                      placeholder="State"
                      className="form-control bg-white"
                      id="state"
                      name="state"
                      type="text"
                      defaultValue=""
                      required=""
                      />
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <p className="comment-form-subject">
                      <label htmlFor="City">
                      <i className="fa fa-pencil-alt" />
                      <span> City</span>
                      </label>
                      <input
                      placeholder="City"
                      className="form-control bg-white"
                      id="city"
                      name="city"
                      type="text"
                      defaultValue=""
                      required=""
                      />
                  </p>
                </div>
            </div>
            <p className="form-submit">
                <button type="submit" className="submit btn btn-primary">
                    Send Message
                </button>
            </p>
            </form>
        </div>
    </div>
      </div>
    </div>
  </div>
  {/* Apply Area End */}
</main>

    </div>
  )
}

export default Apply_form
