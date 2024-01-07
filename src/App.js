import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';

const finalSpaceCharacters = [
  {
    id:'gray',
    name: 'Gary Goodspeed',
    thumb: '/images/gary.png'
  },
  {
    id:'cato',
    name: 'Little Cato',
    thumb: '/images/cato.png'
  },
  {
    id:'',
    name:'',
    thumb:'/',
  },
  {
    id:'',
    name:'',
    thumb:'/',
  },
  {
    id:'',
    name:'',
    thumb:'/',
  },
  {
    id:'',
    name:'',
    thumb:'/',
  }

]

const App = () => {
  return (
    <div className='App'>
      <header className="App-header">
        <h1> Final Space Characters</h1>

        <ul className='characters'>
          {finalSpaceCharacters.map(({id,name,thumb})=> {
            return (
              <li key={id}>
                <div className='characters-thumb'>
                  <img src={thumb} alt={`{name} Thumb`}/>
                </div>
                <p>
                  {name}
                </p>
              </li>
            );
          })}
        </ul>
      </header>
      <p>
        Images from <a></a>
      </p>
    </div>
  )
}

export default App;