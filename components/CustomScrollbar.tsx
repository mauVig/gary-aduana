'use client'
import { useEffect, useRef, useState } from 'react'

interface Props {
  lenis: any
}

export default function CustomScrollbar({ lenis }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)
  const [thumbHeight, setThumbHeight] = useState(0)
  const [thumbTop, setThumbTop] = useState(0)
  const dragging = useRef(false)
  const dragStartY = useRef(0)
  const dragStartScroll = useRef(0)

  useEffect(() => {
    if (!lenis) return

    const update = () => {
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      const scrollable = docHeight - winHeight
      const ratio = winHeight / docHeight
      const th = Math.max(ratio * winHeight, 40)
      setThumbHeight(th)
      const scrolled = lenis.scroll ?? window.scrollY
      const pos = scrollable > 0 ? (scrolled / scrollable) * (winHeight - th) : 0
      setThumbTop(pos)
    }

    lenis.on('scroll', update)
    update()

    return () => lenis.off('scroll', update)
  }, [lenis])

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging.current || !lenis) return
      const track = trackRef.current
      if (!track) return
      const trackHeight = track.clientHeight
      const delta = e.clientY - dragStartY.current
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      const scrollable = docHeight - winHeight
      const scrollDelta = (delta / (trackHeight - thumbHeight)) * scrollable
      const target = Math.max(0, Math.min(scrollable, dragStartScroll.current + scrollDelta))
      lenis.scrollTo(target, { immediate: false, duration: 0.6 })
    }

    const onMouseUp = () => { dragging.current = false }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [lenis, thumbHeight])

  const onThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    dragging.current = true
    dragStartY.current = e.clientY
    dragStartScroll.current = lenis?.scroll ?? window.scrollY
  }

  const onTrackClick = (e: React.MouseEvent) => {
    if (!lenis || !trackRef.current) return
    const track = trackRef.current
    const clickY = e.clientY - track.getBoundingClientRect().top
    const docHeight = document.documentElement.scrollHeight
    const winHeight = window.innerHeight
    const scrollable = docHeight - winHeight
    const ratio = clickY / track.clientHeight
    lenis.scrollTo(ratio * scrollable, { duration: 1.0 })
  }

  return (
    <div
      ref={trackRef}
      onClick={onTrackClick}
      className="fixed top-0 right-0 z-[9999] w-[10px] h-screen"
      style={{ background: 'rgba(0,0,0,0.06)' }}
    >
      <div
        ref={thumbRef}
        onMouseDown={onThumbMouseDown}
        style={{
          position: 'absolute',
          top: thumbTop,
          height: thumbHeight,
          width: '100%',
          background: 'rgba(252,113,20,0.7)',
          borderRadius: 3,
          cursor: 'grab',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(252,113,20,1)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(252,113,20,0.7)')}
      />
    </div>
  )
}
