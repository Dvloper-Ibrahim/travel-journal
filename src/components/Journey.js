import React from 'react';


export default function Journey(props){
    let country = props.item.location.toUpperCase();
    return (
        <div className='journey'>
            <div className='img'>
                <img src={props.item.imageUrl} alt=''/>
            </div>
            <div className='info'>
                <section className='location'>
                    <img src='./assets/maps-logo.png' alt=''/>
                    <span>{country}</span>
                    <a href={props.item.googleMapsUrl} target="_blank" rel='noreferrer'>
                    View on Google Maps
                    </a>
                </section>
                <section className='details'>
                    <h3>{props.item.title}</h3>
                    <p className='dates'>
                        {props.item.startDate} - {props.item.endDate}
                    </p>
                    <p className='description'>{props.item.description}</p>
                </section>
            </div>
        </div>
    )
}
