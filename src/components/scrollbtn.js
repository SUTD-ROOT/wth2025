import { FaChevronUp } from 'react-icons/fa6';

const scrollbtn = ({top}) => {

    function scrollup() {
        console.log(top)
        top.current.scrollIntoView({ behavior: 'smooth'})
    }
    return ( 
        <div className="scroll" onClick={() => scrollup()} style={styles.scrollBtn}>
                <FaChevronUp/>
        </div>
     );
}

const styles = {
    scrollBtn: {
        cursor: "pointer",
        backgroundColor: "#7C85D7",
        borderRadius: "50%",
        width: "45px",
        height: "45px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
}
 
export default scrollbtn;