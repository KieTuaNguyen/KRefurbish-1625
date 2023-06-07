import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Update = () => {
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

  const navigate = useNavigate();

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

  const { id } = useParams('');
  console.log(id);

  const getData = async () => {
    const res = await fetch(`/getUser/${id}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = await res.json()
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("Error")
    }

    else {
      setInputValue(data)
      console.log("Getting data successful")
    }
  }

  useEffect(() => {
    getData();
  }, [])

  const updateUser = async (e) => {
    e.preventDefault();

    const res2 = await fetch(`/update/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fullname: inputValue.fullname,
        email: inputValue.email,
        question01: inputValue.question01,
        question02: inputValue.question02,
        question03: inputValue.question03,
        question04: inputValue.question04,
        question05: inputValue.question05,
        question06: inputValue.question06,
        feedback: inputValue.feedback
      })
    })

    const data2 = await res2.json()
    console.log(data2);

    if (res2.status === 422 || !data2) {
      console.log("Updating data failed")
      window.alert("Updating data failed")
    }

    else {
      setInputValue(data2)
      console.log("Updating data successful")
      window.alert("Updating data successful")
      navigate('/')
    }
  }


  return (
    <div className="container">
      <h1 className="text-center">Update Survey Form</h1>
      <form className="mt-4">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">Question 01: How often do you dispose of electronic devices such as smartphones, laptops, or tablets?</label>
            <input
              type="text"
              name="question01"
              className="form-control"
              onChange={setData}
              value={inputValue.question01}
              id="" />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">Question 02: Have you ever recycled or disposed of e-waste through designated e-waste recycling programs?</label>
            <input
              type="text"
              name="question02"
              className="form-control"
              onChange={setData}
              value={inputValue.question02}
              id="" />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">Question 03: What factors influence your decision to recycle or dispose of e-waste properly?</label>
            <input
              type="text"
              name="question03"
              className="form-control"
              onChange={setData}
              value={inputValue.question03}
              id="" />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">Question 04: Would you be willing to pay a small fee or contribute to a fund to support proper e-waste disposal and recycling initiatives?</label>
            <input
              type="text"
              name="question04"
              className="form-control"
              onChange={setData}
              value={inputValue.question04}
              id="" />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">Question 05: How much would you be willing to pay to a fund to support proper e-waste disposal and recycling initiatives? ($)</label>
            <input
              type="number"
              name="question05"
              className="form-control"
              onChange={setData}
              value={inputValue.question05}
              id="" />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">Question 06: Do you believe that awareness campaigns about e-waste recycling can effectively change people's behaviors and encourage proper disposal practices?</label>
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
              rows="10" />
          </div>
          <div className="mt-2 mb-2">
            To prevent the leakage of personal information, details regarding the full name and email have been concealed or hidden.</div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={updateUser}
          >
            Update
          </button>
        </div>
      </form>
      <br />
    </div>
  )
}

export default Update