"use client"

import { useState } from "react"
import { CuteWaggersHomeComponent } from "@/components/cute-waggers-home"
import { VideoIntro } from "@/components/video-intro"

export default function Page() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <>
      {showIntro && <VideoIntro onIntroEnd={() => setShowIntro(false)} />}
      <div className={`transition-opacity duration-1000 ${showIntro ? "opacity-0" : "opacity-100"}`}>
        <CuteWaggersHomeComponent />
      </div>
    </>
  )
}

