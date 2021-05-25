import image from '../images.jpeg'
function Bid(props){
    return(

        <div className="bid">
            <h6>New York Cosmos Jersey</h6>
            <div><img className="item-image" src={image}/></div>
            <div>
                <p>Title</p>
                <p>Price</p>
                <p>Date submitted</p>
                <p>Date posted</p>
            </div>
            <button className="accept">accept</button>
            <button  className="deny">deny</button>
        </div>
    );
}

export default Bid;