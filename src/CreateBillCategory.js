import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CreateBillCategory = () => {
    const [title, setTitle] = useState('');
    const [cost, setCost] = useState([{date:'', value: null}])
    const history = useHistory();

   
       const handleSubmit = (e) => {
        
        const bill = {title,cost};
        
    

        fetch('http://localhost:8000/bills', {
            method: 'POST',
            headers: { "Content-type": "application/json"},
            body: JSON.stringify(bill)
        }).then(() => {
            console.log('new bill added')
            history.push('/')
            
        })

        
    }
       
   
       return ( 
           <div className="create-category">
               <h2>Add new bill category</h2>
               <form onSubmit = {handleSubmit}>
                   <input 
                       type="text" 
                       required
                       value = {title}
                       onChange = {(e) => setTitle(e.target.value)}
                   />
   
                   
                   <button>Add category</button>
               </form>
   
           </div>
           
        );
   }

 
export default CreateBillCategory;