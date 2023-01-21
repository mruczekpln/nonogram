import { useState } from 'react'

const NonogramSquare = () => {
  const [selectColor, setSelectColor] = useState('rgb(217, 197, 178)')

  const handleClick = (e) => {
    if (e.type === 'click') {
      console.log('left')
      if (!(selectColor == 'rgb(52,49,45)')) setSelectColor('rgb(52,49,45)')
      else setSelectColor('rgb(217, 197, 178)')
    } else if (e.type === 'contextmenu') {
      e.preventDefault()
      if (!(selectColor == 'rgb(243,243,244)')) setSelectColor('rgb(243,243,244)')
      else setSelectColor('rgb(217, 197, 178)')
      console.log('right')
    }
  }

  return (
    <div
      style={{
        backgroundColor: selectColor,
      }}
      onClick={handleClick}
      onContextMenu={handleClick}
    ></div>
  )
}

export default NonogramSquare
