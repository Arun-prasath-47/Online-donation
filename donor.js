function displayCampaigns() {
  const campaigns = JSON.parse(localStorage.getItem('campaigns')) || [];
  const campaignList = document.getElementById('campaignList');
  campaignList.innerHTML = '';

  campaigns.forEach((campaign, index) => {
    const campaignDiv = document.createElement('div');
    campaignDiv.innerHTML = `
      <strong>${campaign.name}</strong> - Goal: ${campaign.goal}, Raised: ${campaign.raised}, Deadline: ${campaign.deadline}
      <br>
      <input type="number" id="donation${index}" placeholder="Amount to donate">
      <button onclick="donate(${index})">Donate</button>
      <hr>`;
    campaignList.appendChild(campaignDiv);
  });
}

function donate(index) {
  const campaigns = JSON.parse(localStorage.getItem('campaigns')) || [];
  const donationAmount = document.getElementById(`donation${index}`).value;

  if (donationAmount > 0) {
    campaigns[index].raised += parseInt(donationAmount);
    localStorage.setItem('campaigns', JSON.stringify(campaigns));
    displayCampaigns();
  } else {
    alert('Please enter a valid donation amount');
  }
}

// Display campaigns on page load
displayCampaigns();