import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";
import Create from "./Create";
import CostList from "./CostList";
import CreateBillCategory from "./CreateBillCategory";
import BillsList from "./BillsList";
import CreateBillDetails from "./CreateBillDetails";

const BillDetails = () => {
    const { id } = useParams();
    const { data: bill, error, isPending } = useFetch('http://localhost:8000/bills/' + id);
    const history = useHistory();
    const [costPerMonth, setCostPerMonth] = useState(0);
    const [costPerYear, setCostPerYear] = useState(0);



    const handleClick = () => {
        fetch('http://localhost:8000/bills/' + bill.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="bill-details">
            { isPending && <div>Loading... </div> }
            { error && <div> {error} </div> }
            { bill && (
                <article>
                    <h2>{ bill.title }</h2>
                    <CostList />
                    <CreateBillDetails />
                    <p> Average cost per month: {costPerMonth}€ </p>
                    <button onClick = {handleClick}>Delete</button>
                </article>
            )}
           
        </div>
     );
}
 
export default BillDetails;