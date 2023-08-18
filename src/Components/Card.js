import React from "react";
import star from '../Star_1.png'; 
export default function Card(props){
    console.log(props)
    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if(props.item.location==="Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
                <img className="card--image" src = {require(`../Images/${props.item.coverImg}`)} alt="image 1" />
                <div className="card--stats">
                    <img src = {star} className="card--star"/>
                    <span>{props.item.stats.rating}</span>
                    <span className="gray">({props.item.stats.reviewCount}) • </span>
                    <span className="gray">{props.item.location}</span>
                </div>
                <p>{props.item.title}</p>
                <p><span className="bold">From ${props.item.price} </span>/ person</p>
        </div>
    )
}