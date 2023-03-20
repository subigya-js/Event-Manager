import React from "react";

const Location = () => {
  let check = 0;
  const targetLat = 28.598276000000002;
  const targetLng = 77.39058700000001;
  // Check if the browser supports geolocation
  if ("geolocation" in navigator) {
    // Request the user's location
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // Success callback - the user's location was retrieved
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        // Calculate the distance between the user and the target location
        const distance = getDistance(userLat, userLng, targetLat, targetLng);

        // Check if the user is within 5 kilometers of the target location
        if (distance <= 500) {
          check = 1;
          console.log("User is within the target location");
        } else {
          check = 0;
          console.log("User is not within the target location");
        }
      },
      function (error) {
        // Error callback - there was an error retrieving the user's location
        console.error(`Error getting location: ${error.message}`);
      }
    );
  } else {
    // Geolocation is not supported by this browser
    console.error("Geolocation is not supported by this browser.");
  }

  // Function to calculate the distance between two points on the earth's surface
  function getDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Earth's radius in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLng = toRadians(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
  }

  // Function to convert degrees to radians
  function toRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }

  return <></>;
};

export default Location;
// export { check };
