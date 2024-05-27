import React from 'react'

type BackgroundProps = {
    children: React.ReactNode
    src: string
}

export default function BackgroundImage({ children, src }: BackgroundProps) {

    return (
        <div className="relative min-h-screen">
            <div
                className=" absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${src})` }}
            />
            <div
                className="absolute top-0 left-0 right-0 bottom-0"
                style={{
                    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.5) 25%, rgba(0, 0, 0, 0) 50%), linear-gradient(225deg, rgba(0, 0, 0, 0.5) 25%, rgba(0, 0, 0, 0) 50%), linear-gradient(315deg, rgba(0, 0, 0, 0.5) 25%, rgba(0, 0, 0, 0) 50%), linear-gradient(45deg, rgba(0, 0, 0, 0.5) 25%, rgba(0, 0, 0, 0) 50%)',
                    opacity: 0.9,
                }}
            />
            <div className="relative z-2">
                {children}
            </div>
        </div>
    );
}
