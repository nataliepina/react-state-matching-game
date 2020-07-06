import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board'
import { createTiles, indexOfSelected } from '../../misc/utils';

import './App.css';

class App extends Component{
  constructor(props) {
    super(props);


    this.state = {
      numTiles: 36,
      playing: false,
      previousTile: null,
      tiles: [],
      toBeCleared: null
    }
  }

  startGame = (numTiles) => {
    this.setState({
      playing: true,
      toBeCleared: null,
      tiles: createTiles(this.state.numTiles, this.handleTileClicked)
    })
  }

  handleTileClicked = (id, color) => {
    const tiles = Array.from(this.state.tiles)
    const selectedTileIndex = indexOfSelected(this.state.tiles, id, color)
    const previousTile = this.state.previousTile
    const toBeCleared = this.state.toBeCleared

    if (toBeCleared) {
      tiles[toBeCleared[0]].selected = false
      tiles[toBeCleared[1]].selected = false
    }

    tiles[selectedTile].selected = true

    if(previousTileIndex !== null) {

      if(tiles[previousTile].color === color && tiles[previousTile].id !== id) {
        tiles[previousTile].matched = true 
        tiles[selectedTile].matched = true 
        previousTile= null
      } else {
        toBeCleared = [previousTile, selectedTileIndex]
        previousTile = null
      }

    } else {
      previousTile = selectedTileIndex
    }

    this.setState({
      previousTile,
      tiles,
      toBeCleared
    })
  }
 
  render() {
  const { playing, numTiles, tiles } = this.state; 

  return (
    <div className="App">
      <header className="App-header">
        Turbo-Matcher
      </header>
        <OptionsPanel playing={playing} numTiles={numTiles} startGame={this.startGame} />
        <Board numTiles={numTiles} tiles={tiles} />
      }
    </div>
  );

  }
}

export default App;
