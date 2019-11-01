import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './wallet.css'
function Wallet() {
    const [id, setId] = useState('')
    const [chain, setChain] = useState('')
    const [coins, setCoins] = useState(0)
    const [transactions, setTransactions] = useState('')
    const handleId = (e) => {
        e.preventDefault()
        console.log(id)
    }

    useEffect(() => {
         axios.get('http://localhost:5000/chain')
         .then(res => {
             setChain(res.data.chain)
             setCoins(coins)
            // setTransactions(res.data.chain.transactions)
             let transactions = []
             res.data.chain.map(block => {
                 transactions.push(block.transactions[0])
                 //console.log(transactions)
             })
             setTransactions(transactions)
             
         })
        //console.log(transactions)
        // transactions.map(transaction => {
        //     if (transaction !== undefined) {
        //        setCoins(coins + transaction.amount)
        //     }
            
        // })
        
        
    }, [])

//     useEffect(() => {
//         axios.post('http://localhost:5000/mine', {proof: id: id})
//         .then(res => {
//             console.log(res)
//         })
       
       
       
//    })

   
    
    const countAmount = () => {
        let count = 0
        for (let i=1 ; i < transactions.length ; i ++) {
       
            count += transactions[i].amount
             
         }
         return count
    }

    let count = countAmount()
    
    
    


    return (
        <div className="wrapper">
            <h1>Hello</h1>

            <form onSubmit={e=>handleId(e)}>
                <input onChange={e => setId(e.target.value)} type="text" placeholder="What is your ID?" value={id}/>
            </form>

            <h3>Coins Mined: {count}</h3>

            <h4>Transactions:</h4>
            <div  className="block-wrapper">
                {transactions && transactions.map(transaction => {
                    if (transaction !== undefined) {
                        return <div className="block">
                        <p>Amount Received: {transaction.amount}</p>
                        <p>Recipient: {transaction.recipient}</p>
                        <p>Sender: {transaction.sender}</p>
                        </div>
                    }
                })}
            </div>
        </div>
    )
}

export default Wallet