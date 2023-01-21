import NonogramGrid from './NonogramGrid.jsx'
import NonogramLives from './NonogramLives.jsx'

const Nonogram = () => {
  return (
    <div className='w-1/3 aspect-square bg-primary rounded-2xl flex flex-col items-center justify-around'>
      <NonogramGrid></NonogramGrid>
      <NonogramLives></NonogramLives>
    </div>
  )
}

export default Nonogram
