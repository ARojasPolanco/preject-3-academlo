import { useEffect } from "react"
import { getRandomDimension } from "./utils/random"
import { useState } from "react"
import axios from "axios"
import LocationForm from "./components/LocationForm"
import LocationInfo from "./components/LocationInfo"
import ResidentList from "./components/ResidentList"

function App() {
  const [currentLocation, setCurrentLocation] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newLocation = e.target.newLocation.value

    fetchDimension(newLocation)
  }

  const fetchDimension = (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`

    axios
      .get(url)
      .then(({ data }) => setCurrentLocation(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    const randomDimension = getRandomDimension(126)
    fetchDimension(randomDimension)
  }, [])

  return (
    <main className="min-h-screen text-black bg-[url(/images/bg-rm.jpg)] bg-cover p-4 font-Nunito">
      <section>
        <img className="w-[300px] pt-8" src="/images/logo-ram.png" alt="" />
      </section>
      <LocationForm handleSubmit={handleSubmit} />
      <LocationInfo currentLocation={currentLocation} />
      <ResidentList residents={currentLocation?.residents ?? []} currentLocation={currentLocation} />
    </main>
  )
}

export default App
