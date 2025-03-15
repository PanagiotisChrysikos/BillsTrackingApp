import { useState } from "react";

const Create = () => {
    const [date, setDate] = useState('');
    const [cost, setCost] = useState('');
    const [chooseBill, setChooseBill] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const bill = {date, cost};

    

    fetch('http://localhost:8000/bills', {
        method: 'POST',
        headers: { "Content-type": "application/json"},
        body: JSON.stringify(bill)
    }).then(() => {
        console.log('new bill added')
    })
    }
    

    return ( 
        <div className="create">
            <h2>Add a new bill</h2>
            <form onSubmit = {handleSubmit}>
                <label>Description: </label>
                <input 
                    type="text" 
                    required
                    value = {date}
                    onChange = {(e) => setDate(e.target.value)}
                />

                <label>Cost: </label>
                <input 
                    type="text" 
                    required
                    value = {cost}
                    onChange = {(e) => setCost(e.target.value)}
                />

                <label>Choose a bill</label>
                <select
                    value = {chooseBill}
                    onChange = {(e) => setChooseBill(e.target.value)}>
                    <option value = "ΔΕΗ">ΔΕΗ</option>
                    <option value = "ΕΥΔΑΠ">ΕΥΔΑΠ</option>
                    <option value = "ΖΕΝΙΘ">ΖΕΝΙΘ</option>
                </select>

                <button>Add bill</button>
            </form>

        </div>
        
     );
}
 
export default Create;