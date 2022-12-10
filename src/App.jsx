import Countdown from 'react-countdown';
import "./App.scss";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <span> </span>;
    } else {
        return <span>
            {days/10>=1? '' : '0'}{days}
            :{hours/10>=1? '' : '0'}{hours}
            :{minutes/10>=1? '' : '0'}{minutes}</span>
    }
};
function App() {
  return (
    <div className="App">
        <div className='bg'></div>
      <div className="text">
          <Countdown
              date={'2022-12-20T01:02:03'}
              renderer={renderer}
              zeroPadDays={4}
          />
      </div>
    </div>
  );
}

export default App;
