import { useEffect, useState } from "react";
import Axios from "axios";

function FetchData()
{
    const [data, setData] = useState([]);
    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status === 200)
            {
                setData(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err))
    },[])

    const ListNames = () =>{
        return data.map((val)=>{
            return(
              
                    <table>
            
                    
               
            <tbody>
               <td>
                {val.id}
            </td>
            <td>
                {val.name}
            </td>
            <td>
                {val.username}

            </td>
            <td>
                {val.address.city}

            </td>
            <td>
                {val.address.zipcode}
            </td>
     
            <td>
                {val.website}
            </td>
            <td>
                {val.phone}
            </td>
     
            <td>
                {val.company.name}
            </td>
           
     
          
            </tbody>
            </table>
             
      
)
  
        
    
})

           
            
    }
    return(
        <div>
         
             {ListNames()}
           
        </div>
    )
}
export default FetchData;