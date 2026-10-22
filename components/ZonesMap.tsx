'use client'

import { useEffect, useRef } from 'react'
import 'maplibre-gl/dist/maplibre-gl.css'

const LABELS: [string, [number, number]][] = [
  ['Levallois-Perret', [2.2874, 48.895]],
  ['Neuilly-sur-Seine', [2.2686, 48.8846]],
  ['Clichy', [2.3064, 48.9044]],
]

const cssVar = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim()

// Carte sans tuiles : fond uni + contours des communes (public/zones.json, source geo.api.gouv.fr).
// Aucun appel à un serveur de cartes, donc pas de cookie ni de clé API.
export default function ZonesMap() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current!
    let map: import('maplibre-gl').Map | undefined
    let cancelled = false

    // La librairie (~800 Ko) se charge seulement quand la carte approche de l'écran
    const io = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const maplibregl = (await import('maplibre-gl')).default
        if (cancelled) return

        const accent = cssVar('--accent')
        map = new maplibregl.Map({
          container: el,
          center: [2.2874, 48.895],
          zoom: 12,
          scrollZoom: false,
          attributionControl: { compact: true, customAttribution: 'Contours : IGN / geo.api.gouv.fr' },
          style: {
            version: 8,
            // URL absolue : le worker de MapLibre ne résout pas les chemins relatifs
            sources: { communes: { type: 'geojson', data: new URL('/zones.json', window.location.href).href } },
            layers: [
              { id: 'fond', type: 'background', paint: { 'background-color': cssVar('--surface-soft') } },
              { id: 'voisins', type: 'fill', source: 'communes', filter: ['!', ['get', 'zone']], paint: { 'fill-color': cssVar('--surface') } },
              { id: 'voisins-bord', type: 'line', source: 'communes', filter: ['!', ['get', 'zone']], paint: { 'line-color': cssVar('--line'), 'line-width': 1 } },
              { id: 'zones', type: 'fill', source: 'communes', filter: ['get', 'zone'], paint: { 'fill-color': accent, 'fill-opacity': 0.28 } },
              { id: 'zones-bord', type: 'line', source: 'communes', filter: ['get', 'zone'], paint: { 'line-color': accent, 'line-width': 2.5 } },
            ],
          },
        })
        map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right')

        // Étiquettes en marqueurs HTML : un calque texte demanderait un serveur de polices
        for (const [name, pos] of LABELS) {
          const label = document.createElement('span')
          label.textContent = name
          label.style.cssText =
            'padding:4px 10px;border-radius:999px;background:var(--surface);color:var(--ink);font:600 13px var(--font-sans);box-shadow:var(--shadow)'
          new maplibregl.Marker({ element: label }).setLngLat(pos).addTo(map)
        }
      },
      { rootMargin: '400px' },
    )
    io.observe(el)

    return () => {
      cancelled = true
      io.disconnect()
      map?.remove()
    }
  }, [])

  return <div ref={ref} style={{ width: '100%', height: '100%' }} />
}
