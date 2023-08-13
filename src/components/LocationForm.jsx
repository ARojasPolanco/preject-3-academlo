const LocationForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="overflow-hidden w-[260px] rounded-full bg-white pl-4 border-[4px] border-red-wine flex justify-between font-bold texl-lg mt-8">
            <input
                className="w-[66%] outline-none"
                min={1}
                max={126}
                id="newLocation"
                placeholder="Type a Location id..."
                type="number"
            />
            <button className="bg-light-yellow p-2 px-8 border-l-4 border-red-wine rounded-full">Search</button>
        </form>
    )
}

export default LocationForm