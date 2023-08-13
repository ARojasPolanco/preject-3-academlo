import axios from "axios"
import { useEffect, useState } from "react"
import "./ResidentCard.css"

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
        <article className="bg-purple w-[260px] h- grid grid-rows-[auto_auto] place-items-center">
            <header className="relative">
                <img className="h-[150px] aspect-square border-solid border-[8px] border-red-wine rounded-full" src={residentInfo?.image} alt="" />
                <div className="bg-dark-gray flex gap-2 justify-center items-center w-[90px] p-[2px] rounded-full text-white text-sm absolute bottom-6 right-1/2 translate-x-1/2">
                    <div className={`h-[10px] aspect-square rounded-full ${residentStatus[residentInfo?.status]}`}></div>
                    {residentInfo?.status}
                </div>
            </header>
            <section className="">
                <div className="">
                    <h3 className="">{residentInfo?.name}</h3>
                    <ul className="">
                        <li className=""><span className="">Species</span> {residentInfo?.species}</li>
                        <li className=""><span>Origin</span> {residentInfo?.origin.name}</li>
                        <li className=""><span>Times appear</span> {residentInfo?.episode.length}</li>
                    </ul>
                </div>
                <div className=""></div>
            </section>
        </article>
    )
}

export default ResidentCard