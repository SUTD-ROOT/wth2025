import background1 from '../background1.svg';

const Banner = () => {
return (
  <div>
    <div classname='banner' style={{ position: 'relative' }}>
      <div className='banner-image'>
        <img className='banner_logo' src={background1} alt="banner" />
      </div>
      <div className= 'overlay-text'>
        <p className="Title">WHAT THE HACK 2025</p>
        <p className="Title2">Dream big, Hack bigger</p>
        <p className="Title3">19 - 21 September 2025</p> 
        <p className="Title4">@Singapore University of Technology and Design</p> 
        <p className="Title5"><a href="https://forms.office.com/r/izxPR7qcrg" target="_blank">Sign Up Now!</a></p>
      </div>
    </div>
  </div>
    );
}
 
export default Banner;
