const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation)
};

Traveller.prototype.getModesOfTransport = function () {
  return this.journeys.map(journey => journey.transport);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport == transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance >= minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((accumulator, currentValue) => accumulator + currentValue.distance, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  transports = this.journeys.map(journey => journey.transport);
  let tempArray = [];
  for (transport of transports){
    if (tempArray.includes(transport) == false){
      tempArray.push(transport);
    };
  }
  return tempArray;
};


module.exports = Traveller;
