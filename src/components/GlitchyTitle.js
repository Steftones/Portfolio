import { useEffect, useState } from 'react'
import titleNormal from '../assets/titleImages/titleNormal.png'
import glitch1 from '../assets/titleImages/glitch1.gif'
import glitch2 from '../assets/titleImages/glitch2.gif'
import glitch3 from '../assets/titleImages/glitch3.gif'
import glitch4 from '../assets/titleImages/glitch4.gif'

const GlitchyTitle = () => {

  const [displayGlitch, setDisplayGlitch] = useState(true)

  const glitchImages = [glitch1, glitch2, glitch3, glitch4]

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayGlitch(!displayGlitch);
    }, (Math.random() * (1000 - 500) + 500 ));
    return () => clearInterval(interval);
  });

  return <img src={
    displayGlitch
      ? glitchImages[Math.floor(Math.random() * glitchImages.length)]
      : titleNormal
  } alt="Stefan Sokolowski"/>
}
 
export default GlitchyTitle;