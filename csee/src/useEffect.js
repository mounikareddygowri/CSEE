import React,{useState,useEffect} from 'react';
import './App.css';
function UseEffect(){
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
        const fetchData=async()=>{
            setLoading(true);
            try{
                const response=await fetch('https://jsonplaceholder.typicode.com/posts');
                const result=await response.json();
                setData(result);
            }
            catch(error){
                console.error('Error fetching data:',error);
            }
            finally{
                setLoading(false);
            }
        };
        fetchData();
    
    },[]);
    if(loading){
        return<p>Loading...</p>;
    }
    return(
        <div classname="app">
            <h1>Data from app</h1>
            <ol>
                {
                    data.map(item=>(
                        <li key={item.id}>{item.title}ss</li>

                    ))}
                    
                
            </ol>
        </div>
    );
}
export default UseEffect;