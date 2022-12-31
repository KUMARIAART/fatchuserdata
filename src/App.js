import './App.css';
import React, { useEffect, useState } from 'react'
function App() {
  const [FetchData, setData] = useState([]);
  useEffect(() => {
    const FetchData = async () => {
      let endpoint = await fetch('https://jsonplaceholder.typicode.com/users')
      endpoint = await endpoint.json()
      setData(endpoint)
    }
    FetchData()
  }, [])
  return (
    <>
      <h1>USER DETAILS</h1>
      <table>
        <tr>
          <th>NAME</th>
          <th>USER NAME</th>
          <th>EMAIL ID</th>
          <th>CITY NAME</th>
          <th>ZIP CODE</th>
          <th>PHONE NO</th>
          <th>COMPANY NAME</th>
        </tr>
        {
          FetchData.map((item) => {
            return (
              <tbody>
                <tr>
                  <td>
                    {item.name}
                  </td>
                  <td>
                    {item.username}
                  </td>
                  <td>
                    {item.email}
                  </td>
                  <td>
                    {item.address.city}
                  </td>
                  <td>
                    {item.address.zipcode}
                  </td>
                  <td>
                    {item.phone}
                  </td>
                  <td>
                    {item.company.name}
                  </td>
                </tr>
              </tbody>
            )
          })
        }
      </table>
    </>
  );
}
export default App;
