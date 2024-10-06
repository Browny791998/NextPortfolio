import {Particles} from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, {useCallback} from 'react';

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine:any) => {
    await loadFull(engine);
  },[]);

  const particlesLoaded  = useCallback(async() => {},[])

  return <Particles
  className='w-full h-full absolute translate-z-0'
  id=' ' init={particlesInit} loaded={particlesLoaded}
  options={{
    background: {
      color: '',
    },
    fpsLimit: 40,
    interactivity: {
      detectsOn: 'canvas',
      events: {
        resize: true
      },
    },
    particles: {
      color: {
        value: "#f1f1f1"
      },
      number: {
        density: {
          enable: true,
          area: 1080
        },
        limit: 0,
        value: 500,
      },
      opacity: {
        animation: {
          enable: true,
          minimumValue: 0.5,
          speed: 2,
          sync: false,
        },
        random: {
          enable: true,
          minimumValue: 0.1,
        },
        value: 1,
      },
      shape: {
        type: 'circle',

      },
      size: {
        random: {
          enable: true,
          minimumValue: 0.5
        },
        value: 1
      }
    }
  }}
  />
};

export default ParticleBackground;
