import NonogramSquare from './NonogramSquare.jsx'

const NonogramGrid = () => {
  return (
    <div className='w-4/5 aspect-square grid grid-cols-10 grid-rows-[repeat(10,_minmax(0,_1fr))] gap-[2px] bg-bg2 border-2 border-bg2'>
      {[...Array(100)].map((square) => (
        <NonogramSquare></NonogramSquare>
      ))}
    </div>
  )
}

export default NonogramGrid
