const NonogramGridRow = ({ data }) => {
  return (
    <div className='flex aspect-square w-[100px] items-center justify-center gap-2'>
      {data.map((char) => (
        <div>{char}</div>
      ))}
    </div>
  )
}

export default NonogramGridRow
