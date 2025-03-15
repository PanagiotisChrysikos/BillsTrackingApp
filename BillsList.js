import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BillsList = ({ bills }) => {
    

    return ( 
        <div className="bill-list">
            {bills.map((bill) => (
                <div className="bill-preview" key = {bill.id}>
                    <Link to = {`/bills/${bill.id}`}>
                    <h2> {bill.title} </h2>
                    </Link>
                  
                    
                </div>
            ))}
        </div>
     );
}
 
export default BillsList;