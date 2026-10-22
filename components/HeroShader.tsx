'use client'

import { useEffect, useRef } from 'react'

const VERT = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}'

// Dégradé lent entre deux couleurs du thème, déformé par un bruit doux
const FRAG = `
precision mediump float;
uniform vec2 r;
uniform float t;
uniform vec3 a;
uniform vec3 b;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){
  vec2 i=floor(p),f=fract(p);
  f=f*f*(3.-2.*f);
  return mix(mix(h(i),h(i+vec2(1.,0.)),f.x),mix(h(i+vec2(0.,1.)),h(i+1.),f.x),f.y);
}
void main(){
  vec2 uv=gl_FragCoord.xy/r;
  float w=n(uv*2.5+vec2(t*.05,t*.03));
  float v=n(uv*3.5+w*2.+vec2(-t*.04,t*.06));
  vec3 c=mix(b,a,smoothstep(.15,.85,mix(uv.y,v,.6)));
  c+=.04*sin(t*.4+uv.x*3.);
  gl_FragColor=vec4(c,1.);
}`

const cssColor = (name: string) => {
  const hex = getComputedStyle(document.documentElement).getPropertyValue(name).trim().slice(1)
  return [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
}

// Sans WebGL, le canvas reste transparent et le dégradé CSS du parent s'affiche
export default function HeroShader() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const gl = canvas.getContext('webgl', { antialias: false })
    if (!gl) return

    const prog = gl.createProgram()!
    for (const [type, src] of [[gl.VERTEX_SHADER, VERT], [gl.FRAGMENT_SHADER, FRAG]] as const) {
      const shader = gl.createShader(type)!
      gl.shaderSource(shader, src)
      gl.compileShader(shader)
      gl.attachShader(prog, shader)
    }
    gl.bindAttribLocation(prog, 0, 'p')
    gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return
    gl.useProgram(prog)

    // Un triangle qui couvre tout le canvas
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    gl.enableVertexAttribArray(0)
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(prog, 'r')
    const uTime = gl.getUniformLocation(prog, 't')
    gl.uniform3fv(gl.getUniformLocation(prog, 'a'), cssColor('--sky'))
    gl.uniform3fv(gl.getUniformLocation(prog, 'b'), cssColor('--accent-soft'))

    let time = 0
    let raf = 0
    const render = () => {
      gl.uniform1f(uTime, time)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }
    const loop = (ms: number) => {
      time = ms / 1000
      render()
      raf = requestAnimationFrame(loop)
    }
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.5)
      canvas.width = canvas.clientWidth * dpr
      canvas.height = canvas.clientHeight * dpr
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.uniform2f(uRes, canvas.width, canvas.height)
      render()
    }

    // Animation seulement si le hero est visible et si l'utilisateur accepte le mouvement
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ro = new ResizeObserver(resize)
    const io = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(raf)
      if (entry.isIntersecting && !still) raf = requestAnimationFrame(loop)
    })
    ro.observe(canvas)
    io.observe(canvas)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
    }
  }, [])

  return <canvas ref={ref} aria-hidden="true" />
}
