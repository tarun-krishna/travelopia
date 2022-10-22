import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/user.css";
const UserDetails = () => {
  // UserDetails Component
  const [list, setList] = useState([]);
  useEffect(() => {
    //useEffect to perform side effects to the website
    axios({
      //  Axios to fetch the data from mangodb database
      url: "/users",
    })
      .then((res) => {
        // handling promise
        setList(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="main">
      <div className="user-container">
        {list.map((item, _id) => {
          // map method to iterate throuh the list array
          return (
            <div key={item._id} className="user-cell">
              <div>
                <div>
                  <label className="detail-label">Name: {item.name}</label>
                </div>
                <div>
                  <label className="detail-label">E-mail: {item.email}</label>
                </div>
                <div>
                  <label className="detail-label">Place: {item.country}</label>
                </div>
              </div>
              <div>
                <div>
                  <label className="detail-label">
                    Travellers: {item.travellers}
                  </label>
                </div>
                <div>
                  <label className="detail-label">Budget: {item.budget}$</label>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserDetails;
