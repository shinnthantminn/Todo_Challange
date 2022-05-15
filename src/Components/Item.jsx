import { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { ClearComplete, Replace } from '../Store/Slicer/TodoSlicer'
import WithDo from './WithDo'

function Item() {
  const Todo = useSelector((state) => state.Todo)
  const [list, setList] = useState(Todo)
  const [active, setActive] = useState([])
  const [Complete, setComplete] = useState([])
  const [state, setState] = useState(1)
  const dispatch = useDispatch()
  const [left, setLeft] = useState([])
  const Theme = useSelector((state) => state.Theme)
  const [Hover, setHover] = useState(
    'text-sm sm:text-lg hover:text-white duration-300',
  )

  useEffect(() => {
    setLeft(Todo.filter((i) => i.complete !== true))
    setList(Todo)
    const ItemOne = Todo.filter((i) => i.complete !== true)
    setActive(ItemOne)
    const ItemTwo = Todo.filter((i) => i.complete === true)
    setComplete(ItemTwo)
  }, [Todo])

  const handleClearCompleted = () => {
    dispatch(ClearComplete())
  }

  const sorting = (value, res) => {
    const items = Array.from(value)
    const [reorderedItem] = items.splice(res.source.index, 1)
    items.splice(res.destination.index, 0, reorderedItem)
    return items
  }

  const handleOnDragEnd = (res) => {
    if (!res.destination) return
    setList(sorting(list, res))
    setActive(sorting(active, res))
    setComplete(sorting(Complete, res))
  }

  useEffect(() => {
    dispatch(Replace(list))
  }, [list])

  useEffect(() => {
    if (Theme) {
      setHover('text-sm sm:text-lg hover:text-black duration-300')
    } else {
      setHover('text-sm sm:text-lg hover:text-white duration-300')
    }
  }, [Theme])

  return (
    <div>
      <div
        className={
          !Theme ? 'w-full rounded bg-[#2e3259]' : 'w-full rounded bg-[#fafafa]'
        }
      >
        <div>
          <div className=" pt-1  shadow-lg">
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="todo" className="divide-y-2">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    <WithDo
                      Draggable={Draggable}
                      con={state}
                      list={list}
                      active={active}
                      complete={Complete}
                    />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <div className="flex justify-between text-[#5b5e72] px-3 sm:px-5 py-4 sm:py-5">
              <div>{left.length} items left</div>
              <div className="space-x-5 hidden sm:block">
                <button
                  className={state === 1 ? `${Hover} text-blue-500` : Hover}
                  onClick={() => {
                    setState(1)
                  }}
                >
                  All
                </button>
                <button
                  className={state === 2 ? `${Hover} text-blue-500` : Hover}
                  onClick={() => {
                    setState(2)
                  }}
                >
                  Active
                </button>
                <button
                  className={state === 3 ? `${Hover} text-blue-500` : Hover}
                  onClick={() => {
                    setState(3)
                  }}
                >
                  Completed
                </button>
              </div>
              <button onClick={handleClearCompleted} className={Hover}>
                Clear Completed
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          !Theme
            ? 'space-x-5 sm:hidden text-center py-4 flex justify-center items-center sm:py-5 mt-10 rounded bg-[#2e3259] text-[#5b5e72] shadow-2xl'
            : 'space-x-5 sm:hidden text-center py-4 flex justify-center items-center sm:py-5 mt-10 rounded bg-[#fafafa] text-[#5b5e72] shadow-2xl'
        }
      >
        <button
          className={state === 1 ? `${Hover} text-blue-500` : Hover}
          onClick={() => {
            setState(1)
          }}
        >
          All
        </button>
        <button
          className={state === 2 ? `${Hover} text-blue-500` : Hover}
          onClick={() => {
            setState(2)
          }}
        >
          Active
        </button>
        <button
          className={state === 3 ? `${Hover} text-blue-500` : Hover}
          onClick={() => {
            setState(3)
          }}
        >
          Completed
        </button>
      </div>
    </div>
  )
}

export default Item
