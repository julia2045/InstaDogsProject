import React from 'react'

const UseForm = (type) => {
    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState(null)


    function onChange({target}){
        setValue(target.value)
    }

    const types = {
     email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}(\.[0-9]{1,3}){3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Insira um email válido"
      },
      password: {
        regex:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        message:" mínimo 8 caracteres,pelo menos uma letra minúscula,pelo menos uma letra maiúscula,pelo menos um número."

      },
      number: {
        regex: /`\d+$/,
        message: 'utilize apenas números'
      }


    }

    function validate(value){
      if(type === false) return true
      if(value.length === 0) {
        setError('Preencha um valor.')
        return false
      }
      else if(types[type] && !types[type].regex.test(value)){
        setError(types[type].message)
        return false
      }
      else{
        setError(null)
        return true
        
      }
      
    }
  return {
    value,
    setValue,
    onChange,
    validate : () => validate(value),
    onBlur : () => validate(value),
    error,
  }
}

export default UseForm
