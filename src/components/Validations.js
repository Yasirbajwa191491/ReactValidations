import React from 'react'
import {useFormik} from "formik"
import schema from './Yup'
import InputMask from "react-input-mask";
// import About from './components/About';
 const Validations = () => {
  
  const formik=useFormik({
    initialValues:{
      email:"",
      username:"",
      password:"",
      c_password:"",
      number:""
    },
    validationSchema: schema,
    onSubmit:(values,action)=>{
    console.log(values.c_password);
    action.resetForm();
    }
  })
  const {handleSubmit,handleChange,touched,errors,handleBlur}=formik;
  let clickedClass = "clicked"
  const body = document.getElementById("root")
  const lightTheme = "theme-white"
  const darkTheme = "theme-dark"
  let theme

  if (localStorage) {
    theme = localStorage.getItem("theme")
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme)
  } else {
    body.classList.add(lightTheme)
  }

  const switchTheme = e => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme)
      e.target.classList.remove(clickedClass)
      localStorage.setItem("theme", "theme-white")
      theme = lightTheme
    } else {
      body.classList.replace(lightTheme, darkTheme)
      e.target.classList.add(clickedClass)
      localStorage.setItem("theme", "theme-dark")
      theme = darkTheme
    }
  }
  return (
    <>
      <div className="container stories-div" style={{margin: "auto"}}>
     <button style={{float:"right"}} onClick={switchTheme}>Enable Dark Mode</button>


      <div className='card' style={{gridColumn:"auto"}}>
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} id="email" />
        {(touched.email && errors.email)&& <p>{errors.email}</p>}
      <label htmlFor="username">Username</label>
        <input type="text" name="username" onChange={handleChange} onBlur={handleBlur} id="username" />
        {(touched.username && errors.username)&& <p>{errors.username}</p>}
      <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} id="password" />
        {(touched.password && errors.password)&& <p>{errors.password}</p>}
      <label htmlFor="cpassword">Confirm Password</label>
        <input type="password" name="c_password" onChange={handleChange} onBlur={handleBlur} id="cpassword" />
        {(touched.c_password && errors.c_password)&& <p>{errors.c_password}</p>}
      <label htmlFor="number">Phone Number</label>
        <InputMask mask="9999-9999999" maskPlaceholder="-" name="number" onChange={handleChange} onBlur={handleBlur} id="number" />
        {(touched.number && errors.number)&& <p>{errors.number}</p>}
        <button>Submit</button>
        </form>
        </div>
      </div>
    </>
  )
}
export default Validations;
