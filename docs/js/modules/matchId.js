import { select, selectAll } from "./helpers/selectors";

function matchId(item, buttonId) {
    if (buttonId == "launches") {
        select("h2").textContent = "launches";
        let markup = `
        <article>
        <h2>${item.mission_name}</h2>
        ${(() => {
                if (item.links.mission_patch_small == null) {
                    return "<div class='no-image'><p>No image available</p>";
                } else {
                    return `<div><img src=${item.links.mission_patch_small}>`;
                }
            })()}</div>
        <p>Flight number: ${item.mission_name}</p>
        <p>Launch year: ${item.launch_year}</p>
        <p>Rocket: ${item.rocket.rocket_name}</p> 
        <a id="${item.flight_number}" href="#${item.flight_number}">More info</a>
        </article
        `;
        return markup;
    } else if (buttonId == "ships") {
        select("h2").textContent = "Ships";
        let markup = `
        <article>
        <h2>${item.ship_name}</h2>
         ${(() => {
                if (item.image == null) {
                    return "<div class='no-image'><p>No image available</p>";
                } else {
                    return `<div><img src=${item.image}>`;
                }
            })()}</div>
        <p>Number of missions: ${item.missions.length}</p>
        <p>Active: ${item.active}</p>
        <p>Roles: ${item.roles[0]}</p> 
        </article
        `;
        return markup;
    } else if (buttonId == "capsules") {
        select("h2").textContent = "Capsules";
        let markup = `
        <article>
        <h2>${item.capsule_serial}</h2>
         <div class='no-image'>
         <p>No image available</p>
        </div>
        <p>Status: ${item.status}</p>
        <p>Mission: ${item.missions.name}</p>
        <p>Details: ${item.details}</p> 
        </article
        `
        ;
        return markup;
    } else if (buttonId == "missions") {
        select("h2").textContent = "Missions";
        let markup = `
        <article>
        <h2>${item.mission_name}</h2>
         <div class='no-image'>
         <p>No image available</p>
        </div>
        <p>Website: ${item.website}</p>
        <p>Twitter: ${item.twitter}</p>
        <p>Description: ${item.description}</p> 
        </article
        `;
        return markup;
    } else if (buttonId == "rockets") {
        select("h2").textContent = "Rockets";
        let markup = `
        <article>
        <h2>${item.rocket_name}</h2>
        <div>
        <img src="${item.flickr_images[1]}">
        </div>
        <p>Active: ${item.active}</p>
        <p>Boosters: ${item.boosters}</p>
        <p>Engines: ${item.engines.number}</p>
        <p>First flight: ${item.first_flight}</p> 
        </article
        `;
        return markup;
    }
}

function matchDetailId(item, buttonId) {
    if (buttonId == "launches") {
        select("h2").textContent = item.mission_name;
        let markup = `
        <article>
        <h2>${item.mission_name}</h2>
        ${(() => {
                if (item.links.mission_patch_small == null) {
                    return "<div class='no-image'><p>No image available</p>";
                } else {
                    return `<div><img src=${item.links.mission_patch_small}>`;
                }
            })()}</div>
        <p>Flight number: ${item.mission_name}</p>
        <p>Launch year: ${item.launch_year}</p>
        <p>Rocket: ${item.rocket.rocket_name}</p> 
        </article
        `;
        return markup;
          }
}

export {matchId, matchDetailId}