import React from 'react'

const FormGroup = ({ value, onChange, label, placeholder }) => {
  return (
    <div className="form-group">
      <label htmlFor="{label}">{label}</label>
      <input
        value={value} onChange={onChange}
        type="{label}" id={label} name={label} placeholder={placeholder} />
    </div>
  )
}

export default FormGroup