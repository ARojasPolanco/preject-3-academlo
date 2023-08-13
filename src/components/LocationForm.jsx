const LocationForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="overflow-hidden w-full rounded-full bg-white pl-4 border-[4px] border-red-wine flex justify-between">
            <input
                className="w-[66%]"
                min={1}
                max={126}
                id="newLocation"
                placeholder="Type a Location id..."
                type="number" />
            <button className="bg-light-yellow p-2 px-4 rounded-full">Search</button>
        </form>
    )
}

export default LocationForm