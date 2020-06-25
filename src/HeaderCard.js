import React, { Component } from 'react';
import './HeaderCard.css'

function HeaderCard(props){
        return(
            <div className="card_container">
                <h4 className="card_header">{props.card_header}</h4>
                <a href="#" className="card_info">{props.card_info}</a>
                <p className="percentage">+4%</p>
            </div>
        )
}


/*
class VygWidget extends Component {

    state = {}

    function loadData() {
        //load data from firebase... add to state{}
    }


    function renderContent() {
        // to popuate the elements inside <div .vyg_widget_container>
        return (
                <h4 className="card_header">{this.props.card_header}</h4>
                <a href="#" className="card_info">{this.props.card_info}</a>
                )
    }

  render() {
        return(
            <div className="vyg_widget_container"> + renderContent() + </div>
            </div>
        )
    }
}


*/

export default HeaderCard;