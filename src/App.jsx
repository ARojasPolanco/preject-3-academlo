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

  const btnGoToUp = () => {
    const buttonUp = document.querySelector('.bx-chevron-up-circle')
    buttonUp.addEventListener('click', () => window.scrollTo(0, 0))
  }

  const fetchDimension = (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`

    axios
      .get(url)
      .then(({ data }) => {
        setCurrentLocation(data)
        loaderScreen()
      })
      .catch((err) => {
        console.log(err);
        error404();
      });
  }

  const staticDimension = () => {
    fetchDimension(EMPTY_DIMENSION_SEARCH)
  }

  useEffect(() => {
    staticDimension()
    setTimeout(() => {
      const randomDimension = getRandomDimension(126)
      fetchDimension(randomDimension)
    }, 2000);
  }, [])

  return (
    <main className="min-h-screen text-black bg-[url(/images/bg-rm.jpg)] bg-bottom px-4 font-Nunito grid grid-rows-[repeat(4,auto)] gap-8 place-items-center relative overflow-hidden">
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

      <div className="text-red-wine bg-lila rounded-full h-10 aspect-square flex justify-center items-center border-4 border-red-wine fixed bottom-4 right-4 cursor-pointer" onClick={btnGoToUp}>
        <i className='bx bx-chevron-up-circle text-3xl'></i>
      </div>
    </main>
  )
}

export default App
