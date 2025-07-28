import final_sponsor from "../final_sponsor.png"

const Sponsor = () => {
    return (
        <div className= "sponsor">
            <div className="sponsor-header"> Special Thanks to our sponsors</div>
            <img className="bottom-image"style={{position: "static"}} src={final_sponsor} alt="Bottom" />
        </div>
      
    );
}
 
export default Sponsor;