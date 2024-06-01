"use client"

import { useState } from "react"

export default function PageSwitch() {

    const [pageNum, setPageNum] = useState<number>(0)



    return (
        <div>
            <button>
                +
            </button>
            <button>
                -
            </button>
        </div>
    )
}
