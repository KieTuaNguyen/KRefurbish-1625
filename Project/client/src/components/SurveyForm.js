import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SurveyForm = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    fullname: '',
    email: '',
    question01: '',
    question02: '',
    question03: '',
    question04: '',
    question05: '',
    question06: '',
    feedback: ''
  })

  const setData = (e) => {
    console.log(e.target.value)
    const { name, value } = e.target
    setInputValue((preVal) => {
      return {
        ...preVal,
        [name]: value
      }
    })
  }

  const addData = async (e) => {
    e.preventDefault()
    const {
      fullname,
      email,
      question01,
      question02,
      question03,
      question04,
      question05,
      question06,
      feedback }
      = inputValue

    const res = await fetch("/survey", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fullname,
        email,
        question01,
        question02,
        question03,
        question04,
        question05,
        question06,
        feedback
      })
    })

    const data = await res.json()

    if (res.status === 422 || !data) {
      window.alert("Invalid submission")
      console.log("Invalid submission")
    }

    else {
      window.alert("Submission successful")
      console.log("Submission successful")
      navigate('/')
    }

  }

  return (
    <div className="container">
      <h1 className="text-center">Survey Form</h1>
      <form className="mt-4">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="fullname"
              className="form-control"
              onChange={setData}
              value={inputValue.fullname}
              id="" />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">Email Address</label>
            <input
              type="text"
              name="email"
              className="form-control"
              onChange={setData}
              value={inputValue.email}
              id="" />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">Q1: How often do you dispose of electronic devices such as smartphones, laptops, or tablets?</label>
            <input
              type="text"
              name="question01"
              className="form-control"
              onChange={setData}
              value={inputValue.question01}
              id="" />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">Q2: Have you ever recycled or disposed of e-waste through designated e-waste recycling programs?</label>
            <input
              type="text"
              name="question02"
              className="form-control"
              onChange={setData}
              value={inputValue.question02}
              id="" />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">Q3: What factors influence your decision to recycle or dispose of e-waste properly?</label>
            <input
              type="text"
              name="question03"
              className="form-control"
              onChange={setData}
              value={inputValue.question03}
              id="" />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">Q4: Would you be willing to pay a small fee or contribute to a fund to support proper e-waste disposal and recycling initiatives?</label>
            <input
              type="text"
              name="question04"
              className="form-control"
              onChange={setData}
              value={inputValue.question04}
              id="" />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">Q5: How much would you be willing to pay to a fund to support proper e-waste disposal and recycling initiatives?</label>
            <input
              type="text"
              name="question05"
              className="form-control"
              onChange={setData}
              value={inputValue.question05}
              id="" />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">Q6: Do you believe that awareness campaigns about e-waste recycling can effectively change people's behaviors and encourage proper disposal practices?</label>
            <input
              type="text"
              name="question06"
              className="form-control"
              onChange={setData}
              value={inputValue.question06}
              id="" />
          </div>
          <div className="mb-3 col-lg-12 col-md-12 col-12">
            <label className="form-label">Feedback</label>
            <textarea
              name="feedback"
              className="form-control"
              onChange={setData}
              value={inputValue.feedback}
              cols="30"
              rows="5" />
          </div>
          <div className="mt-2 mb-2">Thank you for your feedback!
          </div>
          <div className="mt-2 mb-2">
            We'll never share your personal information with anyone else.
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={addData}>
              Submit
            </button>
          </div>
        </div>
      </form>
      <br />
    </div>
  )
}

export default SurveyForm