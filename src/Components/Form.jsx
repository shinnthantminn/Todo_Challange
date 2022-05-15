import Item from './Item'
import { v4 as uuid } from 'uuid'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Add } from '../Store/Slicer/TodoSlicer'

function Form() {
  const textRef = useRef()
  const dispatch = useDispatch()
  const Todo = useSelector((state) => state.Todo)
  const Theme = useSelector((state) => state.Theme)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (textRef.current.value === '') {
      alert('input was empty')
      return
    }
    const data = {
      id: uuid(),
      text: textRef.current.value,
      complete: false,
    }
    dispatch(Add(data))
    document.getElementById('form').reset()
  }

  return (
    <div>
      <div className="w-full mt-14">
        <form className="mb-10" onSubmit={handleSubmit} id="form">
          <div
            className={
              !Theme ? 'mainForm bg-[#2e3259]' : 'mainForm bg-[#fafafa]'
            }
          >
            <div
              className={
                !Theme ? 'borderColor border-[#3c3e54]' : 'borderColor '
              }
            />
            <input
              ref={textRef}
              type="text"
              autoComplete="off"
              className={
                !Theme
                  ? 'FormText text-[#cacde8] placeholder:text-base sm:placeholder:text-lg placeholder:text-[#5b5e72]'
                  : 'FormText  text-[#5b5e72] placeholder:text-base sm:placeholder:text-lg  placeholder:text-[#cacde8]'
              }
              placeholder="Create a new Todo..."
            />
          </div>
        </form>

        {Todo.length !== 0 && <Item />}
        {Todo.length !== 0 && (
          <p
            className={
              !Theme
                ? 'text-center mt-10 text-[#cacde8]'
                : 'text-center mt-10 text-[#5b5e72]'
            }
          >
            Drag drop to reorder list
          </p>
        )}
      </div>
    </div>
  )
}

export default Form
