const NonogramGridColumn = ({ data }) => {
  return (
    <div className='flex aspect-square w-[100px] flex-col justify-center text-center'>
      {data.map((char) => (
        <div>{char}</div>
      ))}
    </div>
  )
}

export default NonogramGridColumn
