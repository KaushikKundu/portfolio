import React from 'react'

export default function Button({children}: {children: React.ReactNode}) {
    return (
        <div className='bg-black rounded-md px-2 py-0.5 text-neutral-100 w-fit font-semibold'>{children}</div>
    )
}
