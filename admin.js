
document.getElementById('campaignForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const campaignName = document.getElementById('campaignName').value;
  const goalAmount = document.getElementById('goalAmount').value;
  const deadline = document.getElementById('deadline').value;

  const campaigns = JSON.parse(localStorage.getItem('campaigns')) || [];
  const newCampaign = { name: campaignName, goal: goalAmount, raised: 0, deadline: deadline };
  campaigns.push(newCampaign);

  localStorage.setItem('campaigns', JSON.stringify(campaigns));
  displayCampaigns();
});

function displayCampaigns() {
  const campaigns = JSON.parse(localStorage.getItem('campaigns')) || [];
  const campaignList = document.getElementById('campaignList');
  campaignList.innerHTML = '';

  campaigns.forEach(campaign => {
    const campaignDiv = document.createElement('div');
    campaignDiv.innerHTML = `<strong>${campaign.name}</strong> - Goal: ${campaign.goal}, Raised: ${campaign.raised}, Deadline: ${campaign.deadline}`;
    campaignList.appendChild(campaignDiv);
  });
}

// Display campaigns on page load
displayCampaigns();
