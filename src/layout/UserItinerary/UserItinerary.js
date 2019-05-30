import React from "react";

class UserItinerary extends React.Component {
  render() {
    return this.props.userTrips.map((trip, i) => {
      console.log(this.props.userTrips, "this.props.userTrips");
      return (
        <li key={i}>
          <span>Name: {trip.name}</span>
          <br />
          <span>Park: {trip.park}</span>
        </li>
      );
    });
  }
}

export default UserItinerary;
