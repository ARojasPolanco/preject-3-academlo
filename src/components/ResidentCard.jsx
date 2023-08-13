import axios from "axios"
import { useEffect, useState } from "react"
import "./ResidentCard.css"

const ResidentCard = ({ residentUrl }) => {
    const [residentInfo, setResidentInfo] = useState(null)

    const residentStatus = {
        Alive: "bg-green-500",
        Dead: "bg-red-500",
        unknown: "bg-slate-500"
    }

    useEffect(() => {
        axios
            .get(residentUrl)
            .then(({ data }) => setResidentInfo(data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <article className="">
            <header className="">
                <img className="" src={residentInfo?.image} alt="" />
                <div className="">
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