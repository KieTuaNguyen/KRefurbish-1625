import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { id } = useParams('');
  console.log(id);

  const [getUserData, setUserData] = useState([]);
  console.log(getUserData);

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
      setUserData(data)
      console.log("Getting data successful")
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <React.Fragment>
      <div className="container">
        <div className="containerUnique">
          <h1 className="text-center">Survey Information</h1>

          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <div className="row">
                <div className="mb-3 col-lg-6 col-md-6 col-12">
                  <label className="form-label">Question 01: How often do you dispose of electronic devices such as smartphones, laptops, or tablets?</label>
                  <input
                    type="text"
                    name="question01"
                    className="form-control"
                    value={getUserData.question01}
                    disabled
                    id="" />
                </div>
                <div className="mb-3 col-lg-6 col-md-6 col-12">
                  <label className="form-label">Question 02: Have you ever recycled or disposed of e-waste through designated e-waste recycling programs?</label>
                  <input
                    type="text"
                    name="question02"
                    className="form-control"
                    value={getUserData.question02}
                    disabled
                    id="" />
                </div>
                <div className="mb-3 col-lg-6 col-md-6 col-12">
                  <label className="form-label">Question 03: What factors influence your decision to recycle or dispose of e-waste properly?</label>
                  <input
                    type="text"
                    name="question03"
                    className="form-control"
                    value={getUserData.question03}
                    disabled
                    id="" />
                </div>
                <div className="mb-3 col-lg-6 col-md-6 col-12">
                  <label className="form-label">Question 04: Would you be willing to pay a small fee or contribute to a fund to support proper e-waste disposal and recycling initiatives?</label>
                  <input
                    type="text"
                    name="question04"
                    className="form-control"
                    value={getUserData.question04}
                    disabled
                    id="" />
                </div>
                <div className="mb-3 col-lg-6 col-md-6 col-12">
                  <label className="form-label">Question 05: How much would you be willing to pay to a fund to support proper e-waste disposal and recycling initiatives? ($)</label>
                  <input
                    type="number"
                    name="question05"
                    className="form-control"
                    value={getUserData.question05}
                    disabled
                    id="" />
                </div>
                <div className="mb-3 col-lg-6 col-md-6 col-12">
                  <label className="form-label">Question 06: Do you believe that awareness campaigns about e-waste recycling can effectively change people's behaviors and encourage proper disposal practices?</label>
                  <input
                    type="text"
                    name="question06"
                    className="form-control"
                    value={getUserData.question06}
                    disabled
                    id="" />
                </div>
                <div className="mb-3 col-lg-12 col-md-12 col-12">
                  <label className="form-label">Feedback</label>
                  <textarea
                    name="feedback"
                    className="form-control"
                    value={getUserData.feedback}
                    cols="30"
                    rows="10"
                    disabled
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Detail