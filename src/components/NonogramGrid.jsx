import NonogramSquare from './NonogramSquare.jsx'
import NonogramGridColumn from './NonogramGridColumn.jsx'
import NonogramGridRow from './NonogramGridRow.jsx'
import { useEffect, useState } from 'react'

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

const NonogramGrid = ({ solution }) => {
  const [current, setCurrent] = useState([...new Array(5)].map(() => [...new Array(5)].map(() => 'P')))
  const [random, setRandom] = useState(false)

  const updateCurrent = (color, i, j) => {
    let previous = current

    previous = previous.map((row, index) =>
      row.map((column, idx) => {
        if (index === i && idx === j) {
          console.log(`switched i: ${i} j: ${j} index: ${index} ${idx} color: ${color}`)
          return color
        }

        return column
      })
    )

    console.log('update')
    setCurrent(previous)
  }

  const checkIfSolved = () => {
    if (JSON.stringify(current) === JSON.stringify(solution)) {
      console.log('you won')
    }
  }

  const generateRandomSolvedSquare = () => {
    const random = Math.random() * 25
    const i = Math.floor(random / 5 - 1) < 0 ? 0 : Math.floor(random / 5 - 1)
    const j = Math.floor(random % 5)

    console.log(i, j)
    const color = solution[i][j]

    console.log('generate')
    updateCurrent(color, i, j)
  }

  useEffect(() => {
    if (!random) setRandom(generateRandomSolvedSquare())
  }, [])

  useEffect(() => {
    console.table(solution)
    console.table(current)

    checkIfSolved()
  }, [current])

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
        {getArrayColumns(solution).map((column, index) => {
          const data = getMostRepetiveSameColors(column)
          return (
            <NonogramGridColumn
              key={index}
              data={data}
            ></NonogramGridColumn>
          )
        })}
      </div>
      <div className='row-start-2 row-end-3 flex h-[500px] w-[100px] flex-col'>
        {solution.map((row, index) => {
          const data = getMostRepetiveSameColors(row)
          return (
            <NonogramGridRow
              key={index}
              data={data}
            ></NonogramGridRow>
          )
        })}
      </div>
      <div className='col-start-2 col-end-6 row-start-2 row-end-6 grid aspect-square w-[500px] grid-cols-5 grid-rows-5 gap-1 overflow-hidden rounded-xl border-4 border-bg2 bg-bg2'>
        {current.map((row, idx) =>
          row.map((col, index) => (
            <NonogramSquare
              key={[idx, index]}
              row={idx}
              column={index}
              color={col}
              updateCurrent={updateCurrent}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default NonogramGrid
