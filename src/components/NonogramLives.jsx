import { FaHeart } from 'react-icons/fa'

const NonogramLives = () => {
  return (
    <div className='flex h-[10%] w-[500px] items-center justify-between'>
      <FaHeart className='h-full w-full fill-text1 stroke-bg2 stroke-[32]' />
      <FaHeart className='h-full w-full fill-text1 stroke-bg2 stroke-[32]' />
      <FaHeart className='h-full w-full fill-text1 stroke-bg2 stroke-[32]' />
    </div>
  )
}

export default NonogramLives
