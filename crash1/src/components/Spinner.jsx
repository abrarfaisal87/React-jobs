import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display:"block",
    margin:"100px auto",
    color:'#4338ca'
};
const Spinner = ({loading}) => {
  return (
    <ClipLoader
    loading = {loading}
    cssOverride={override}
    size={150}
    />
  )
}

export default Spinner