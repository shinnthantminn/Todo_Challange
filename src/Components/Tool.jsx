import sun from '../img/icon-sun.svg'
import moon from '../img/icon-moon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { showHide } from '../Store/Slicer/ToggleSlicer'
import { useCallback } from 'react'
import Form from './Form'

function Tool() {
  const Theme = useSelector((state) => state.Theme)
  const dispatch = useDispatch()

  const handleToggle = useCallback(() => {
    dispatch(showHide())
  }, [Theme])

  return (
    <div className="absolute w-full top-0 flex justify-center pt-10 sm:pt-20">
      <div className="w-[90%] sm:w-[70%] lg:w-[60%] xl:w-[40%]">
        <div className="flex items-center justify-between">
          <div className="logo">todo</div>
          <div>
            <button onClick={handleToggle}>
              <img src={Theme ? moon : sun} alt="sun" />
            </button>
          </div>
        </div>
        <Form />
      </div>
    </div>
  )
}

export default Tool
