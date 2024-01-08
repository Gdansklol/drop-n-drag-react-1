-
```js
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
    id:'kvn',
    name:'KVN',
    thumb:'/images/kvn.png',
  },
  {
    id:'mooncake',
    name:'Mooncake',
    thumb:'/images/mmoncake.png',
  },
  {
    id:'quinn',
    name:'Quinn Ergon',
    thumb:'/images/quinn.png',
  },
]

const App = () => {
  return (
    <div className='App'>
      <header className="App-header">
        <h1> Final Space Characters</h1>
        <DragDropContext>

       
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
        </DragDropContext>
      </header>
      <p>
      Images from <a href="https://final-space.fandom.com/wiki/Final_Space_Wiki">Final Space Wiki</a>
      </p>
    </div>
  )
}

export default App;
```
-
```css
.App {
  text-align: center;
}

.App-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 1.5vmin);
}

```
-
import {Droppable} from 'react-beautiful-dnd';
<Droppable></Droppable>

- update ver
```js
import { DragDropContext, Droppable } from 'react-beautiful-dnd';


const App = () => {
  return (
    <div className='App'>
      <header className="App-header">
        <h1> Final Space Characters</h1>
        <DragDropContext>
          <Droppable></Droppable>
```

-
```js
           <DragDropContext>
          <Droppable>
          {(provided)=> (
              <ul className='characters' {...provided.droppableProps} ref={provided.innerRef}>
              {finalSpaceCharacters.map(({id,name,thumb})=> {
                return ()
```
-
```js
return (
                  <Draggable>
                  <li key={id}>
                    <div className='characters-thumb'>
                      <img src={thumb} alt={`{name} Thumb`}/>
                    </div>
                    <p>
                      {name}
                    </p>
                  </li>
                  </Draggable>
                );
              })}
            </ul>
          )}
```