import Voting from './Voting';
import Header from './Header';
import CountdownTimer from './Countdown';

function App() {
  const eventDate = new Date('2024-11-29T00:00:00');
  
  return (
    <div className="App">
        <Header />
      <div className="content">
        <h1>Countdown to Deadline for Voting!</h1>
        <CountdownTimer eventDate={eventDate} />
        <Voting />
      </div>
    </div>
      
    );
  }
  

export default App;
