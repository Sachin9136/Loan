import React from 'react'

const Apply_form = () => {
  return (
    <div>
      <main>
  {/* Hero Start*/}
  <div className="hero-area2  slider-height2 hero-overly2 d-flex align-items-center ">
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
  <div className="apply-area pt-150 pb-150">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="apply-wrapper">
            {/* Form */}
            <form action="#">
              <div className="row">
                <div className="col-lg-6">
                  <div className="single-form">
                    <label>* LOAN AMOUNT ($) </label>
                    <input type="text" name="" placeholder="Enter name" />
                  </div>
                </div>
                {/* Nice Select */}
                <div className="col-lg-6">
                  <div className="single-form">
                    <label>* PURPOSE OF LOAN </label>
                    <div className="select-option mb-10">
                      <select name="select" id="select1">
                        <option value="">Choose Categories</option>
                        <option value="">Category 1</option>
                        <option value="">Category 2</option>
                        <option value="">Category 3</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* Radio */}
                <div className="col-lg-12">
                  <div className="single-form  d-flex">
                    <label>* Select Gender :</label>
                    {/*Radio Select */}
                    <div className="select-radio6">
                      <div className="radio">
                        <input id="radio-1" name="radio" type="radio" />
                        <label htmlFor="radio-1" className="radio-label">
                          Male
                        </label>
                      </div>
                      <div className="radio">
                        <input id="radio-2" name="radio" type="radio" />
                        <label htmlFor="radio-2" className="radio-label">
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* First Name */}
                <div className="col-lg-6">
                  <div className="single-form">
                    <label>* FIRST NAME</label>
                    <input type="text" name="" placeholder="Enter name" />
                  </div>
                </div>
                {/* Last Name */}
                <div className="col-lg-6">
                  <div className="single-form">
                    <label>* Last NAME</label>
                    <input type="text" name="" placeholder="Enter name" />
                  </div>
                </div>
                {/* Nice Select */}
                {/* Nice Select */}
                <div className="col-lg-12">
                  <div className="single-form">
                    <label>* NUMBER OF DEPENDANTS</label>
                    <div className="select-option mb-10">
                      <select name="select" id="select1">
                        <option value="">Choose Option</option>
                        <option value="">Category 1</option>
                        <option value="">Category 2</option>
                        <option value="">Category 3</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* First Name */}
                <div className="col-lg-6">
                  <div className="single-form">
                    <label>* Email Adderess</label>
                    <input type="email" name="" placeholder="Enter email" />
                  </div>
                </div>
                {/* Last Name */}
                <div className="col-lg-6">
                  <div className="single-form">
                    <label>* Phone Number</label>
                    <input type="text" name="" placeholder="Enter Number" />
                  </div>
                </div>
                {/* Nice Select */}
                <div className="col-lg-12">
                  <div className="single-form">
                    <label>* MARITAL STATUS</label>
                    <div className="select-option mb-10">
                      <select name="select" id="select1">
                        <option value="">Choose Categories</option>
                        <option value="">Category 1</option>
                        <option value="">Category 2</option>
                        <option value="">Category 3</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* First Name */}
                <div className="col-lg-6">
                  <div className="single-form">
                    <label>* FIRST NAME</label>
                    <input type="text" name="" placeholder="Enter name" />
                  </div>
                </div>
                {/* TOWN/CITY*/}
                <div className="col-lg-6">
                  <div className="single-form">
                    <label>* TOWN/CITY</label>
                    <input type="text" name="" placeholder="Enter city" />
                  </div>
                </div>
                {/* Street Address */}
                <div className="col-lg-6">
                  <div className="single-form">
                    <label>* STREET</label>
                    <input
                      type="text"
                      name=""
                      placeholder="Enter Street Address"
                    />
                  </div>
                </div>
                {/* HOUSE NAME/NUMBER */}
                <div className="col-lg-6">
                  <div className="single-form">
                    <label>* HOUSE NAME/NUMBER</label>
                    <input type="text" name="" placeholder="Enter House Name" />
                  </div>
                </div>
                {/* Nice Select */}
                <div className="col-lg-12">
                  <div className="single-form">
                    <label>* HOMEOWNER STATUS </label>
                    <div className="select-option mb-10">
                      <select name="select" id="select1">
                        <option value="">Enter Houseowner ststus</option>
                        <option value="">Category 1</option>
                        <option value="">Category 2</option>
                        <option value="">Category 3</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/*  EMPLOYMENT INDUSTRY */}
                <div className="col-lg-6">
                  <div className="single-form">
                    <label>* EMPLOYMENT INDUSTRY</label>
                    <input type="text" name="" placeholder="Enter INDUSTRY" />
                  </div>
                </div>
                {/* Last Name */}
                <div className="col-lg-6">
                  <div className="single-form">
                    <label>* EMPLOYER NAME</label>
                    <input type="text" name="" placeholder="Enter name" />
                  </div>
                </div>
                {/*PHONE NUMBER */}
                <div className="col-lg-6">
                  <div className="single-form">
                    <label>* WORK PHONE NUMBER</label>
                    <input type="text" name="" placeholder="Phone Number" />
                  </div>
                </div>
                {/*  MONTHLY INCOME */}
                <div className="col-lg-6">
                  <div className="single-form">
                    <label>* MONTHLY INCOME ($)</label>
                    <input type="text" name="" placeholder="Enter name" />
                  </div>
                </div>
              </div>
            </form>
            {/* End From */}
            {/* Form btn */}
            <a href="#" className="btn apply-btn mt-30">
              APPLY NOW{" "}
            </a>
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
