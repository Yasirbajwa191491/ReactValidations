import React from 'react'
import {useFormik} from "formik"
import schema from './components/Yup'
import InputMask from "react-input-mask";
 const App = () => {
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
  return (
    <>
      <div className="container stories-div" style={{margin: "auto"}}>
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
export default App;
