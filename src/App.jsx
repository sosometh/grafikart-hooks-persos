import { useState } from "react"
import { useIncrement } from "./hooks/useIncrement"
import { useToggle } from "./hooks/useToggle"
import { useDocumentTitle } from "./hooks/useDocumentTitle"

function App() {

  const [checked, toggleCheck] = useToggle()

  const [count, incrCount, decrCount] = useIncrement(10)

  const [name, setName] = useState('')
  useDocumentTitle(name ? `Editer ${name}` : null)

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
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={decrCount}
          >
          -
        </button>
        {count}
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
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
  </div>
}

export default App
