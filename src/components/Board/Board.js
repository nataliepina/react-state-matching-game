import React from 'react'
import './Board.css';
import Tile from '../Tile';

const Board = (props) => {

  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  }

  const allTiles = tiles.map((tile, index) => (<Tile tile={...props} />))

  return (
    <div className='Board' style={gridConfig}>
      {allTiles}
    </div>
  )
}

export default Board
