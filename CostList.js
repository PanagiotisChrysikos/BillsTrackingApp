import { useState,useEffect, use } from "react";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const CostList = ( {bill_id}) => {
    const {data: bills, error, isPending} = useFetch('http://localhost:8000/bills')
    const { id } = useParams();
    const [costPerMonth, setCostPerMonth] = useState(0);
    const [averageCostPerMonth, setAverageCostPerMonth] = useState(0);
    const [costIndex, setCostIndex] = useState(0);


    useEffect(() => {
        if (bills) {
            const filteredBill = bills.find(bill => bill.id === id); 
            if (filteredBill) {
                const totalCost = filteredBill.cost.reduce((acc, cost) => acc + cost.value, 0);
                setCostPerMonth(totalCost);

            }
        }
    }, [bills]);


    const handleRemove = async (billId, costId) => {
        try {
            const updatedBill = bills.find(bill => bill.id === billId);
            if (updatedBill) {
                updatedBill.cost = updatedBill.cost.filter(cost => cost.id !== costId);
                await fetch(`http://localhost:8000/bills/${billId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(updatedBill)
                });
                window.location.reload();
            }
        } catch (err) {
            console.error("Error deleting cost:", err);
        }
    };

    

    return (
        <div className="cost-list">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}

            {/* Filter and display costs for the specific bill */}
            {bills && bills
                .filter(bill => bill.id === id) // Filter for the specific bill
                .map(bill => (
                    <div key={bill.id} className="cost-preview">
                        {/* Now filter costs directly */}
                        {bill.cost.filter(cost => cost)
                        .map((cost, index) => (
                            <div key={index} className="cost-block">
                                <h3> {cost.date} </h3>
                                <p>{cost.value}€ </p>
                                <button 
                                    className="delete-button" 
                                    onClick={() => handleRemove(bill.id, cost.id)}
                                >
                                    Remove
                                </button>

                            </div>
                        ))}
                    </div>
                ))
            }
            {setCostPerMonth != 0 && <p>Total cost: {costPerMonth}€</p>}
            {setAverageCostPerMonth != 0 && <p>Average cost per month: {averageCostPerMonth}€</p>}
        </div>
    );
}
 
export default CostList;