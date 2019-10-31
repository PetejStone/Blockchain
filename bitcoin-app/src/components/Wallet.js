import React, {useState} from 'react'


function Wallet() {
    const [id, setId] = useState('')
    const handleId = (e) => {
        e.preventDefault()
        console.log(id)
    }


    return (
        <div>
            <h1>Hello</h1>

            <form onSubmit={e=>handleId(e)}>
                <input onChange={e => setId(e.target.value)} type="text" placeholder="What is your ID?" value={id}/>
            </form>
        </div>
    )
}

export default Wallet