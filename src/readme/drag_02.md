
- 2:32
- App.js
```js
<DragDropContext>
          <Droppable>
          {(provided)=> (
              <ul className='characters' {...provided.droppableProps} ref={provided.innerRef}>
              {finalSpaceCharacters.map(({id,name,thumb}, index)=> {
                return (
                  <Draggable key={id} draggableId={id} index={index} >

                  <li key={id}>
                    <div className='characters-thumb'>
                      <img src={thumb} alt={`{name} Thumb`}/>
                    </div>
                    <p>
                      {name}
                    </p>
                  </li>
                  </Draggable>
```
- upadate ver
-  create a new function where we're going to pass in
details just like before 
```js
{() => (


)}
```
- 2:34
here we're going to set the same argument of

{(provide ) => ()}

- update 
```js
 <DragDropContext>
          <Droppable>
          {(provided)=> (
              <ul className='characters' {...provided.droppableProps} ref={provided.innerRef}>
              {finalSpaceCharacters.map(({id,name,thumb}, index)=> {
                return (
                  <Draggable key={id} draggableId={id} index={index} >
                    {() => (
                         <li >
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
            </ul>
          )}
        </Droppable>
        </DragDropContext>
```

- 
```js
<Draggable key={id} draggableId={id} index={index} >
                    {(provided) => (
                         <li 
                         {...provided.draggableId} 
                     
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
```

-
```js
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
```

- update ver with   {provided.placeholder}

```js
import React from 'react';
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

export default App;```
