import React from 'react'

type BackgroundProps = {
    children: React.ReactNode
    src:string
}

export default function BackgroundImage({children, src}:BackgroundProps) {

    return (
        <div className="relative min-h-screen">
            <div
                className="absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-cover opacity-70"
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${src})` }}
            />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
