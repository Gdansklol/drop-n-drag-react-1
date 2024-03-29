import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

const hardcodedCharacters = [
  { id: 'gary', name: 'Gary Goodspeed', thumb: '/images/gary.png' },
  { id: 'cato', name: 'Little Cato', thumb: '/images/cato.png' },
  { id: 'kvn', name: 'KVN', thumb: '/images/kvn.png' },
];

function App() {
  const [characters, updateCharacters] = useState(hardcodedCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Final Space Characters</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.draggableProps} ref={provided.innerRef}>
                {characters.map(({ id, name, thumb }, index) => (
                <Draggable key={id} draggableId={id} index={index} suppressHydrationWarning={true}>
                    {(provided) => (
                      <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      >
                        <div className="characters-thumb">
                          <img src={thumb} alt={`${name} Thumb`} />
                        </div>
                        <p>{name}</p>
                      </li>
                    )}
                  </Draggable>
                ))}
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
  );
}

export default App;
