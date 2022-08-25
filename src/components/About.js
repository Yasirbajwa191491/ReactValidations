import React, { useEffect, useState } from "react";

const About = () => {
  const [user, setUser] = useState([]);
  const showData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      console.log(data);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };
  const clickHandler = async (event) => {
    
  };
  const deleteHandler=async(id)=>{
    
  }
  useEffect(() => {
    showData();
   
  }, []);
  

  return (
    <>
      <div
        className="container-fluid top-0"
        style={{ backgroundColor: (localStorage.getItem("theme")==="theme-dark")? "#15133c" :"#fff" }}
      >
        <div
          className="container bg-white"
          style={{
            boxShadow: "0 5px 20px rgba(0,0,0,0.5)",
            borderRadius: "10px",
          }}
        >
          <h1 className="my-5 text-center text-danger">Products</h1>
          <input
            type="text"
            placeholder="Search an item"
            className="px-2 w-25"
            style={{ margin: "20px 0px 5px 100px" }}
            onChange={clickHandler}
          />
          <br />
          <button
            className="btn btn-primary"
            style={{ margin: "10px 0px 15px 140px" }}
            
          >
            Add New
          </button>
          <div className="data-table">
            <ul>
              <li style={{ padding: "0px 0px 0px 60px", fontWeight: "bold" }}>
                UserID
              </li>
              <li style={{ padding: "0px 0px 0px 170px", fontWeight: "bold" }}>
                Title
              </li>
              <li style={{ padding: "0px 0px 0px 160px", fontWeight: "bold" }}>
                Body
              </li>
              
              <li style={{ padding: "0px 0px 0px 60px", fontWeight: "bold" }}>
                Actions
              </li>
              <hr />
              {user.length > 0 ? (
                user.map((curEle) => {
                  return (
                    <>
                      <li>{curEle.userId}</li>
                      <li>{curEle.title}</li>
                      <li>{curEle.body}</li>
                      
                      <button className="btn btn-dark" onClick={()=>deleteHandler(curEle._id)}>Delete</button>
                      {/* <button className="btn btn-danger" onClick={()=>navigate("/updateproduct/"+curEle._id)}>Edit</button> */}
                      <hr />
                    </>
                  );
                })
              ) : (
                <h1>No data found</h1>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;