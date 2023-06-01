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
                <div className="left_view col-lg-6 col-md-6 col-12">
                  <h5 className='mt-3'>
                    Q1: How often do you dispose of electronic devices such as smartphones, laptops, or tablets? &nbsp;
                    <br />
                    <span style={{ fontWeight: 400 }}>
                      {getUserData.question01}
                    </span>
                  </h5>
                  <h5 className='mt-3'>
                    Q2: Have you ever recycled or disposed of e-waste through designated e-waste recycling programs? &nbsp;
                    <br />
                    <span style={{ fontWeight: 400 }}>
                      {getUserData.question02}
                    </span>
                  </h5>
                  <h5 className='mt-3'>
                    Q3: What factors influence your decision to recycle or dispose of e-waste properly? &nbsp;
                    <br />
                    <span style={{ fontWeight: 400 }}>
                      {getUserData.question03}
                    </span>
                  </h5>
                </div>

                <div className="right_view col-lg-6 col-md-6 col-12">
                  <h5 className='mt-3'>
                    Q4: Would you be willing to pay a small fee or contribute to a fund to support proper e-waste disposal and recycling initiatives?
                    <br />
                    <span style={{ fontWeight: 400 }}>
                      {getUserData.question04}
                    </span>
                  </h5>
                  <h5 className='mt-3'>
                    Q5: How much would you be willing to pay to a fund to support proper e-waste disposal and recycling initiatives? &nbsp;
                    <br />
                    <span style={{ fontWeight: 400 }}>
                      {getUserData.question05}
                    </span>
                  </h5>
                  <h5 className='mt-3'>
                    Q6: Do you believe that awareness campaigns about e-waste recycling can effectively change people's behaviors and encourage proper disposal practices? &nbsp;
                    <br />
                    <span style={{ fontWeight: 400 }}>
                      {getUserData.question06}
                    </span>
                  </h5>
                </div>

                <div className="col-12">
                  <h5 className='mt-3'>
                    Feedback: &nbsp;
                    <span style={{ fontWeight: 400 }}>
                      {getUserData.feedback}
                    </span>
                  </h5>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Detail``