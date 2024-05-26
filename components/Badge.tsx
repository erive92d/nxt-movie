import React from 'react'

export default function Badge({ value }: { value: string | number }) {
    return (
        <span className='bg-black text-sm text-white p-1 border border-zinc-500'>
            {typeof value === "string" ? value.toLocaleUpperCase() : value + "m"}
        </span>
    )
}
