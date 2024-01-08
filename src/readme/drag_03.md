
- 3:31 onDragEnd
-  import {useState}
-  create a new instance of state 
we're going to call that characters ,
fucntion to updateCharacters

```js
const [characters, updateCharacters]
```
default as finalSpaceCharacters
```js
const [characters, updateCharacters] = useState(finalSpaceCharacters);
```

- 3:51
then if we switch our final space characters
**map to the characters**

- 3:57 
we can see nothing has yet changed 
we're just using our state on 
our  <DragDropContext> </DragDropContext>

- break time 

```js
import React,{useState} from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
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
    id: 'mooncake',
    name: 'Mooncake',
    thumb: '/images/mooncake.png'
  },
  {
    id: 'quinn',
    name: 'Quinn Ergon',
    thumb: '/images/quinn.png'
  }
]

const App = () => {
  const [characters, updateCharacters] = (finalSpaceCharacters)
  return (
    <div className='App'>
      <header className="App-header">
        <h1> Final Space Characters</h1>
        <DragDropContext>
          <Droppable>
          {(provided)=> (
              <ul className='characters' {...provided.droppableProps} ref={provided.innerRef}>
              {finalSpaceCharacters.map(({id,name,thumb}, index)=> {
                return (
                  <Draggable key={id} draggableId={id} index={index} >
                    {(provided) => (
                         <li {...provided.draggableId} 
                         {...provided.dragHandleProps}
                         ref={provided.innerRef}>
                         <div className='characters-thumb'>
                           <img src={thumb} alt={`{name} Thumb`}/>
                         </div>
                         <p>
                           {name}
                         </p>
                       </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
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
- css

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


.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.characters {
  list-style: none;
  padding-left: 0;
}

.characters li{
  display: flex;
}
```
- like card style with border 
```css
characters li{
  display: flex;
  align-items: center;
  border: solid 2px #d0d0d0;
  border-radius:.2em;
  padding: .5em .8em .5em .5em;
  margin-bottom:1em;
}
```
- css
- just generated a square in div with img which
 width:2m, height:2m 

 ```css
 .characters-thumb {
  overflow: hidden;
  flex-shrink: 0;
  width: 2em;
  height: 2em;
  background-color: #e8e8e8;
  padding: .5em;
  margin-right: .5em;
}
 ```

- justering for small and placeras in the card of the square

```css
.characters-thumb img {
  display: block;
  width: 100%;
  height: auto;
}
```
- 3:52



