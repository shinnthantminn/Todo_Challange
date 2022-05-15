import React, { memo, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import check from '../img/icon-check.svg'
import cross from '../img/icon-cross.svg'
import { Complete, Remove } from '../Store/Slicer/TodoSlicer'

function Looper({ data }) {
  const [show, setShow] = useState(false)
  const Theme = useSelector((state) => state.Theme)
  const dispatch = useDispatch()
  const Todo = useSelector((state) => state.Todo)
  const [TextColor, setTextColor] = useState('text text-[#cacde8]')
  const [Finish, setFinish] = useState('text line-through text-[#606172]')

  const handleDelete = useCallback(
    (id) => {
      dispatch(Remove(id))
    },
    [Todo],
  )

  const handleChecked = useCallback(
    (id) => {
      dispatch(Complete(id))
    },
    [Todo],
  )

  useEffect(() => {
    if (Theme) {
      setTextColor('text text-[#4f3b3b] w-[80%] overflow-scroll')
      setFinish('text line-through text-[#bcbcbc] w-[80%] overflow-scroll')
    } else {
      setTextColor('text text-[#cacde8] w-[80%] overflow-scroll')
      setFinish('text line-through text-[#606172] w-[80%] overflow-scroll')
    }
  }, [Theme])

  return (
    <div
      className={
        !Theme ? 'border-b border-b-[#404674] ' : 'border-b border-b-[#cccccc]'
      }
    >
      <div
        onMouseEnter={() => {
          setShow(true)
        }}
        onMouseLeave={() => {
          setShow(false)
        }}
        className={
          !Theme
            ? 'bg-[#2e3259] flex items-center px-5 py-3 sm:px-5 sm:py-4'
            : 'flex items-center px-5 py-3 sm:px-5 sm:py-4 bg-[#fafafa]'
        }
      >
        <button
          className="w-[20px] sm:w-[25px] h-[20px] sm:h-[25px] rounded-[100%] bg-gradient-to-br from-[#57ddff] mr-2 sm:mr-5 to-[#c058f3]"
          onClick={() => handleChecked(data.id)}
        >
          {data.complete ? (
            <img src={check} className="mx-auto" alt="check" />
          ) : (
            <div
              className={
                !Theme ? 'CheckColor bg-[#2E3259]' : 'CheckColor bg-[#fafafa]'
              }
            />
          )}
        </button>
        <p className={data.complete ? Finish : TextColor}>{data.text}</p>
        {show && (
          <button className="ml-auto">
            <img
              src={cross}
              alt="cross"
              onClick={() => handleDelete(data.id)}
            />
          </button>
        )}
      </div>
    </div>
  )
}

export default memo(Looper)
