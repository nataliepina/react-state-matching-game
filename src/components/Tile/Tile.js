import React from 'react'

import './Tile.css'

const Tile = (props) => {
  const { selected, matched, color, svg } = props;

  const dynamicColor = (selected || matched) ? {backgroundColor: color} : null;
  const svg = <svg />
  
  return (
    <div className='Tile' style={dynamicColor}>
      {(selected || matched) ? svg : null}
    </div>
  )
}

export default Tile
