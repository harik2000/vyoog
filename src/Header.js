// import './Header.css'
// import HeaderCard from "./HeaderCard";
// import React from "react";
// import './sidebar.css'
// import db from "./base";
// import Widget from "./Widget";

// let data = [];
// db.collection("vyg_widgets")
// .get()
// .then(querySnapshot => {
//    data = querySnapshot.docs.map(doc => doc.data());
// });


// function Header(){

//     return(
//         <div className="header">
//             <div className="card_deck">
                
//                 {data.map((widget) => {
//                     return(
//                         <Widget info={widget.init_url}></Widget>
//                     )
//                 })}
//                 <HeaderCard card_header={"Order Bookings"} card_info={"12"}></HeaderCard>

//                 <HeaderCard card_header={"Invoice Amt"} card_info={"₹72,92,400"}></HeaderCard>

//                 <HeaderCard card_header={"Previous Month Invoice Amt"} card_info={"₹13,94,268"}></HeaderCard>

                

//             </div>
//         </div>
//     );
// }
// export default Header;

import React, {useState, useEffect} from "react";
import db from "./base";
import './Header.css'
import './sidebar.css'
import Widget from "./Widget";

const Header = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
       db.collection("vyg_widgets")
       .get()
       .then(querySnapshot => {
        console.log(data)
        setData(querySnapshot.docs.map(doc => doc.data())); 
     });
    }, [])

     return (
        <div className="header">
            <div className="card_deck">
            
            
            {data.map((widget) => {
                return(
                    <Widget info={widget.init_url}></Widget>
                )
            })}

            </div>
        </div>
     )
}

export default Header;