import { useDocumentTitle } from "../hooks/useDocumentTitle"
import { useFetch } from "../hooks/useFetch"

export function Home() {

    useDocumentTitle('Mon blog: Home')

    const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000')

    return <div className="flex flex-col justify-center items-center">
        <h1>Mon Blog</h1>
        {loading && <div className="text-center">Chargement...</div>}
        {data && <div className="grid grid-cols-3 gap-4 place-items-center w-3/6 grid-flow-row">
            {data.map((article) => {
                return <div className="flex flex-col max-w-64 shadow-md rounded-md justify-between gap-5">
                    <img className=" object-fill rounded-md" src="https://www.etudestech.com/wp-content/uploads/2023/08/adobestock_621380970-1536x1024.jpeg" alt="test" />
                    <div>
                        <p className=" font-bold">{article.title}</p>
                        <p>{article.body}</p>
                    </div>
                </div>
            })}
            </div>}
    </div>
}