"use client"

import { useState, useEffect, useRef } from "react"

export function VideoIntro({ onIntroEnd }: { onIntroEnd: () => void }) {
  const [isVideoEnded, setIsVideoEnded] = useState(false)
  const [progress, setProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoEnded(true)
      onIntroEnd()
    }, 5000) // Adjust this time to match your video duration

    return () => clearTimeout(timer)
  }, [onIntroEnd])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100
      setProgress(progress)
    }

    video.addEventListener("timeupdate", updateProgress)
    return () => video.removeEventListener("timeupdate", updateProgress)
  }, [])

  return (
    <div
      className={`fixed inset-0 bg-white z-50 transition-opacity duration-1000 ${
        isVideoEnded ? "opacity-0" : "opacity-100"
      } flex flex-col items-center justify-center`}
    >
      <div className="w-full max-w-3xl aspect-video relative">
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-lg text-gray-800"
          autoPlay
          muted
          playsInline
          onEnded={() => setIsVideoEnded(true)}
        >
          <source src="/videos/fv_intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-0 left-0 w-full bg-gray-300 h-1 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

