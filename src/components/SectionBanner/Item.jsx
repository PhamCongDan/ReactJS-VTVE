import React from 'react'
import PropTypes from 'prop-types'

const Item = (props) =>  {
  const data = props.data
  
  return (
    <div>
      {data.label}
      <img alt={data.label} src={data.image || data.backgroundImage} />
    </div>
  )
}

const propTypes = {
  key: PropTypes.string.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    image: PropTypes.string
  })
}

// Item.propTypes = propTypes
export default Item
