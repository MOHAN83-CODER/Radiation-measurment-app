function getRadiationLevels() {
    const locationInput = document.getElementById("locationInput").value;

    fetch("radiationData.json")
        .then(response => response.json())
        .then(data => {
            const radiationInfo = data[locationInput];

            if (radiationInfo) {
                displayRadiationLevels(locationInput, radiationInfo);
            } else {
                displayError("Location not found.");
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            displayError("An error occurred while fetching data.");
        });
}

function displayRadiationLevels(location, radiationInfo) {
    const radiationLevelsDiv = document.getElementById("radiationLevels");
    radiationLevelsDiv.innerHTML = `
        <div class="result">
            <h2>Radiation Levels for ${location}</h2>
            <p>Radiation Level: ${radiationInfo.radiationLevel.toFixed(2)} ${radiationInfo.unit}</p>
        </div>
    `;
}

function displayError(message) {
    const radiationLevelsDiv = document.getElementById("radiationLevels");
    radiationLevelsDiv.innerHTML = `
        <div class="error">
            <p>${message}</p>
        </div>
    `;
}