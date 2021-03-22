
import enjoy from '../assets/images/homepage/enjoyable-place-desktop.jpg'
import { PixelPerfect } from '../cmps/PixelPerfect'


export function Home() {

  return (
    // <div className="main-container" style={{ backgroundImage: `url(${hero})`, height: `820px` }}>
    <div className="layout" >
      <header className="flex" >
        <div className="container " style={{ position: 'absolute', margin: "30px 0 0 65px  " }}>
          <h2>dine</h2>
          <h1>Exquisite dining since 1989</h1>
          <p >Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
          <button> <span> BOOK A TABLE</span></button>
        </div>
        <img src={require('../assets/images/homepage/hero-bg-desktop.jpg').default} alt="hero-bg-desktop" />
      </header>
      <main style={{ height: '1441px' }}>
        <div className="container-main flex">
          <img src={enjoy} style={{ margin: '-20px 0 0 50px', width: 540, height: 720 }} alt="" />
          <div>
            <h2>Enjoyable place for all the family</h2>
            <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
          </div>
        </div>
        <div className="container-main flex reverse">
          <img src={enjoy} style={{ margin: '-20px 0 0 50px', width: 540, height: 720 }} alt="" />
          <div>
            <h2>The most locally sourced food</h2>
            <p>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
          </div>
        </div>

      </main>
      <PixelPerfect />
    </div>
  )
}
