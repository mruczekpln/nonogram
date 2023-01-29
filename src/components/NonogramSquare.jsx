import { useState } from 'react'

const NonogramSquare = ({ row, column, color, updateCurrent }) => {
  const colors = {
    W: 'rgb(243,243,244)',
    B: 'rgb(52,49,45)',
    P: 'rgb(243,243,244, 0.2)',
  }

  const [selectColor, setSelectColor] = useState(color)
  if (color !== selectColor) setSelectColor(color)

  const handleClick = (e) => {
    if (selectColor === 'P') {
      if (e.type === 'click') {
        console.log('left')
        setSelectColor('B')

        updateCurrent('B', row, column)
      } else if (e.type === 'contextmenu') {
        e.preventDefault()

        console.log('right')
        setSelectColor('W')
        updateCurrent('W', row, column)
      }
    }
  }

  return (
    <div
      style={{
        backgroundColor: colors[selectColor],
      }}
      onClick={handleClick}
      onContextMenu={handleClick}
    ></div>
  )
}

export default NonogramSquare
