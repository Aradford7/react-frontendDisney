import React from "react";
import { Button, Toast, ToastBody, ToastHeader } from 'reactstrap';

// class UserItinerary extends React.Component {
//   render() {
//     if (this.props.userTrips) {
//       return this.props.userTrips.map((trip, i) => {
//         console.log(this.props.userTrips, "this.props.userTrips");
//         return (
//           <li key={i}>
//             <span>Name: {trip.name}</span>
//             <br />
//             <span>Park: {trip.park}</span>
//             <br />
//             <button>Delete Trip</button>
//           </li>

          
//         );
//       });
//     }
//   }
// }

// export default UserItinerary;

class UserItinerary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      show: !this.state.show
      
    });
  }

  render() {
        if (this.props.userTrips) {
        return this.props.userTrips.map((trip, i) => {
        console.log(this.props.userTrips, "this.props.userTrips");
    return (
      <div>
        <Button color="light" key={i} onClick={this.toggle}>{this.props.buttonLabel}Itinerary # {i}  </Button>
        <Toast isOpen={this.state.show}>
          <ToastHeader toggle={this.toggle}><span>Name: {trip.name}</span></ToastHeader>
          <ToastBody>
          <span>Park: {trip.park}</span>
          < Button href = '/newitinerary'>Add Rides</Button>
          </ToastBody>
        </Toast>
      </div>
        );
      });
    }
  }
}


export default UserItinerary;

