import React from 'react'

export default function Button({children}: {children: React.ReactNode}) {
    return (
        <div className='bg-black rounded-md px-2 py-1 flex gap-2 items-center justify-center text-neutral-100 w-fit font-semibold'>{children}</div>
    )
}
export function SkillButton({children}: {children: React.ReactNode}) {
    return (
        <div className='bg-black rounded-md px-2 py-1 flex gap-2 items-center justify-center text-neutral-100 w-fit font-semibold shadow-sm shadow-neutral-400'>{children}</div>
    )
}
