import React,{useEffect,useState} from 'react'

const ApiDisplay = () => {
    const [payload, setPayload] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
        .then(data =>console.log(data))
        .catch(error=>console.error('Error',error))


        /*
        for post request

        const newPost = { title: 'New Post', body: 'Content of the new post.' };

            fetch('https://api.example.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
            })
            .then(response => response.json())
            .then(data => console.log('Created Post:', data));
            .catch(error=>console.error('Error',error))



        */

    })
  return (
    <div>
        <ul>
            {}
        </ul>
      
    </div>
  )
}

export default ApiDisplay
