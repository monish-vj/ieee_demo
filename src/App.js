import React, { useState } from 'react';
import "./App.css"
import ReactDOM from 'react-dom'
import { useSpring, useSprings, animated, to } from 'react-spring'

function Stack({ image, background }) {
  const [open, setOpen] = useState(false)
  const { f, r } = useSpring({ f: open ? 0 : 1, r: open ? -3 : 3 })
  const cards = useSprings(5, [0, 1, 2, 3, 4].map(i => ({ opacity: 0.2 + i / 5, z: open ? (i / 5) * 80 : 0 })))
  return (
    <div class="container" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {cards.map(({ z, opacity }, index) => (
        <animated.div
          style={{
            opacity,
            background,
            transform: to(
              [z, f.to([0, 0.2, 0.6, 1], [0, index, index, 0]), r],
              (z, f, r) => `translate3d(0,0,${z}px) rotateX(${f * r}deg)`
            )
          }}>
          {index === 4 && <animated.img style={{ transform: f.to([0, 1], ['scale(0.7)', 'scale(1)']) }} src={image} />}
        </animated.div>
      ))}</div>)}

const App = () => {
  return (
    
<div class="main">
  <div className='cards'>
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/9qWx-1.png" background="transparent" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/T0hA-3.png" background="#f7f295" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/QoXU-2.png" background="#ee7074" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/QoXU-2.png" background="#ee7074" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/9qWx-1.png" background="#52649e" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/T0hA-3.png" background="#f7f295" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/T0hA-3.png" background="#f7f295" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/QoXU-2.png" background="#ee7074" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/9qWx-1.png" background="#52649e" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/T0hA-3.png" background="#f7f295" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/QoXU-2.png" background="#ee7074" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/9qWx-1.png" background="#52649e" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/T0hA-3.png" background="#f7f295" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/QoXU-2.png" background="#ee7074" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/9qWx-1.png" background="#52649e" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/T0hA-3.png" background="#f7f295" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/QoXU-2.png" background="#ee7074" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/9qWx-1.png" background="#52649e" />
      {/* <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/T0hA-3.png" background="#f7f295" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/QoXU-2.png" background="#ee7074" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/9qWx-1.png" background="#52649e" /> <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/T0hA-3.png" background="#f7f295" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/QoXU-2.png" background="#ee7074" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/9qWx-1.png" background="#52649e" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/9qWx-1.png" background="#52649e" /> <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/T0hA-3.png" background="#f7f295" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/QoXU-2.png" background="#ee7074" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/9qWx-1.png" background="#52649e" />      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/9qWx-1.png" background="#52649e" /> <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/T0hA-3.png" background="#f7f295" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/QoXU-2.png" background="#ee7074" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/9qWx-1.png" background="#52649e" />      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/9qWx-1.png" background="#52649e" /> <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/T0hA-3.png" background="#f7f295" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/QoXU-2.png" background="#ee7074" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/9qWx-1.png" background="#52649e" />      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/9qWx-1.png" background="#52649e" /> <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/T0hA-3.png" background="#f7f295" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/QoXU-2.png" background="#ee7074" />
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/9qWx-1.png" background="#52649e" /> */}
     </div>

      <div class="bg"></div>
<div class="star-field">
<div class="layer"></div>
<div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="header">
  <div class="info">
  
  <h1 class="jt --debug">
  <span class="jt__row">
    <span class="jt__text">GALLERY</span>
  </span>
  <span class="jt__row jt__row--sibling" aria-hidden="true">
    <span class="jt__text">GALLERY</span>
  </span>
  <span class="jt__row jt__row--sibling" aria-hidden="true">
    <span class="jt__text">GALLERY</span>
  </span>
  <span class="jt__row jt__row--sibling" aria-hidden="true">
    <span class="jt__text">GALLERY</span>
  </span>
</h1>
  </div>
</div>
    </div></div>
  )
}

export default App
