import Image from 'next/image'
import React from 'react'

const AddProjectBtn = () => {
  return (
    <div className="flex cursor-pointer items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Image src='/assets/add_circle.svg' alt="icon" width={20} height={20} />
        <p className="text-[12px] font-medium">Add New Project</p>
      </div>
    </div>
  )
}

export default AddProjectBtn