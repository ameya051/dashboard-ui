import Image from 'next/image'
import React from 'react'

const AddButton = () => {
  return (
    <div className='flex justify-center rounded-lg bg-white py-1 drop-shadow-sm'>
        <Image src='/assets/new_task_button.svg' alt='new task button' width={20} height={20} />
    </div>
  )
}

export default AddButton