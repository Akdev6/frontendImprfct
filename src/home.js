import { Link } from "react-router-dom"

const home=()=>{
    const nav={
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px', // Space between items
        padding: '10px 0',
        background: 'rgb(76, 175, 80)',
    }
    
    const navitem = {
        display: 'flex',
        float: 'left', // Optional when using flexbox
        gap: '20px', // Removed the semicolon
        listStyleType: 'none', // Removes bullets or numbers
      };
      
      const brandName={
        color:"white",
      }
    return(
       <div>
        <div>
        <nav style={nav}>
            <h2 style={brandName}>Impract</h2>
            <ul style={navitem}>
            <li>
                <Link to="/">Home</Link>
            </li>           
            <li>
                <Link to="/leaderboard">Leaderboard</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
            {/* <li>
                <Link to="/referralSystem/:referralCode" style={{display:"none"}}>referral System</Link>
            </li> */}
            <li>
                <Link to="/login">Login</Link>
            </li>
            </ul>
        </nav>
        </div>
        <div>
            <h1>Impract Referral Poratl

            </h1>
        </div>
       </div>
        
    )
}
export default home