import { useEffect } from "react"
import { getRandomDimension } from "./utils/random"
import { useState } from "react"
import axios from "axios"
import LocationForm from "./components/LocationForm"
import LocationInfo from "./components/LocationInfo"
import ResidentList from "./components/ResidentList"
import ModalEmptySearch from "./components/ModalEmptySearch"
import FirstScreen from "./components/FirstScreen"
import { useCatchErrors } from "./utils/hooks/UseCatchErrors"

const EMPTY_DIMENSION_SEARCH = 12

function App() {
  const [currentLocation, setCurrentLocation] = useState(null)
  const { emptySearch, handleCloseModal, emptyError, error404, error404Modal, isLoading, loaderScreen } = useCatchErrors(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newLocation = e.target.newLocation.value
    newLocation === "" ? emptyError(true) & fetchDimension(EMPTY_DIMENSION_SEARCH) : fetchDimension(newLocation)
  }

  const fetchDimension = (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`

    axios
      .get(url)
      .then(({ data }) => {
        setCurrentLocation(data)
        setTimeout(() => {
          loaderScreen()
        }, 2000);

      })
      .catch((err) => {
        console.log(err);
        error404();
      });
  }

  useEffect(() => {
    const randomDimension = getRandomDimension(126)
    fetchDimension(randomDimension)
  }, [])

  return (
    <main className="min-h-screen text-black bg-[url(/images/bg-rm.jpg)] bg-cover bg-center p-4 font-Nunito grid grid-rows-[repeat(4,auto)] gap-8 place-items-center relative overflow-hidden">
      <section>
        <img className="w-[260px] pt-8 min-[500px]:w-[350px]" src="/images/logo-ram.png" alt="" />
      </section>

      {!isLoading && <FirstScreen />}

      <ModalEmptySearch handleCloseModal={handleCloseModal}
        errorModal={emptySearch}
        title={'¿Acaso estás ciego?'}
        body={'Elige una dimensión'}
        footer={'aquí no hay nada'}
        img={"/images/ram-modal-def.jpg"} />

      <ModalEmptySearch handleCloseModal={handleCloseModal}
        errorModal={error404Modal}
        title={'Alguien saboteó la pistola de portales'}
        body={'Fuiste tú'}
        footer={'ERROR 404 PAGE NOT FOUND'}
        img={"/images/ram-error-404.png"} />



      <LocationForm handleSubmit={handleSubmit} />
      <LocationInfo currentLocation={currentLocation} />
      <ResidentList residents={currentLocation?.residents ?? []} currentLocation={currentLocation} />
    </main>
  )
}

export default App
