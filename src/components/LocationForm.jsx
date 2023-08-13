const LocationForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="overflow-hidden w-[260px] rounded-full bg-white pl-4 border-[4px] border-red-wine flex justify-between font-bold mt-8">
            <input
                className="w-[66%] outline-none text-sm font-light"
                min={1}
                max={126}
                id="newLocation"
                placeholder="Type a Location id..."
                type="number"
            />
            <button className="bg-light-yellow p-2 px-6 border-l-4 border-red-wine rounded-full text-lg text-red-wine">Search</button>
        </form>
    )
}

export default LocationForm