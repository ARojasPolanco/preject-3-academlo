const LocationInfo = ({ currentLocation }) => {
    return (
        <section className="flex flex-col items-center bg-red-wine mt-4 p-2 rounded-3xl text-white shadow-md gap-2 w-[260px]">
            <h2 className="text-xl font-bold">{currentLocation?.name}</h2>
            <ul className="grid grid-rows-3 place-items-start gap-1">
                <li>Type: {currentLocation?.type}</li>
                <li>Dimension: {currentLocation?.dimension}</li>
                <li>Population: {currentLocation?.residents.length}</li>
            </ul>
        </section>
    )
}

export default LocationInfo