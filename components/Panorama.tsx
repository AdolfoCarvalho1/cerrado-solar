'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import type { Frame } from '@/lib/images'

export default function Panorama({ frames }: { frames: Frame[] }) {
  const ref = useRef<HTMLElement | null>(null)
  const [idx, setIdx] = useState(0)
  const [progress, setProgress] = useState(0)
  const [failed, setFailed] = useState<Record<string, boolean>>({})
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    frames.forEach((f) => {
      const probe = new Image()
      probe.onerror = () => setFailed((v) => (v[f.src] ? v : { ...v, [f.src]: true }))
      probe.src = f.src
    })
  }, [frames])

  useEffect(() => {
    if (reduced) return
    let raf = 0
    const update = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const travel = el.offsetHeight - window.innerHeight
        const p = Math.min(1, Math.max(0, -rect.top / Math.max(1, travel)))
        setProgress(p)
        setIdx(Math.min(frames.length - 1, Math.floor(p * frames.length)))
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [frames.length, reduced])

  if (reduced) {
    return (
      <section className="pano-static" aria-label="Panorâmica do processo">
        {frames.map((f, i) => (
          <div className="pano-static__item" key={f.src}>
            {f.has !== false ? (
              <img src={f.src} alt={f.alt} loading={i === 0 ? 'eager' : 'lazy'} />
            ) : (
              <div className="pano-static__ph" aria-hidden="true" />
            )}
            <div className="pano-static__copy">
              <p className="pano__kicker">
                <span>{`0${i + 1}`}</span> {f.kicker}
              </p>
              <h2 className="display display--sm">{f.title}</h2>
              <p>{f.text}</p>
              <b>{f.stat}</b>
            </div>
          </div>
        ))}
      </section>
    )
  }

  return (
    <section
      className="pano"
      ref={ref}
      style={{ '--pano-frames': frames.length } as CSSProperties}
      aria-label="Panorâmica do processo"
    >
      <div className="pano__sticky">
        <div className="pano__media">
          {frames.map((f, i) => (
            <div className={`pano__frame ${i === idx ? 'is-on' : ''}`} key={f.src}>
              <div className="pano__ph" data-n={`0${i + 1}`} aria-hidden="true" />
              {f.has !== false && !failed[f.src] && (
                <img
                  src={f.src}
                  alt={f.alt}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  onError={() => setFailed((v) => ({ ...v, [f.src]: true }))}
                />
              )}
            </div>
          ))}
        </div>

        <div className="pano__veil" aria-hidden="true" />

        <div className="pano__copy">
          {frames.map((f, i) => (
            <div className={`pano__text ${i === idx ? 'is-on' : ''}`} key={f.title} aria-hidden={i !== idx}>
              <p className="pano__kicker">
                <span>{`0${i + 1}`}</span> {f.kicker}
              </p>
              <h2 className="display display--sm">{f.title}</h2>
              <p className="pano__desc">{f.text}</p>
              <p className="pano__stat">{f.stat}</p>
            </div>
          ))}
        </div>

        <div className="pano__dots" aria-hidden="true">
          {frames.map((f, i) => (
            <span key={f.src} className={i === idx ? 'is-on' : ''} />
          ))}
          <span className="pano__count">
            {`0${idx + 1}`} / {`0${frames.length}`}
          </span>
        </div>

        <div className="pano__bar" aria-hidden="true">
          <span style={{ transform: `scaleX(${progress})` }} />
        </div>
      </div>
    </section>
  )
}
