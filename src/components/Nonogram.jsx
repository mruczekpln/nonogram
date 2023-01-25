import NonogramGrid from './NonogramGrid.jsx'
import NonogramLives from './NonogramLives.jsx'

const Nonogram = () => {
  const solution = [...new Array(5)].map(() => [...new Array(5)].map(() => (Math.random() > 0.5 ? 'W' : 'B')))

  return (
    <div className='flex h-full w-full flex-col items-center justify-evenly rounded-2xl bg-primary'>
      <NonogramGrid solution={solution} />
      <NonogramLives />
    </div>
  )
}

export default Nonogram
