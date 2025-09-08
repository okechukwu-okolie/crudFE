import React,{useState} from 'react'

const MainApp = () => {
    const [input, setInput] = useState('')
    const [todos,setTodos] = useState([])

    const handleSubmit = (e)=>{
        e.preventDefault()

        const addTodos ={
            id: Date.now(),
            input,
            completed:false
        }
        setTodos([...todos, addTodos])
        console.log(todos)
        setInput('')
    }

    const handleInput =(e)=>{
        setInput(e.target.value)
    }
    

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"
                    value={input}
                    onChange={handleInput}
                    placeholder='......add todos here' />

                    <button>Add Todo</button>
        </form>
      
    </div>
  )
}

export default MainApp
