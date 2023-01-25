const NonogramGridColumn = ({ data }) => {
  return (
    <div className='flex aspect-square w-[100px] flex-col justify-center text-center'>
      {data.map((char, index) => (
        <div key={index}>{char}</div>
      ))}
    </div>
  )
}

export default NonogramGridColumn
