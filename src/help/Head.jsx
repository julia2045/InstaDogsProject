import React from 'react'

const Head = ({ title, description }) => {

  React.useEffect(() => {
    document.title = title ? `${title} | Dogs` : 'Dogs'
    
    const metaDescription = document.querySelector(
      "meta[name='description']"
    )

    if (metaDescription) {
      metaDescription.setAttribute('content', description || '')
    }
  }, [title, description])

  return null
}

export default Head
