import React, { useState, useEffect } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { NavLink, useNavigate } from 'react-router-dom'
import SlideShow from './SlideShow';
import { exportToExcel } from './utils';
import YesNoPieChart from './YesNoPieChart';
import NumericBarChart from './NumericBarChart';

const Home = () => {
  const [getUserData, setUserData] = useState([]);
  const navigate = useNavigate();
  const getData = async (e) => {
    const res = await fetch("/getData", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = await res.json()
    console.log(data);

    if (res.status === 422 || !data) {
      window.alert("Error in getting data")
      console.log("Error in getting data")
    }

    else {
      console.log("Getting data successful")
      setUserData(data)
    }
  }

  useEffect(() => {
    getData();
  }, [])

  const deleteData = async (id) => {
    const res = await fetch(`/delete/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = await res.json()
    console.log(data);

    if (res.status === 422 || !data) {
      window.alert("Error in deleting data")
      console.log("Error in deleting data")
    }

    else {
      window.alert("Data deleted successfully")
      console.log("Data deleted successfully")
      getData();
      navigate('/')
    }
  }

  const downloadData = () => {
    exportToExcel(getUserData);
  };

  const countResponses = (questionNumber, response) => {
    return getUserData.reduce((count, element) => {
      if (element[`question0${questionNumber}`] === response) {
        return count + 1;
      }
      return count;
    }, 0);
  };

  const getAverageAmount = () => {
    const total = numericChartData.reduce((sum, data) => sum + data.value, 0);
    const average = total / numericChartData.length;
    return average;
  };

  const getMaxAmount = () => {
    const max = numericChartData.reduce((max, data) => {
      return data.value > max ? data.value : max;
    }, 0);
    return max;
  };

  const getMinAmount = () => {
    const min = numericChartData.reduce((min, data) => {
      return data.value < min ? data.value : min;
    }, numericChartData[0].value);
    return min;
  };

  // Prepare data for YesNoPieChart
  const yesCount02 = countResponses(2, 'Yes');
  const noCount02 = countResponses(2, 'No');

  const yesCount04 = countResponses(4, 'Yes');
  const noCount04 = countResponses(4, 'No');

  const yesCount06 = countResponses(6, 'Yes');
  const noCount06 = countResponses(6, 'No');

  // Prepare data for NumericBarChart
  const numericChartData = getUserData.map((element, index) => {
    return {
      index: `Survey${index + 1}`,
      value: Number(element.question05)
    };
  });

  return (
    <>
      <SlideShow />
      <div className="mt-5">
        <div className="container mt-3">
          <h1 className="text-center">Statistical Table</h1>
          <div className="add_btn mt-2 mb-2">
            <button className="btn btn-warning" onClick={downloadData}>
              Download all data
            </button>
          </div>

          <table className="table">
            <thead>
              <tr className="table-light">
                <th scope="col">ID</th>
                <th scope="col">Question 01</th>
                <th scope="col">Question 02</th>
                <th scope="col">Question 03</th>
                <th scope="col">Question 04</th>
                <th scope="col">Question 05 ($)</th>
                <th scope="col">Question 06</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {
                getUserData.map((element, index) => {
                  return (
                    <>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{element.question01}</td>
                        <td>{element.question02}</td>
                        <td>{element.question03}</td>
                        <td>{element.question04}</td>
                        <td>{element.question05}</td>
                        <td>{element.question06}</td>
                        <td className="d-flex justify-content-between">
                          <NavLink to={`/view/${element._id}`}>
                            <button className="btn btn-outline-success">
                              <RemoveRedEyeIcon />
                            </button>
                          </NavLink>
                          {/* Delete function */}
                          {/* <button
                            className="btn btn-outline-danger"
                            onClick={() => deleteData(element._id)}
                          >
                            <DeleteForeverIcon />
                          </button> */}
                        </td>
                      </tr>
                    </>
                  )
                })
              }
            </tbody>
          </table>

        </div>
        {/* Visualize data */}
        <div className="container mt-3">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Data Visualization</h1>
            </div>
            <div className="card-body">
              <div className="pieChart">
                {/* Count number of Yes-No in Question 02 from the table below */}
                <h5>
                  Question 02: Proportion of Individuals Who Have Recycled or Disposed of E-Waste through Designated E-Waste Recycling Programs
                  <br />
                </h5>
                {/* <p>Number of "Yes" responses: {yesCount02}</p>
                <p>Number of "No" responses: {noCount02}</p> */}
                <p>
                  The percentage of "Yes" responses: {Math.round(yesCount02 / (yesCount02 + noCount02) * 100)}%
                </p>
                <p>
                  The percentage of "No" responses: {Math.round(noCount02 / (yesCount02 + noCount02) * 100)}%
                </p>
                {/* Visualize data by pie chart */}
                <YesNoPieChart yesCount={yesCount02} noCount={noCount02} />
              </div>
              <hr />

              <div className="pieChart">
                {/* Count number of Yes-No in Question 04 from the table below */}
                <h5>
                  Question 04: Proportion of Individuals Willing to Pay or Contribute to E-Waste Disposal and Recycling Initiatives
                  <br />
                </h5>
                {/* <p>Number of "Yes" responses: {yesCount04}</p>
                <p>Number of "No" responses: {noCount04}</p> */}
                <p>
                  The percentage of "Yes" responses: {Math.round(yesCount04 / (yesCount04 + noCount04) * 100)}%
                </p>
                <p>
                  The percentage of "No" responses: {Math.round(noCount04 / (yesCount04 + noCount04) * 100)}%
                </p>
                {/* Visualize data by pie chart */}
                <YesNoPieChart yesCount={yesCount04} noCount={noCount04} />
              </div>
              <hr />

              <div className="barChart">
                {/* Visualize data by bar chart */}
                <h5>
                  Question 05: Willingness to Pay for Fund Supporting E-Waste Disposal and Recycling Initiatives
                  <br />
                </h5>
                <p>
                  The average amount of money willing to pay: ${Math.round(getAverageAmount())}
                </p>
                <p>
                  The maximum amount of money willing to pay: ${getMaxAmount()}
                </p>
                <p>
                  The minimum amount of money willing to pay: ${getMinAmount()}
                </p>
                <NumericBarChart data={numericChartData} />
              </div>
              <hr />

              <div className="pieChart">
                {/* Count number of Yes-No in Question 06 from the table below */}
                <h5>
                  Question 06: Perception of the Effectiveness of E-Waste Recycling Awareness Campaigns in Promoting Proper Disposal Practices
                  <br />
                </h5>
                {/* <p>Number of "Yes" responses: {yesCount06}</p>
                <p>Number of "No" responses: {noCount06}</p> */}
                <p>
                  The percentage of "Yes" responses: {Math.round(yesCount06 / (yesCount06 + noCount06) * 100)}%
                </p>
                <p>
                  The percentage of "No" responses: {Math.round(noCount06 / (yesCount06 + noCount06) * 100)}%
                </p>
                {/* Visualize data by pie chart */}
                <YesNoPieChart yesCount={yesCount06} noCount={noCount06} />
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Home