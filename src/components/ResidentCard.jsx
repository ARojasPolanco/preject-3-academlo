import axios from "axios"
import { useEffect, useState } from "react"
import "./ResidentCard.css"
import ListInfoResident from "./ListInfoResident"

const ResidentCard = ({ residentUrl }) => {
    const [residentInfo, setResidentInfo] = useState(null)

    const residentStatus = {
        Alive: "bg-green-apple",
        Dead: "bg-red",
        unknown: "bg-gray-blue"
    }

    useEffect(() => {
        axios
            .get(residentUrl)
            .then(({ data }) => setResidentInfo(data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <article className="w-[260px] h-80 grid grid-rows-[auto_auto] place-items-center select-none">
            <header className="relative z-10">
                <img className="h-[150px] aspect-square border-solid border-[8px] border-red-wine rounded-full" src={residentInfo?.image} alt="" />
                <div className="bg-dark-gray/70 flex gap-2 justify-center items-center w-[90px] p-[2px] rounded-full text-white text-sm absolute bottom-6 right-1/2 translate-x-1/2">
                    <div className={`h-[10px] aspect-square rounded-full animate-pulse ${residentStatus[residentInfo?.status]}`}></div>
                    {residentInfo?.status}
                </div>
            </header>
            <section className="border-8 h-[250px] bg-purple border-red-wine rounded-3xl w-full p-6 relative -mt-14 hover:h-[250px] bodyCard transition-all duration-700">
                <div className="bg-lila absolute h-full w-[95%] left-0 top-0 rounded-special"></div>
                <div className="absolute w-full left-0 top-0">
                    <h3 className="bg-light-yellow h-[130px] flex items-center justify-center text-2xl text-center font-bold text-red-wine pb-4 pt-[70px] rounded-[15px] w-full scaleCard transition-all duration-700">{residentInfo?.name}</h3>
                    <ul className="text-red-wine p-4 text-sm grid grid-rows-3 gap-2">
                        <ListInfoResident residentInfo={residentInfo?.species} residentProperties={"SPECIES: "} />
                        <ListInfoResident residentInfo={residentInfo?.origin.name} residentProperties={"ORIGIN: "} />
                        <ListInfoResident residentInfo={residentInfo?.episode.length} residentProperties={"TIMES APPEAR: "} />

                    </ul>
                </div>
            </section>
        </article>
    )
}

export default ResidentCard