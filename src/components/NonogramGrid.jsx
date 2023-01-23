import NonogramSquare from './NonogramSquare.jsx'
import NonogramGridColumn from './NonogramGridColumn.jsx'
import NonogramGridRow from './NonogramGridRow.jsx'

const getMostRepetiveSameColors = (array) => {
  let current = array[0]
  let lastIndex = 0
  let num = 1

  let result = [num]

  for (let i = 1; i < array.length; i++) {
    if (array[i] === current) {
      num++
      result[lastIndex] = num
    } else {
      num = 1
      lastIndex++
      current = array[i]
      result.push(num)
    }
  }

  console.log(array, result)
  return result
}

const getArrayColumns = (array) => {
  let result = []

  for (let i = 0; i < 5; i++) {
    let column = []
    array.forEach((row) => column.push(row[i]))

    result.push(column)
  }

  return result
}

const NonogramGrid = ({ nonogram }) => {
  return (
    <div
      style={{
        gridTemplateColumns: '100px 500px',
        gridTemplateRows: '100px 500px',
      }}
      className='grid h-[600px] w-[600px] gap-4'
    >
      <div className='aspect-square w-[100px]'></div>
      <div className='col-start-2 col-end-3 flex h-[100px] w-[500px]'>
        {getArrayColumns(nonogram).map((column) => {
          const data = getMostRepetiveSameColors(column)
          return <NonogramGridColumn data={data}></NonogramGridColumn>
        })}
      </div>
      <div className='row-start-2 row-end-3 flex h-[500px] w-[100px] flex-col'>
        {nonogram.map((row) => {
          const data = getMostRepetiveSameColors(row)
          return <NonogramGridRow data={data}></NonogramGridRow>
        })}
      </div>
      <div className='col-start-2 col-end-6 row-start-2 row-end-6 grid aspect-square w-[500px] grid-cols-5 grid-rows-5 gap-1 overflow-hidden rounded-xl border-4 border-bg2 bg-bg2'>
        {nonogram.map((row, idx) =>
          row.map((col, index) => (
            <NonogramSquare
              row={idx}
              column={index}
              color={col}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default NonogramGrid
