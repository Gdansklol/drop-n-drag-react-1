# React App

- create repository in github
- git clone repo on bash or iTerm2

## using with react-beautiful-dnd

### Install 

- npx create-react-app []


- react-beautiful-dnd

```bash
npm i react-beautiful-dnd
```



#### npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### object with array type of finalSpaceCharacters

```js
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
```

- <Draggable />
- <Draggable /> components can be dragged around and dropped onto <Droppable />s. A <Draggable /> must always be contained within a <Droppable />. It is possible to reorder a <Draggable /> within its home <Droppable /> or move to another <Droppable />. It is possible because a <Droppable /> is free to control what it allows to be dropped on it.

-

```js
import { Draggable } from 'react-beautiful-dnd';

<Draggable draggableId="draggable-1" index={0}>
  {(provided, snapshot) => (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <h4>My draggable</h4>
    </div>
  )}
</Draggable>;
```

**

# Important **

<h4>
Not for this case, but For every one - check provided.draggableProps not provided.dropableProps

```js
 <Draggable draggableId ={id} index={index} type="characters">

         {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <h4 style={style}>{title}</h4>
            </div>
        )}
</Draggable>
```


RBD try find node by provided.draggableProps. Missing this props got error: Unable to find draggable with id: X
</h4>
