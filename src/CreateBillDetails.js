import { useState } from "react";
import useFetch from "./useFetch";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

const CreateBillDetails = () => {
    const [newCost, setNewCost] = useState({ date: '', value: null });
    const { data: bills, error, isPending } = useFetch('http://localhost:8000/bills');
    const {id} = useParams();
    const history = useHistory();

    const handleSubmit = (e) => {
       

        // Find the bill with title "ΔΕΗ" using filter (returns an array)
        const filteredBills = bills.filter(bill => bill.id === id);


        // Since filter returns an array, get the first item
        const deiBill = filteredBills[0];

        // Create updated cost array with the new cost added
        const updatedCost = [...deiBill.cost, newCost];

        // Prepare updated bill object
        const updatedBill = { ...deiBill, cost: updatedCost };

        // Send PUT request to update only the targeted bill
        fetch(`http://localhost:8000/bills/${deiBill.id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedBill)
        }).then(() => {
            console.log('New cost added');
            history.pushState('/bills/:id')
        });
    };

    return (
        <div className="create-cost">
            <h2>Add new cost</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="date"
                    required
                    value={newCost.date}
                    onChange={(e) => setNewCost({ ...newCost, date: e.target.value })}
                />
                <input
                    type="number"
                    required
                    value={newCost.value || ''}
                    onChange={(e) => setNewCost({ ...newCost, value: parseFloat(e.target.value) })}
                />
                <button>Add cost</button>
            </form>
        </div>
    );
};

export default CreateBillDetails;
