import { useState } from 'react'

const NonogramSquare = ({ row, column, color = 'P' }) => {
  const colors = {
    W: 'rgb(243,243,244)',
    B: 'rgb(52,49,45)',
    P: 'rgb(243,243,244, 0.2)',
  }

  const [selectColor, setSelectColor] = useState(color)

  const handleClick = (e) => {
    if (e.type === 'click') {
      console.log('left')

      if (!(selectColor == 'B')) setSelectColor('B')
      else setSelectColor('P')
    } else if (e.type === 'contextmenu') {
      e.preventDefault()

      console.log('right')

      if (!(selectColor == 'W')) setSelectColor('W')
      else setSelectColor('P')
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
