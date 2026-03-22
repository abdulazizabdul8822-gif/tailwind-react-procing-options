
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/DaisyNav/NavBar/NavBar'
import PricingOption from './components/PricingOptions/PricingOption'

const pricingPromise = fetch("pricingData.json").then(res => res.json());

function App() {


  return (
    <>

      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>
      </main>
    </>
  )
}

export default App
