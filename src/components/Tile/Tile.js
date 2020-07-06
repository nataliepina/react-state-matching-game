import React from 'react'
import './Tile.css'


const Tile = (props) => {
  const { selected, matched, color } = props;

  const dynamicColor = (selected || matched) ? {backgroundColor: color} : null;
  const svg = <props.svg />

  return (
    <div className='Tile' style={dynamicColor} onClick={() => handleTileClicked(id, color)}>
      {selected || matched ? svg : null}
    </div>
  )
}

export default Tile
