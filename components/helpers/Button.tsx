import Link from 'next/link'
import React from 'react'

type ButtonProp = {
    value: string;
    href?: string | null;
}

export default function Button({ value, href }: ButtonProp) {
    return (
        <button className={`p-2 border  font-bold text-white rounded-lg hover:bg-zinc-500`}>
            {href ?
                <Link href={href}>
                    {value}
                </Link> :
                <>
                    {value}
                </>
            }
        </button>
    )
}
