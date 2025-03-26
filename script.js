// Credit card data with rewards structure
const creditCards = [
  {
    name: "Chase Freedom Flex",
    annualFee: 0,
    rewards: {
      groceries: 0.05,
      travel: 0.05,
      dining: 0.03,
      drugstores: 0.03,
      other: 0.01,
    },
    rotatingCategories: true,
    description:
      "5% back on rotating categories (up to $1,500 per quarter), 3% on dining and drugstores, 1% on everything else",
    imageUrl: "./images/freedomFlex.png",
    applicationUrl:
      "https://creditcards.chase.com/cash-back-credit-cards/freedom/flex",
  },
  {
    name: "Amex Blue Cash Preferred",
    annualFee: 95,
    rewards: {
      groceries: 0.06,
      streaming: 0.06,
      transit: 0.03,
      gas: 0.03,
      other: 0.01,
    },
    description:
      "6% back on groceries and streaming, 3% on transit and gas, 1% on everything else",
    imageUrl: "./images/Blue-cash-preferred.png",
    applicationUrl:
      "https://www.americanexpress.com/us/credit-cards/card/blue-cash-preferred/",
  },
  {
    name: "Chase Sapphire Preferred",
    annualFee: 95,
    rewards: {
      travel: 0.05,
      dining: 0.05,
      streaming: 0.03,
      other: 0.01,
    },
    description:
      "5% back on travel and dining, 3% on streaming, 1% on everything else",
    imageUrl: "./images/card-sapphire-preferred.png",
    applicationUrl:
      "https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred",
  },
  {
    name: "Amazon Prime Rewards",
    annualFee: 0,
    rewards: {
      amazon: 0.05,
      wholeFoods: 0.05,
      restaurants: 0.02,
      gas: 0.02,
      other: 0.01,
    },
    description:
      "5% back on Amazon and Whole Foods, 2% on restaurants and gas, 1% on everything else",
    imageUrl: "./images/Amazon.jpg",
    applicationUrl: "https://www.amazon.com/credit-cards",
  },
  {
    name: "Capital One Venture X",
    annualFee: 395,
    rewards: {
      travel: 0.1,
      dining: 0.05,
      other: 0.02,
    },
    description:
      "10x miles on hotels and rental cars, 5x on flights, 2x on everything else. $300 annual travel credit",
    imageUrl: "./images/venture-x.png",
    applicationUrl: "https://www.capitalone.com/credit-cards/venture-x/",
  },
  {
    name: "Citi Double Cash",
    annualFee: 0,
    rewards: {
      other: 0.02,
    },
    description: "2% on everything - 1% when you buy, 1% when you pay",
    imageUrl: "./images/double-cash.png",
    applicationUrl:
      "https://www.citi.com/credit-cards/citi-double-cash-credit-card",
  },
  {
    name: "Amex Gold Card",
    annualFee: 250,
    rewards: {
      restaurants: 0.04,
      groceries: 0.04,
      travel: 0.03,
      other: 0.01,
    },
    description:
      "4x points at restaurants and supermarkets, 3x on flights, 1x on other purchases. $120 dining credit",
    imageUrl: "./images/gold-card.png",
    applicationUrl:
      "https://www.americanexpress.com/us/credit-cards/card/gold-card/",
  },
  {
    name: "Discover it Cash Back",
    annualFee: 0,
    rewards: {
      groceries: 0.05,
      gas: 0.05,
      amazon: 0.05,
      restaurants: 0.05,
      other: 0.01,
    },
    rotatingCategories: true,
    description:
      "5% cash back on rotating quarterly categories (up to quarterly maximum), 1% on all other purchases",
    imageUrl: "./images/DiscoverIT.png",
    applicationUrl:
      "https://www.discover.com/credit-cards/cash-back/it-card.html",
  },
  {
    name: "U.S. Bank Altitude Reserve",
    annualFee: 400,
    rewards: {
      travel: 0.05,
      dining: 0.03,
      other: 0.015,
    },
    description:
      "5x on prepaid hotels and car rentals, 3x on dining, 1.5x on other purchases. $325 annual travel credit",
    imageUrl: "./images/Alt-Reserve.png",
    applicationUrl:
      "https://www.usbank.com/credit-cards/altitude-reserve-visa-infinite-credit-card.html",
  },
  {
    name: "Capital One SavorOne",
    annualFee: 0,
    rewards: {
      dining: 0.03,
      groceries: 0.03,
      streaming: 0.03,
      entertainment: 0.03,
      other: 0.01,
    },
    description:
      "3% on dining, groceries, streaming services, and entertainment, 1% on other purchases",
    imageUrl: "./images/Savor-one.jpg",
    applicationUrl:
      "https://www.capitalone.com/credit-cards/savorone-dining-rewards/",
  },
  {
    name: "Chase Sapphire Reserve",
    annualFee: 550,
    rewards: {
      travel: 0.1,
      dining: 0.1,
      other: 0.01,
    },
    description:
      "10x points on hotels and car rentals through Chase, 10x on dining, $300 annual travel credit, Priority Pass lounge access",
    imageUrl: "images/sapphire_reserve_card.png",
    applicationUrl:
      "https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve",
  },
  {
    name: "Wells Fargo Active Cash",
    annualFee: 0,
    rewards: {
      other: 0.02,
    },
    description:
      "Unlimited 2% cash rewards on purchases with no category restrictions",
    imageUrl: "images/WellsFargoActive.png",
    applicationUrl:
      "https://creditcards.wellsfargo.com/active-cash-credit-card",
  },
  {
    name: "Amex Platinum",
    annualFee: 695,
    rewards: {
      travel: 0.05,
      flights: 0.05,
      hotels: 0.05,
      other: 0.01,
    },
    description:
      "5x points on flights and hotels, $200 airline fee credit, $200 hotel credit, lounge access, plus other premium benefits",
    imageUrl: "images/platinum-card.png",
    applicationUrl:
      "https://www.americanexpress.com/us/credit-cards/card/platinum/",
  },
  {
    name: "Capital One Quicksilver",
    annualFee: 0,
    rewards: {
      other: 0.015,
    },
    description: "1.5% cash back on every purchase, every day",
    imageUrl: "images/QuickSilver.png",
    applicationUrl: "https://www.capitalone.com/credit-cards/quicksilver/",
  },
  {
    name: "Chase Freedom Unlimited",
    annualFee: 0,
    rewards: {
      dining: 0.03,
      drugstores: 0.03,
      travel: 0.05,
      other: 0.015,
    },
    description:
      "5% on travel through Chase, 3% on dining and drugstores, 1.5% on everything else",
    imageUrl: "images/freedom_unlimited_card.png",
    applicationUrl:
      "https://creditcards.chase.com/cash-back-credit-cards/freedom/unlimited",
  },
  {
    name: "Amex Green Card",
    annualFee: 150,
    rewards: {
      travel: 0.03,
      transit: 0.03,
      restaurants: 0.03,
      other: 0.01,
    },
    description:
      "3x points on travel, transit, and restaurants. $100 CLEAR credit and $100 LoungeBuddy credit annually",
    imageUrl: "images/Amex-green.png",
    applicationUrl:
      "https://www.americanexpress.com/us/credit-cards/card/green/",
  },
];

// Get DOM elements
const analyzeBtn = document.getElementById("analyzeBtn");
const resultsDiv = document.getElementById("results");
const spendingChart = document.getElementById("spendingChart");
const cardRecommendations = document.getElementById("cardRecommendations");

// Add event listener to analyze button
analyzeBtn.addEventListener("click", analyzeSpending);

function analyzeSpending() {
  // Get all spending inputs
  const spending = {
    groceries: parseFloat(document.getElementById("groceries").value) || 0,
    travel: parseFloat(document.getElementById("travel").value) || 0,
    subscriptions:
      parseFloat(document.getElementById("subscriptions").value) || 0,
    gas: parseFloat(document.getElementById("gas").value) || 0,
    dining: parseFloat(document.getElementById("dining").value) || 0,
    amazon: parseFloat(document.getElementById("amazon").value) || 0,
    online: parseFloat(document.getElementById("online").value) || 0,
  };

  // Calculate total spending
  const totalSpending = Object.values(spending).reduce((a, b) => a + b, 0);

  // Reset all input validations
  Object.keys(spending).forEach((category) => {
    const input = document.getElementById(category);
    input.classList.remove("invalid");
  });

  // Check if at least one field has a value
  if (totalSpending === 0) {
    // Add invalid class to empty inputs
    Object.keys(spending).forEach((category) => {
      const input = document.getElementById(category);
      if (!input.value || input.value === "0") {
        input.classList.add("invalid");
      }
    });
    return;
  }

  // Show results section
  resultsDiv.classList.add("active");

  // Create spending chart
  createSpendingChart(spending);

  // Calculate and display card recommendations
  const recommendations = calculateCardRecommendations(spending);
  displayRecommendations(recommendations);
}

function createSpendingChart(spending) {
  // Create a simple bar chart using HTML and CSS
  const chartHTML = Object.entries(spending)
    .map(([category, amount]) => {
      const percentage =
        (amount / Object.values(spending).reduce((a, b) => a + b, 0)) * 100;
      return `
                <div class="chart-bar">
                    <div class="bar-label">${category}</div>
                    <div class="bar-container">
                        <div class="bar" style="width: ${percentage}%"></div>
                    </div>
                    <div class="bar-value">$${amount.toLocaleString()}</div>
                </div>
            `;
    })
    .join("");

  spendingChart.innerHTML = chartHTML;
}

function calculateCardRecommendations(spending) {
  const recommendations = creditCards.map((card) => {
    let totalRewards = 0;
    let annualFee = card.annualFee;

    // Calculate rewards for each category
    Object.entries(spending).forEach(([category, amount]) => {
      const rewardRate = card.rewards[category] || card.rewards.other;
      totalRewards += amount * rewardRate;
    });

    // Calculate net rewards (rewards minus annual fee)
    const netRewards = totalRewards - annualFee;

    return {
      card,
      totalRewards,
      netRewards,
    };
  });

  // Sort by net rewards
  return recommendations.sort((a, b) => b.netRewards - a.netRewards);
}

function displayRecommendations(recommendations) {
  const recommendationsHTML = recommendations
    .map(
      (rec, index) => `
            <a href="${
              rec.card.applicationUrl
            }" target="_blank" class="card-recommendation">
                <div class="card-content">
                    <div class="card-image">
                        <img src="${rec.card.imageUrl}" alt="${rec.card.name}">
                    </div>
                    <div class="card-details">
                        <h3>${index + 1}. ${rec.card.name}</h3>
                        <p>${rec.card.description}</p>
                        <p class="rewards">Estimated Annual Rewards: $${rec.totalRewards.toFixed(
                          2
                        )}</p>
                        <p class="rewards">Net Rewards (after annual fee): $${rec.netRewards.toFixed(
                          2
                        )}</p>
                    </div>
                </div>
            </a>
        `
    )
    .join("");

  cardRecommendations.innerHTML = recommendationsHTML;
}

// Add input event listeners to remove invalid class when user starts typing
document.querySelectorAll('input[type="number"]').forEach((input) => {
  input.addEventListener("input", function () {
    if (this.value && parseFloat(this.value) > 0) {
      this.classList.remove("invalid");
    }
  });
});
