const API_URL = "v1";

// Load launches, sort by flight number, and return as JSON
async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/commits`);
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}

export { httpGetLaunches };
