import React from 'react'

import './Tile.css'

const Tile = (props) => {
  const { selected, matched, color } = props;
  let bgColor = (selected || matched) ? {backgroundColor: color} : null;

  return (
    <div className='Tile' style={bgColor}>
      {selected || matched ? <svg /> : null}
    </div>
  )
}

export default Tile
