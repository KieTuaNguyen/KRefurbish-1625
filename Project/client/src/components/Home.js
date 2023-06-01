import React, { useState, useEffect } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { NavLink, useNavigate } from 'react-router-dom'
import SlideShow from './SlideShow';
import { exportToExcel } from './utils';

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
                <th scope="col">Question 05</th>
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
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => deleteData(element._id)}
                          >
                            <DeleteForeverIcon />
                          </button>
                        </td>
                      </tr>
                    </>
                  )
                })
              }
            </tbody>
          </table>

        </div>
      </div >
    </>
  )
}

export default Home