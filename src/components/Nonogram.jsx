import NonogramGrid from './NonogramGrid.jsx'
import NonogramLives from './NonogramLives.jsx'

const Nonogram = () => {
  const nonogram = [...new Array(5)].map(() => [...new Array(5)].map(() => (Math.random() > 0.5 ? 'W' : 'B')))
  console.log(nonogram)

  return (
    <div className='flex h-full w-full flex-col items-center justify-evenly rounded-2xl bg-primary'>
      <NonogramGrid nonogram={nonogram} />
      <NonogramLives />
    </div>
  )
}

export default Nonogram
