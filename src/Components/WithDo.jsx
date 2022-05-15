import Looper from './Looper'
import { useSelector } from 'react-redux'

function WithDo({ con, Draggable, list, active, complete }) {
  const Todo = useSelector((state) => state.Todo)
  const Theme = useSelector((state) => state.Theme)

  if (con === 1) {
    return list.map((i, inx) => (
      <Draggable key={i.id} draggableId={i.id} index={inx}>
        {(provided) => (
          <div
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <Looper data={i} />
          </div>
        )}
      </Draggable>
    ))
  } else if (con === 2) {
    const item = Todo.filter((i) => i.complete !== true)
    if (item.length === 0) {
      return (
        <p
          className={
            !Theme
              ? 'text-center text-2xl px-5 py-5 text-white'
              : 'text-center text-2xl px-5 py-5 text-black'
          }
        >
          No Active Todo List
        </p>
      )
    }
    return active.map((i, inx) => (
      <Draggable key={i.id} draggableId={i.id} index={inx}>
        {(provided) => (
          <div
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <Looper data={i} />
          </div>
        )}
      </Draggable>
    ))
  } else {
    const item = Todo.filter((i) => i.complete === true)
    if (item.length === 0) {
      return (
        <p
          className={
            !Theme
              ? 'text-center text-2xl px-5 py-5 text-white'
              : 'text-center text-2xl px-5 py-5 text-black'
          }
        >
          No Complete Todo List
        </p>
      )
    }
    return complete.map((i, inx) => (
      <Draggable key={i.id} draggableId={i.id} index={inx}>
        {(provided) => (
          <div
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <Looper data={i} />
          </div>
        )}
      </Draggable>
    ))
  }
}

export default WithDo
