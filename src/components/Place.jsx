import React from 'react'

const Place = (props) => {

  return (
    <div className='flex flex-row space-between'>
        <img src={props.img} alt="place" className='w-[17.03125vw] h-[39.650149vh] ml-[40px] mt-[100px] rounded-[5px]' />
        <div className='flex flex-col mt-[185px] ml-[44px] w-[530px] text-xl'>
            <div className='flex flex-row space-x-5'>
              <span className='font-medium'>{props.country}</span>
              <span className='font-extralight underline decoration-from-font text-[#918E9B]'>View on Google maps</span>
            </div>
            <div className='text-[35px] font-bold mt-2 leading-8 mb-[2.5rem]'>{props.name}</div>
            <div>
              <p className='font-bold leading-4 mb-[2.75rem]'>{props.date}</p>
              <p className='leading-[150%] font-normal'>{props.content}</p>
            </div>
        </div>
    </div>
  )
}

export default Place 