import { list } from "postcss"

const Pagination = ({ pages, setCurrentpage, currentpage }) => {
    return (
        <ul className="flex gap-4 flex-wrap justify-center">
            {
                pages.map((page) => (
                    <li className={`h-12 aspect-square bg-light-yellow border-4 border-red-wine rounded-full flex justify-center items-center text-red-wine text-xl font-bold cursor-pointer hover:scale-110 transition-transform ${currentpage === page && "bg-lila text-red-wine border-4 border-red-wine scale-110 transition-all"}`} onClick={() => setCurrentpage(page)} key={page}>{page}</li>
                ))}

        </ul>
    )
}

export default Pagination