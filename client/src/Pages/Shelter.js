import React from "react";

const Sheleter = () => {
  return (
    <div className="shelter-styles">
      <h1>Shelter</h1>
      <ul className="shelter-list">
        <a href="https://www1.nyc.gov/site/dhs/shelter/shelter.page">
          <li>NYC.gov Shelter Assistance</li>
        </a>
        <a href="https://www.shelterlist.com/details/homes-for-the-homeless">
          <li>Homes for the Homeless</li>
        </a>
        <a href="https://www.shelterlist.com/details/new-york-city-rescue-mission">
          <li>New York City Rescue Mission</li>
        </a>
        <a href="https://www.shelterlist.com/details/bowery-mission">
          <li>Bowery Mission</li>
        </a>
        <a href="https://www.shelterlist.com/details/grand-central-neighborhood-social-services-corporation-gcnssc">
          <li>
            Grand Central Neighborhood Social Services Corporation (GCNSSC)
          </li>
        </a>
        <a href="https://www.homelessshelterdirectory.org/shelter/ny_breaking-ground">
          <li>Breaking Ground</li>
        </a>
        <a href="https://www.homelessshelterdirectory.org/shelter/ny_metropolitan-community-church-of-new-york">
          <li>Metropolitan Community Church of New York</li>
        </a>
        <a href="https://www1.nyc.gov/site/hra/help/homebase-locations.page">
          <li>Homebase</li>
        </a>
        <a href="https://www.homelessshelterdirectory.org/city/ny-bronx">
          <li>HOMELESS SHELTERS DIRECTORY</li>
        </a>
      </ul>
    </div>
  );
};

export default Sheleter;
