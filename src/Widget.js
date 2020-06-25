import React from "react";
import db from "./base";
import './HeaderCard.css'

function Widget(props){
    const [title, setTitle] = React.useState([]);
    const [total, setTotal] = React.useState([]);
    const [variance, setVariance] = React.useState([]);

    function getData(collection){
        let data = [];
        db.collection(collection)
            .get()
            .then(querySnapshot => {
            data = querySnapshot.docs.map(doc => doc.data());
            setTitle(data[0].title)
            setTotal(data[0].total)
            setVariance(data[0].variance * 100)
        });
    }
    return(
        <div className="card_container">
            {getData(props.info)}
            <h4 className="card_header">{title}</h4>
            <a href="#" className="card_info">{total}</a>
            <p className="percentage">{variance}%</p>
        </div>
    )
}
export default Widget;