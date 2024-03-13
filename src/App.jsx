import { useState } from "react"
import { useIncrement } from "./hooks/useIncrement"
import { useToggle } from "./hooks/useToggle"
import { useDocumentTitle } from "./hooks/useDocumentTitle"
import { useFetch } from "./hooks/useFetch"

function App() {

  //https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000

  const [checked, toggleCheck] = useToggle()

  const [count, incrCount, decrCount] = useIncrement(10)

  const [name, setName] = useState('')
  useDocumentTitle(name ? `Editer ${name}` : null)

  const {loading, data, errors} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=3000')

  return <div className='flex flex-col gap-2 p-8'>
    <div>
      <h2 className="font-bold" >Hook personnalisé toggleCheck</h2>
      <div className="flex gap-2 p-4">
        <input type="checkbox" checked={checked} onChange={toggleCheck} />
        {checked && "Je suis checked"}
      </div>
    </div>
    <div>
      <h2 className="font-bold" >Hook personnalisé useIncrement</h2>
      <div className="flex items-center gap-4 my-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={decrCount}
          >
          -
        </button>
        {count}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={incrCount}
          >
          +
        </button>
      </div>
    </div>
    <div>
      <h2 className="font-bold" >Modifier le titre de la page avec le hook perso useDocumentTitle</h2>
      <input className="border-2 rounded-md mt-4" type="text" value={name} onChange={e => setName(e.target.value)} />
    </div>
    <div>
      { loading && <div>Chargement...</div> }
      { data && <div>{
          data.map(user => {
            return <div key={user.id} className=" w-1/2">
              <h2 className="font-bold" >{user.id}</h2>
              <h3 className=" font-semibold">{user.i}{user.title}</h3>
              <p>{user.body}</p>
            </div>
          })
        }</div> }
    </div>
  </div>
}

export default App
