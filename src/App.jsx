import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import { links } from './config/data';


// const url = (name, wrap = false) =>`${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;
const url = (name, wrap = false) =>`${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

export default function App() {
  const parallax = useRef(null);

  const gradient = ["#4484ce", "#1ad7c0", "#ff9b11", "#9b59b6", "#ff7f7f", "#ecf0f1"]

  return (
    <div className='w-full h-[100vh]' style={{
      background: `linear-gradient(136deg,${gradient})`,
      backgroundSize: "1200% 1200%",
    }}>
      <Navbar/>
      <Parallax ref={parallax} pages={4}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
        <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: 'yellow' }} />

        <ParallaxLayer
        className='text-white w-'
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src='../images/vscode.png' style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src='../images/cloud.svg' style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src='../images/vscode.png' style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src='../images/cloud.svg' style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src='../images/cloud.svg' style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src='../images/cloud.svg' style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src='../images/cloud.svg' style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src='../images/cloud.svg' style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src='../images/cloud.svg' style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src='../images/cloud.svg' style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src='../images/cloud.svg' style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src='../images/cloud.svg' style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true),
          }}
        />

        {/* offset 3 ke liye samaan*/}
        {/* <ParallaxLayer
          offset={3}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true),
          }}
        /> */}
        {/* end */}


        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            marginTop: '15rem',
            justifyContent: 'center',
          }}>
          {/* <img src={url('server')} style={{ width: '20%' }} /> */}
          <HeroSection links={links}/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src={url('bash')} style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(3)}>
          <img src={url('clients-main')} style={{ width: '40%' }} />
        </ParallaxLayer>



        <ParallaxLayer
          offset={3}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(0)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src={url('bash')} style={{ width: '40%' }} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
