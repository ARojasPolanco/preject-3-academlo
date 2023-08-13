import { list } from "postcss"

const Pagination = ({ pages, setCurrentpage, currentpage }) => {
    return (
        <ul className="flex">
            {
                pages.map((page) => (
                    <li className={`${currentpage === page && "text-red-500"}`} onClick={() => setCurrentpage(page)} key={page}>{page}</li>
                ))}
        </ul>
    )
}

export default Pagination