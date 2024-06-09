export default function Home()
{
    return(

        <div style={{ 
            backgroundColor:'lightblue'
            ,minHeight: "100vh", // Set min height to ensure the background image covers the entire screen
            backgroundSize: "cover", // Adjust background size if needed
            backgroundRepeat: "no-repeat", // Adjust background repeat if needed
            marginTop:'0px'
          }}>
            <br></br>   <br></br>   <br></br>   <br></br> <br></br>   <br></br>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1><u>React+Spring Boot CRUD Demo</u></h1>
    </div>      
    <br></br>
    
     <ul>
       <li><h3>ADD PRODUCT - useState() , axios.post(EndPoint,data,headers)</h3></li>
       <li><h3>VIEW ALL PRODUCTS - useEffect() , axios.get(EndPoint), map() Function </h3></li>
       <li><h3>UPDATE PRODUCT - View Product By Id , useState(),useEffect(),NamedParam-useParams(),axios.get(),axios.put()</h3></li>
       <li><h3>DELETE PRODUCT - axios.delete(),QueryParam-id</h3></li>
       
       </ul>
        </div>
    );
}