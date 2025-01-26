import { useState } from "react";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const CostList = ( {bill_id}) => {
    const {data: bills, error, isPending} = useFetch('http://localhost:8000/bills')
    const { id } = useParams();
    

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
                                <h3>Date: {cost.date}</h3>
                                <p>Value: {cost.value}</p>
                            </div>
                        ))}
                    </div>
                ))
            }
        </div>
    );
}
 
export default CostList;