import { select, selectAll } from "./helpers/selectors";

function template(item, buttonId) {
    let markup = ``
  switch (buttonId) {
    case "launches":
          select("h2").textContent = "launches";
          markup = `
        <article>
        <h2>${item.mission_name}</h2>
        ${checkForImageLaunches(item)}
        </div>
        <p>Flight number: ${item.mission_name}</p>
        <p>Launch year: ${item.launch_year}</p>
        <p>Rocket: ${item.rocket.rocket_name}</p>
        <a id="${item.flight_number}" href="#${
              item.flight_number
              }">More info</a>
        </article>
        `;
      break
    case "ships":
          select("h2").textContent = "Ships";
          markup = `
        <article>
        <h2>${item.ship_name}</h2>
         ${checkForImageShips(item)}
         </div>
        <p>Number of missions: ${item.missions.length}</p>
        <p>Active: ${item.active}</p>
        <p>Roles: ${item.roles[0]}</p>
         <a id="${item.ship_id}" href="#${
              item.ship_id
          }">More info</a>
        </article>
        `;
      break
    case "capsules":
          select("h2").textContent = "Capsules";
          markup = `
        <article>
        <h2>${item.capsule_serial}</h2>
         <div class='no-image'>
         <p>No image available</p>
        </div>
        <p>Status: ${item.status}</p>
        <p>Mission: ${item.missions.name}</p>
        <p>Details: ${item.details}</p>
         <a id="${item.capsule_serial}" href="#${item.capsule_serial}">More info</a>
        </article>
        `;
      break
    case "missions":
          select("h2").textContent = "Missions";
         markup = `
        <article>
        <h2>${item.mission_name}</h2>
         <div class='no-image'>
         <p>No image available</p>
        </div>
        <p>Website: ${item.website}</p>
        <p>Twitter: ${item.twitter}</p>
        <p>Description: ${item.description}</p>
         <a id="${item.mission_id}" href="#${item.mission_id}">More info</a>
        </article>
        `;
      break
    case "rockets":
          select("h2").textContent = "Rockets";
          markup = `
        <article>
        <h2>${item.rocket_name}</h2>
        <div>
        <img src="${item.flickr_images[1]}">
        </div>
        <p>Active: ${item.active}</p>
        <p>Boosters: ${item.boosters}</p>
        <p>Engines: ${item.engines.number}</p>
        <p>First flight: ${item.first_flight}</p>
         <a id="${item.rocket_id}" href="#${
            item.rocket_id
          }">More info</a>
        </article>
        `;
      break
  }
  return markup
  
}

function templateDetail(item, buttonId) {
    let markup = ``
    switch (buttonId) {
        case "launches":
            select("h2").textContent = "";
            markup = `
        <article class="single-item">
        ${checkForImageLaunches(item)}
        </div>
        <div>
        <h2>${item.mission_name}</h2>
        <p>Flight number: ${item.flight_number}</p>
        <p>Launch year: ${item.launch_year}</p>
        <p>Launch date UTC: ${item.launch_date_utc}</p>
        <p>Ships: ${item.ships}</p>
        </br>
        <p>Launch site ID: ${item.launch_site.site_id}</p>
        <p>Launch site name: ${item.launch_site.site_name_long}</p>
        </br>
        <p>Details: ${item.details}</p>
        </div>
        <div class="img-slider">
        ${loopImg(item.links.flickr_images)}
        </div>
        </article
        `;
            break
        case "ships":
            select("h2").textContent = "Ships";
            markup = `
        <article>
        <h2>${item.ship_name}</h2>
         ${checkForImageShips(item)}</div>
        <p>Number of missions: ${item.missions.length}</p>
        <p>Active: ${item.active}</p>
        <p>Roles: ${item.roles[0]}</p>
        </article
        `;
            break
        case "capsules":
            select("h2").textContent = "Capsules";
            markup = `
        <article>
        <h2>${item.capsule_serial}</h2>
         <div class='no-image'>
         <p>No image available</p>
        </div>
        <p>Status: ${item.status}</p>
        <p>Mission: ${item.missions.name}</p>
        <p>Details: ${item.details}</p>
        </article>`;
            break
        case "missions":
            select("h2").textContent = "Missions";
            markup = `
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
            break
        case "rockets":
            select("h2").textContent = "Rockets";
            markup = `
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
            break
    }
    return markup
}
function loopImg(imgArr){
return `
${imgArr.map(img => `<img class="flickr-img" src="${img}">`)}
`
}

function checkForImageLaunches(item){
    if (item.links.mission_patch_small == null) {
        return "<div class='no-image'><p>No image available</p>";
    } else {
        return `<div><img src=${item.links.mission_patch_small}>`;
    }
}

function checkForImageShips(item) {
    if (item.image == null) {
        return "<div class='no-image'><p>No image available</p>";
    } else {
        return `<div><img src=${item.image} onerror="imgError(this);">`;
    }
}

export { template, templateDetail };
