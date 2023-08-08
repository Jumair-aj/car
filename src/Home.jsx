import React from 'react'

const Home = () => {
    return (
        <div className='homeContainer'>
            <div className='homeText'>
                <h2>Mclaren <br/><span> 1993 F1</span> </h2>
                <p className='desc'>The McLaren F1 is a sports car designed and manufactured by Gordon <br/>Murray and McLaren Automotive. </p>
                <p className='priceP'>From 970,000 $</p>
                <div><button>Learn More</button>
                    <button className='secondBtn'>Contact Us</button></div>
            </div>
        </div>
    )
}

export default Home