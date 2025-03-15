
import BillsList from "./BillsList";
import CreateBillCategory from "./CreateBillCategory";
import useFetch from "./useFetch";

const Home = () => {
   const { data: bills, isPending,  error } = useFetch('http://localhost:8000/bills');

   

    return ( 
        
        <div className="home">
            <CreateBillCategory />
            { error && <div> {error} </div> }
            { isPending && <div> Loading... </div> }
            { bills && <BillsList bills = {bills} /> } 
            
        </div>
     );
}
 
export default Home;