import { useRef, useState } from 'react'
import NonogramGrid from './NonogramGrid.jsx'
import NonogramLives from './NonogramLives.jsx'

const Nonogram = () => {
  const solution = useRef([...new Array(5)].map(() => [...new Array(5)].map(() => (Math.random() > 0.5 ? 'W' : 'B'))))
  const [solved, setSolved] = useState(false)
  const [lives, setLives] = useState(3)

  const generateBlankPuzzle = () => {
    const random = Math.random() * 25
    const i = Math.floor(random / 5 - 1) < 0 ? 0 : Math.floor(random / 5 - 1)
    const j = Math.floor(random % 5)

    const blank = [...new Array(5)].map(() => [...new Array(5)].map(() => 'P'))
    blank[i][j] = solution.current[i][j]
    console.log(blank)

    return blank
  }

  return (
    <div className='flex h-full w-full flex-col items-center justify-evenly rounded-2xl bg-primary'>
      {!solved ? (
        <>
          <NonogramGrid
            start={generateBlankPuzzle()}
            solution={solution.current}
            setSolved={setSolved}
            lives={lives}
            setLives={setLives}
          />
          <NonogramLives lives={lives} />
        </>
      ) : (
        <div>you won</div>
      )}
    </div>
  )
}

export default Nonogram
