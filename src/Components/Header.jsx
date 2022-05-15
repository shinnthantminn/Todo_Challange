import React, { memo } from 'react'
import { useSelector } from 'react-redux'

function Header({ dark, light, mobileDark, mobileLight }) {
  const Theme = useSelector((state) => state.Theme)
  return (
    <header>
      <div className="w-full">
        <div className="hidden sm:block">
          <img
            src={Theme ? light : dark}
            className="w-full h-[300px] object-fill"
            alt=""
          />
        </div>
        <div className="sm:hidden">
          <img
            src={Theme ? mobileLight : mobileDark}
            className="w-full h-[250px] object-fill"
            alt=""
          />
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
