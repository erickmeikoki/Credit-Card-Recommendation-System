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
			other: 0.01
		},
		rotatingCategories: true,
		description:
			"5% back on rotating categories (up to $1,500 per quarter), 3% on dining and drugstores, 1% on everything else",
		imageUrl: "./images/freedomFlex.png",
		applicationUrl:
			"https://creditcards.chase.com/cash-back-credit-cards/freedom/flex"
	},
	{
		name: "Amex Blue Cash Preferred",
		annualFee: 95,
		rewards: {
			groceries: 0.06,
			streaming: 0.06,
			transit: 0.03,
			gas: 0.03,
			other: 0.01
		},
		description:
			"6% back on groceries and streaming, 3% on transit and gas, 1% on everything else",
		imageUrl: "./images/Blue-cash-preferred.png",
		applicationUrl:
			"https://www.americanexpress.com/us/credit-cards/card/blue-cash-preferred/"
	},
	{
		name: "Chase Sapphire Preferred",
		annualFee: 95,
		rewards: {
			travel: 0.05,
			dining: 0.05,
			streaming: 0.03,
			other: 0.01
		},
		description:
			"5% back on travel and dining, 3% on streaming, 1% on everything else",
		imageUrl: "./images/card-sapphire-preferred.png",
		applicationUrl:
			"https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred"
	},
	{
		name: "Amazon Prime Rewards",
		annualFee: 0,
		rewards: {
			amazon: 0.05,
			wholeFoods: 0.05,
			restaurants: 0.02,
			gas: 0.02,
			other: 0.01
		},
		description:
			"5% back on Amazon and Whole Foods, 2% on restaurants and gas, 1% on everything else",
		imageUrl: "./images/Amazon.jpg",
		applicationUrl: "https://www.amazon.com/credit-cards"
	},
	{
		name: "Capital One Venture X",
		annualFee: 395,
		rewards: {
			travel: 0.1,
			dining: 0.05,
			other: 0.02
		},
		description:
			"10x miles on hotels and rental cars, 5x on flights, 2x on everything else. $300 annual travel credit",
		imageUrl: "./images/venture-x.png",
		applicationUrl: "https://www.capitalone.com/credit-cards/venture-x/"
	},
	{
		name: "Citi Double Cash",
		annualFee: 0,
		rewards: {
			other: 0.02
		},
		description: "2% on everything - 1% when you buy, 1% when you pay",
		imageUrl: "./images/double-cash.png",
		applicationUrl:
			"https://www.citi.com/credit-cards/citi-double-cash-credit-card"
	},
	{
		name: "Amex Gold Card",
		annualFee: 250,
		rewards: {
			restaurants: 0.04,
			groceries: 0.04,
			travel: 0.03,
			other: 0.01
		},
		description:
			"4x points at restaurants and supermarkets, 3x on flights, 1x on other purchases. $120 dining credit",
		imageUrl: "./images/gold-card.png",
		applicationUrl:
			"https://www.americanexpress.com/us/credit-cards/card/gold-card/"
	},
	{
		name: "Discover it Cash Back",
		annualFee: 0,
		rewards: {
			groceries: 0.05,
			gas: 0.05,
			amazon: 0.05,
			restaurants: 0.05,
			other: 0.01
		},
		rotatingCategories: true,
		description:
			"5% cash back on rotating quarterly categories (up to quarterly maximum), 1% on all other purchases",
		imageUrl: "./images/DiscoverIT.png",
		applicationUrl:
			"https://www.discover.com/credit-cards/cash-back/it-card.html"
	},
	{
		name: "U.S. Bank Altitude Reserve",
		annualFee: 400,
		rewards: {
			travel: 0.05,
			dining: 0.03,
			other: 0.015
		},
		description:
			"5x on prepaid hotels and car rentals, 3x on dining, 1.5x on other purchases. $325 annual travel credit",
		imageUrl: "./images/Alt-Reserve.png",
		applicationUrl:
			"https://www.usbank.com/credit-cards/altitude-reserve-visa-infinite-credit-card.html"
	},
	{
		name: "Capital One SavorOne",
		annualFee: 0,
		rewards: {
			dining: 0.03,
			groceries: 0.03,
			streaming: 0.03,
			entertainment: 0.03,
			other: 0.01
		},
		description:
			"3% on dining, groceries, streaming services, and entertainment, 1% on other purchases",
		imageUrl: "./images/Savor-one.jpg",
		applicationUrl:
			"https://www.capitalone.com/credit-cards/savorone-dining-rewards/"
	},
	{
		name: "Chase Sapphire Reserve",
		annualFee: 550,
		rewards: {
			travel: 0.1,
			dining: 0.1,
			other: 0.01
		},
		description:
			"10x points on hotels and car rentals through Chase, 10x on dining, $300 annual travel credit, Priority Pass lounge access",
		imageUrl: "images/sapphire_reserve_card.png",
		applicationUrl:
			"https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve"
	},
	{
		name: "Wells Fargo Active Cash",
		annualFee: 0,
		rewards: {
			other: 0.02
		},
		description:
			"Unlimited 2% cash rewards on purchases with no category restrictions",
		imageUrl: "images/WellsFargoActive.png",
		applicationUrl: "https://creditcards.wellsfargo.com/active-cash-credit-card"
	},
	{
		name: "Amex Platinum",
		annualFee: 695,
		rewards: {
			travel: 0.05,
			flights: 0.05,
			hotels: 0.05,
			other: 0.01
		},
		description:
			"5x points on flights and hotels, $200 airline fee credit, $200 hotel credit, lounge access, plus other premium benefits",
		imageUrl: "images/platinum-card.png",
		applicationUrl:
			"https://www.americanexpress.com/us/credit-cards/card/platinum/"
	},
	{
		name: "Capital One Quicksilver",
		annualFee: 0,
		rewards: {
			other: 0.015
		},
		description: "1.5% cash back on every purchase, every day",
		imageUrl: "images/QuickSilver.png",
		applicationUrl: "https://www.capitalone.com/credit-cards/quicksilver/"
	},
	{
		name: "Chase Freedom Unlimited",
		annualFee: 0,
		rewards: {
			dining: 0.03,
			drugstores: 0.03,
			travel: 0.05,
			other: 0.015
		},
		description:
			"5% on travel through Chase, 3% on dining and drugstores, 1.5% on everything else",
		imageUrl: "images/freedom_unlimited_card.png",
		applicationUrl:
			"https://creditcards.chase.com/cash-back-credit-cards/freedom/unlimited"
	},
	{
		name: "Amex Green Card",
		annualFee: 150,
		rewards: {
			travel: 0.03,
			transit: 0.03,
			restaurants: 0.03,
			other: 0.01
		},
		description:
			"3x points on travel, transit, and restaurants. $100 CLEAR credit and $100 LoungeBuddy credit annually",
		imageUrl: "images/Amex-green.png",
		applicationUrl:
			"https://www.americanexpress.com/us/credit-cards/card/green/"
	}
];

// Add reward types and point values to existing cards
creditCards.forEach((card) => {
	// Add reward type
	if (
		card.name.includes("Sapphire") ||
		card.name.includes("Gold") ||
		card.name.includes("Platinum") ||
		card.name.includes("Green") ||
		card.name.includes("Venture")
	) {
		card.rewardType = "POINTS";
		// Add point values
		if (card.name.includes("Sapphire Reserve")) {
			card.pointValue = 0.015;
		} else if (card.name.includes("Sapphire Preferred")) {
			card.pointValue = 0.0125;
		} else if (card.name.includes("Gold") || card.name.includes("Platinum")) {
			card.pointValue = 0.02;
		} else if (card.name.includes("Venture")) {
			card.pointValue = 0.0175;
		} else {
			card.pointValue = 0.01;
		}
	} else {
		card.rewardType = "CASH_BACK";
	}
});

// Add user preferences and history
class UserPreferences {
	constructor() {
		this.load();
	}

	load() {
		this.preferences = JSON.parse(localStorage.getItem("userPreferences")) || {
			preferredCategories: [],
			excludedCards: [],
			favoriteCards: [],
			spendingHistory: [],
			cardInteractions: {}
		};
	}

	save() {
		localStorage.setItem("userPreferences", JSON.stringify(this.preferences));
	}

	updateSpendingHistory(spending) {
		this.preferences.spendingHistory.push({
			date: new Date(),
			spending: spending
		});
		// Keep last 12 months
		if (this.preferences.spendingHistory.length > 12) {
			this.preferences.spendingHistory.shift();
		}
		this.save();
	}

	recordCardInteraction(cardId, interactionType) {
		if (!this.preferences.cardInteractions[cardId]) {
			this.preferences.cardInteractions[cardId] = {};
		}
		this.preferences.cardInteractions[cardId][interactionType] =
			(this.preferences.cardInteractions[cardId][interactionType] || 0) + 1;
		this.save();
	}
}

const userPrefs = new UserPreferences();

// Add loading state functions after the UserPreferences class
function showLoading() {
	document.getElementById("loadingState").classList.remove("hidden");
	document.getElementById("results").classList.add("hidden");
}

function hideLoading() {
	document.getElementById("loadingState").classList.add("hidden");
	document.getElementById("results").classList.remove("hidden");
}

// Add view mode switching after the loading state functions
const gridViewBtn = document.getElementById("gridView");
const listViewBtn = document.getElementById("listView");
const cardRecommendationsContainer = document.getElementById(
	"cardRecommendations"
);

if (gridViewBtn && listViewBtn) {
	gridViewBtn.addEventListener("click", () => {
		cardRecommendationsContainer.className = "grid-view";
		gridViewBtn.classList.add("active");
		listViewBtn.classList.remove("active");
		userPrefs.update({ viewMode: "grid" });
	});

	listViewBtn.addEventListener("click", () => {
		cardRecommendationsContainer.className = "list-view";
		listViewBtn.classList.add("active");
		gridViewBtn.classList.remove("active");
		userPrefs.update({ viewMode: "list" });
	});
}

// Get DOM elements
const analyzeBtn = document.getElementById("analyzeBtn");
const resultsDiv = document.getElementById("results");
const spendingChart = document.getElementById("spendingChart");
const cardRecommendations = document.getElementById("cardRecommendations");

// Global variables for state management
let currentSpending = {};
let currentUserProfile = {};
let selectedCards = [];
let cardAdvisor = null;

// Initialize the card advisor and setup event listeners
document.addEventListener("DOMContentLoaded", () => {
	// Initialize the CardAdvisor
	cardAdvisor = new CreditCardAdvisor();

	// Setup event listeners
	setupAnalysisTabs();
	setupCardComparison();
	setupCardModal();
	enhanceFiltering();

	// Add event listener for the analyze button
	const analyzeBtn = document.getElementById("analyzeBtn");
	if (analyzeBtn) {
		analyzeBtn.addEventListener("click", handleAnalyzeClick);
	}

	// Load saved data
	loadSavedData();
});

// Function to handle analyze button click
async function handleAnalyzeClick() {
	try {
		const spending = collectSpendingData();
		const userProfile = collectUserProfileData();

		if (validateData(spending)) {
			await analyzeSpending(spending, userProfile);
		}
	} catch (error) {
		console.error("Error in analyze click handler:", error);
	}
}

// Collect spending data from form
function collectSpendingData() {
	return {
		groceries: parseFloat(document.getElementById("groceries")?.value) || 0,
		travel: parseFloat(document.getElementById("travel")?.value) || 0,
		dining: parseFloat(document.getElementById("dining")?.value) || 0,
		gas: parseFloat(document.getElementById("gas")?.value) || 0,
		amazon: parseFloat(document.getElementById("amazon")?.value) || 0,
		online: parseFloat(document.getElementById("online")?.value) || 0,
		other: parseFloat(document.getElementById("other")?.value) || 0
	};
}

// Collect user profile data from form
function collectUserProfileData() {
	return {
		creditScore: parseInt(document.getElementById("creditScore")?.value) || 700,
		annualIncome:
			parseFloat(document.getElementById("annualIncome")?.value) || 0,
		currentBalance: 0,
		totalCredit: 10000,
		recentApplications: []
	};
}

// Validate spending data
function validateData(spending) {
	const totalSpending = Object.values(spending).reduce((a, b) => a + b, 0);

	if (totalSpending === 0) {
		Object.keys(spending).forEach((category) => {
			const input = document.getElementById(category);
			if (input && (!input.value || input.value === "0")) {
				input.classList.add("invalid");
			}
		});
		return false;
	}
	return true;
}

// Main analysis function
async function analyzeSpending(spending, userProfile) {
	try {
		// Store current state
		currentSpending = spending;
		currentUserProfile = userProfile;

		// Save to localStorage
		saveDataToLocalStorage(spending, userProfile);

		// Show results section
		const resultsDiv = document.getElementById("results");
		if (resultsDiv) {
			resultsDiv.classList.add("active");
		}

		// Create spending chart
		createSpendingChart(spending);

		// Calculate and display recommendations
		const recommendations = calculateCardRecommendations(spending, userProfile);
		displayRecommendations(recommendations);

		// Generate comprehensive analysis
		if (cardAdvisor) {
			const analysis = cardAdvisor.generateComprehensiveAnalysis(
				recommendations.map((rec) => rec.card),
				spending,
				userProfile
			);

			// Display comprehensive analysis
			displayComprehensiveAnalysis(analysis);

			// Show the analysis container
			const analysisContainer = document.getElementById(
				"comprehensiveAnalysis"
			);
			if (analysisContainer) {
				analysisContainer.classList.remove("hidden");
			}
		}
	} catch (error) {
		console.error("Error analyzing spending:", error);
	}
}

// Save data to localStorage
function saveDataToLocalStorage(spending, userProfile) {
	try {
		localStorage.setItem("spendingData", JSON.stringify(spending));
		localStorage.setItem("userProfile", JSON.stringify(userProfile));
	} catch (error) {
		console.error("Error saving to localStorage:", error);
	}
}

// Load saved data
function loadSavedData() {
	try {
		const savedSpending = localStorage.getItem("spendingData");
		const savedProfile = localStorage.getItem("userProfile");

		if (savedSpending) {
			const spending = JSON.parse(savedSpending);
			populateFormWithSpending(spending);
		}

		if (savedProfile) {
			const profile = JSON.parse(savedProfile);
			populateFormWithProfile(profile);
		}

		// Only analyze if there's saved spending data
		if (savedSpending && savedProfile) {
			handleAnalyzeClick();
		}
	} catch (error) {
		console.error("Error loading saved data:", error);
	}
}

// Populate form with saved spending data
function populateFormWithSpending(spending) {
	Object.entries(spending).forEach(([category, value]) => {
		const input = document.getElementById(category);
		if (input) input.value = value;
	});
}

// Populate form with saved profile data
function populateFormWithProfile(profile) {
	if (profile.creditScore) {
		const creditScoreInput = document.getElementById("creditScore");
		if (creditScoreInput) creditScoreInput.value = profile.creditScore;
	}
	if (profile.annualIncome) {
		const incomeInput = document.getElementById("annualIncome");
		if (incomeInput) incomeInput.value = profile.annualIncome;
	}
}

// Remove any existing event listeners before adding new ones
function removeExistingEventListeners() {
	const analyzeBtn = document.getElementById("analyzeBtn");
	if (analyzeBtn) {
		const newButton = analyzeBtn.cloneNode(true);
		analyzeBtn.parentNode.replaceChild(newButton, analyzeBtn);
		newButton.addEventListener("click", handleAnalyzeClick);
	}
}

// Add this variable to store the current recommendations
let currentRecommendations = [];

// Update the calculateCardRecommendations function to store the results
function calculateCardRecommendations(spending, userProfile) {
	const recommendations = creditCards.map((card) => {
		let totalRewards = 0;
		let rewardsBreakdown = {};

		// Calculate rewards for each spending category
		Object.entries(spending).forEach(([category, amount]) => {
			if (amount > 0) {
				const rewardRate = card.rewards[category] || card.rewards.other || 0;
				const reward = amount * rewardRate;
				totalRewards += reward;
				rewardsBreakdown[category] = {
					spend: amount,
					rate: rewardRate,
					reward: reward
				};
			}
		});

		const netRewards = totalRewards - card.annualFee;

		return {
			card: card,
			annualRewardsValue: totalRewards,
			netValue: netRewards,
			rewardsBreakdown: rewardsBreakdown
		};
	});

	// Store the recommendations globally
	currentRecommendations = recommendations;

	// Sort by net value by default
	return recommendations.sort((a, b) => b.netValue - a.netValue);
}

// Add the sorting functionality
function enhanceFiltering() {
	const filters = {
		creditScore: {
			min: 300,
			max: 850
		},
		annualFee: {
			min: 0,
			max: 1000
		},
		rewardTypes: ["points", "cashback", "miles"],
		cardIssuers: ["Chase", "Amex", "Citi", "Capital One"],
		cardCategories: ["travel", "business", "student", "secured"],
		features: ["noForeignTransaction", "travelInsurance", "purchaseProtection"]
	};

	function applyFilters(cards, activeFilters) {
		return cards.filter((card) => {
			// Credit Score Filter
			if (card.recommendedCreditScore) {
				if (activeFilters.creditScore < card.recommendedCreditScore.min)
					return false;
			}

			// Annual Fee Filter
			if (
				activeFilters.maxAnnualFee &&
				card.annualFee > activeFilters.maxAnnualFee
			)
				return false;

			// Reward Type Filter
			if (
				activeFilters.rewardTypes.length &&
				!activeFilters.rewardTypes.includes(card.rewardType)
			)
				return false;

			// Issuer Filter
			if (
				activeFilters.issuers.length &&
				!activeFilters.issuers.includes(card.issuer)
			)
				return false;

			// Features Filter
			if (activeFilters.requiredFeatures.length) {
				const hasAllFeatures = activeFilters.requiredFeatures.every((feature) =>
					card.features.includes(feature)
				);
				if (!hasAllFeatures) return false;
			}

			return true;
		});
	}
}

// Update the displayRecommendations function
function displayRecommendations(recommendations) {
	const cardRecommendations = document.getElementById("cardRecommendations");
	if (!cardRecommendations) return;

	cardRecommendations.innerHTML = recommendations
		.map(
			(rec, index) => `
		<div class="card-recommendation" data-card-id="${rec.card.name}">
			<div class="card-image">
				<img src="${rec.card.imageUrl}" alt="${rec.card.name}">
			</div>
			<div class="card-content">
				<div class="card-header">
					<h3>${index + 1}. ${rec.card.name}</h3>
					<span class="card-type">${rec.card.rewardType || "Cash Back"} Card</span>
				</div>
				<div class="card-details">
					<p>Annual Fee: $${rec.card.annualFee}</p>
					<p>Annual Rewards Value: $${rec.annualRewardsValue.toFixed(2)}</p>
					<p>Net Value: $${rec.netValue.toFixed(2)}</p>
				</div>
				<div class="rewards-breakdown">
					<h4>Rewards Breakdown:</h4>
					${Object.entries(rec.rewardsBreakdown)
						.map(
							([category, data]) => `
							<div class="reward-item">
								<span>${category}</span>
								<span>${(data.rate * 100).toFixed(0)}% = $${data.reward.toFixed(2)}</span>
							</div>
						`
						)
						.join("")}
				</div>
				<div class="card-actions">
					<button onclick="toggleCardSelection('${
						rec.card.name
					}')" class="compare-button">
						Compare
					</button>
					<button onclick="showCardDetails('${rec.card.name}')" class="details-button">
						Details
					</button>
				</div>
			</div>
		</div>
	`
		)
		.join("");
}

// Initialize the sorting controls when the page loads
document.addEventListener("DOMContentLoaded", () => {
	enhanceFiltering();
});

function createSpendingChart(spending) {
	// Calculate total spending for percentages
	const totalSpending = Object.values(spending).reduce((a, b) => a + b, 0);

	// Create a simple bar chart using HTML and CSS
	const chartHTML = Object.entries(spending)
		.map(([category, amount]) => {
			// Calculate percentage with a minimum of 1% for visibility when there's a value
			const percentage =
				amount > 0 ? Math.max((amount / totalSpending) * 100, 1) : 0;

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

	if (spendingChart) {
		spendingChart.innerHTML = chartHTML;
	}
}

function addSpendingInsights(spending) {
	if (typeof Chart === "undefined") {
		console.warn("Chart.js is not loaded. Skipping spending insights.");
		return;
	}

	try {
		// Create canvas for chart
		const existingChart = document.getElementById("spendingChart");
		if (existingChart) {
			existingChart.remove();
		}

		const chartContainer = document.createElement("div");
		chartContainer.className = "spending-insights";
		chartContainer.innerHTML = `
			<h3>Spending Insights</h3>
			<canvas id="spendingChart"></canvas>
		`;

		// Add to page
		const resultsSection = document.getElementById("results");
		if (resultsSection) {
			resultsSection.insertBefore(chartContainer, resultsSection.firstChild);
		}

		// Create chart
		const ctx = document.getElementById("spendingChart").getContext("2d");
		new Chart(ctx, {
			type: "doughnut",
			data: {
				labels: Object.keys(spending),
				datasets: [
					{
						data: Object.values(spending),
						backgroundColor: [
							"#4F46E5",
							"#10B981",
							"#F59E0B",
							"#EF4444",
							"#8B5CF6",
							"#EC4899",
							"#6366F1"
						]
					}
				]
			},
			options: {
				responsive: true,
				plugins: {
					legend: {
						position: "right"
					}
				}
			}
		});
	} catch (error) {
		console.error("Error creating spending insights chart:", error);
	}
}

function enhanceAccessibility() {
	// Add keyboard navigation
	document.querySelectorAll(".card-recommendation").forEach((card) => {
		card.setAttribute("tabindex", "0");
		card.addEventListener("keypress", (e) => {
			if (e.key === "Enter") {
				showCardDetails(card.dataset.cardId);
			}
		});
	});

	// Add ARIA labels
	document.querySelectorAll("button").forEach((button) => {
		if (!button.getAttribute("aria-label")) {
			button.setAttribute("aria-label", button.textContent.trim());
		}
	});
}

function optimizePerformance() {
	// Lazy load card images
	const imageObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const img = entry.target;
				img.src = img.dataset.src;
				observer.unobserve(img);
			}
		});
	});

	document.querySelectorAll(".card-image img").forEach((img) => {
		img.dataset.src = img.src;
		img.src = "";
		imageObserver.observe(img);
	});

	// Cache results
	const resultsCache = new Map();
	const originalCalculate = calculateCardRecommendations;
	calculateCardRecommendations = function (spending, userProfile) {
		const cacheKey = JSON.stringify([spending, userProfile]);
		if (resultsCache.has(cacheKey)) {
			return resultsCache.get(cacheKey);
		}
		const results = originalCalculate(spending, userProfile);
		resultsCache.set(cacheKey, results);
		return results;
	};
}

// Global variables for comparison functionality
const maxComparisons = 3;

// Setup modal functionality
function setupCardModal() {
	// Create modal container if it doesn't exist
	if (!document.getElementById("cardModal")) {
		const modalContainer = document.createElement("div");
		modalContainer.id = "cardModal";
		modalContainer.className = "card-modal";
		modalContainer.innerHTML = `
			<div class="modal-content">
				<button class="modal-close">×</button>
				<div class="modal-body"></div>
			</div>
		`;
		document.body.appendChild(modalContainer);

		// Close modal on backdrop click
		modalContainer.addEventListener("click", (e) => {
			if (e.target === modalContainer) {
				closeCardModal();
			}
		});

		// Close modal on close button click
		modalContainer
			.querySelector(".modal-close")
			.addEventListener("click", closeCardModal);
	}
}

// Close card modal
function closeCardModal() {
	const modal = document.getElementById("cardModal");
	if (modal) {
		modal.classList.remove("active");
		setTimeout(() => {
			modal.querySelector(".modal-body").innerHTML = "";
		}, 300);
	}
}

// Add event handler for details button
function showCardDetails(cardId) {
	const card = creditCards.find((c) => c.name === cardId);
	if (!card) return;

	// Create modal if it doesn't exist
	let modal = document.getElementById("cardDetailModal");
	if (!modal) {
		modal = document.createElement("div");
		modal.id = "cardDetailModal";
		modal.className = "card-modal";
		document.body.appendChild(modal);
	}

	// Populate modal content
	modal.innerHTML = `
		<div class="modal-content">
			<div class="modal-header">
				<h2>${card.name}</h2>
				<button class="close-modal" onclick="closeCardDetails()">&times;</button>
			</div>
			<div class="modal-body">
				<div class="card-detail-image">
					<img src="${card.imageUrl}" alt="${card.name}">
				</div>
				<div class="card-detail-info">
					<div class="detail-section">
						<h3>Card Overview</h3>
						<p class="fee">Annual Fee: $${card.annualFee}</p>
						<p class="description">${card.description}</p>
					</div>
					
					<div class="detail-section">
						<h3>Rewards Structure</h3>
						<div class="rewards-grid">
							${Object.entries(card.rewards)
								.map(
									([category, rate]) => `
									<div class="reward-item">
										<span class="category">${category}</span>
										<span class="rate">${(rate * 100).toFixed(0)}%</span>
									</div>
								`
								)
								.join("")}
						</div>
					</div>

					<div class="detail-section">
						<h3>Additional Benefits</h3>
						<ul class="benefits-list">
							${
								card.benefits
									? card.benefits
											.map((benefit) => `<li>${benefit}</li>`)
											.join("")
									: "<li>No additional benefits listed</li>"
							}
						</ul>
					</div>

					<div class="detail-section">
						<a href="${card.applicationUrl}" 
						   class="apply-button" 
						   target="_blank" 
						   rel="noopener noreferrer">
							Apply Now
						</a>
					</div>
				</div>
			</div>
                    </div>
	`;

	// Show modal
	modal.classList.add("active");

	// Add click outside to close
	modal.addEventListener("click", (e) => {
		if (e.target === modal) {
			closeCardDetails();
		}
	});
}

// Close card details modal
function closeCardDetails() {
	const modal = document.getElementById("cardDetailModal");
	if (modal) {
		modal.classList.remove("active");
		setTimeout(() => modal.remove(), 300); // Remove after animation
	}
}

// Setup card comparison functionality
function setupCardComparison() {
	if (!document.getElementById("comparisonBar")) {
		const comparisonBar = document.createElement("div");
		comparisonBar.id = "comparisonBar";
		comparisonBar.className = "comparison-mode";
		comparisonBar.innerHTML = `
			<div class="comparison-container">
				<div class="comparison-header">
					<h3>Compare Cards (<span id="compareCount">0</span>/${maxComparisons})</h3>
					<button id="closeCompare" class="close-button" aria-label="Close comparison">×</button>
                </div>
				<div class="comparison-cards"></div>
				<div class="comparison-actions">
					<button id="compareButton" class="compare-button" disabled>Compare Selected Cards</button>
                </div>
            </div>
		`;
		document.body.appendChild(comparisonBar);

		document
			.getElementById("closeCompare")
			?.addEventListener("click", clearComparison);
		document
			.getElementById("compareButton")
			?.addEventListener("click", showDetailedComparison);
	}
}

// Toggle card selection
function toggleCardSelection(cardId) {
	const index = selectedCards.indexOf(cardId);
	if (index > -1) {
		selectedCards.splice(index, 1);
	} else if (selectedCards.length < maxComparisons) {
		selectedCards.push(cardId);
	}
	updateComparisonUI();
}

// Update the comparison UI
function updateComparisonUI() {
	const comparisonMode = document.querySelector(".comparison-mode");
	const compareCount = document.getElementById("compareCount");
	const compareButton = document.getElementById("compareButton");
	const comparisonCards = document.querySelector(".comparison-cards");

	if (!comparisonMode || !compareCount || !compareButton || !comparisonCards)
		return;

	// Update count and button state
	compareCount.textContent = selectedCards.length;
	compareButton.disabled = selectedCards.length < 2;

	// Show/hide comparison bar
	if (selectedCards.length > 0) {
		comparisonMode.classList.add("active");
	} else {
		comparisonMode.classList.remove("active");
	}

	// Update selected cards preview
	comparisonCards.innerHTML = selectedCards
		.map((cardId) => {
			const card = creditCards.find((c) => c.name === cardId);
			if (!card) return "";

			return `
			<div class="comparison-card-preview">
				<img src="${card.imageUrl}" alt="${card.name}">
				<div class="preview-info">
					<h4>${card.name}</h4>
					<p>Annual Fee: $${card.annualFee}</p>
				</div>
				<button onclick="toggleCardSelection('${cardId}')" class="remove-card" aria-label="Remove ${card.name}">×</button>
			</div>
		`;
		})
		.join("");

	// Update card selection indicators in main list
	document.querySelectorAll(".card-recommendation").forEach((card) => {
		const cardId = card.dataset.cardId;
		if (cardId) {
			card.classList.toggle("selected", selectedCards.includes(cardId));
		}
	});
}

// Clear comparison selection
function clearComparison() {
	selectedCards = [];
	updateComparisonUI();
}

// Show detailed comparison modal
function showDetailedComparison() {
	if (selectedCards.length < 2) return;

	// Remove existing modal if present
	const existingModal = document.querySelector(".comparison-modal");
	if (existingModal) {
		existingModal.remove();
	}

	const modal = document.createElement("div");
	modal.className = "comparison-modal";

	const selectedCardDetails = selectedCards
		.map((cardId) => {
			const card = creditCards.find((c) => c.name === cardId);
			if (!card) return "";

			// Calculate rewards based on current spending
			const rewardsHTML = Object.entries(card.rewards)
				.map(
					([category, rate]) => `
				<div class="reward-rate">
					<span class="category">${category}</span>
					<span class="rate">${(rate * 100).toFixed(0)}%</span>
				</div>
        `
				)
				.join("");

			return `
			<div class="comparison-card-detail">
				<img src="${card.imageUrl}" alt="${card.name}" class="card-img">
				<h3>${card.name}</h3>
				<div class="card-info">
					<p class="fee">Annual Fee: $${card.annualFee}</p>
					<div class="rewards-rates">
						<h4>Reward Rates:</h4>
						${rewardsHTML}
					</div>
					<p class="description">${card.description}</p>
				</div>
			</div>
		`;
		})
		.join("");

	modal.innerHTML = `
		<div class="comparison-modal-content">
			<button class="close-modal" onclick="closeComparisonModal()">×</button>
			<h2>Card Comparison</h2>
			<div class="comparison-grid">
				${selectedCardDetails}
			</div>
		</div>
	`;

	document.body.appendChild(modal);
	// Add active class after a brief delay to trigger animation
	setTimeout(() => modal.classList.add("active"), 10);
}

// Close comparison modal
function closeComparisonModal() {
	const modal = document.querySelector(".comparison-modal");
	if (modal) {
		modal.classList.remove("active");
		setTimeout(() => modal.remove(), 300); // Wait for animation to complete
	}
}

// Add this function to handle credit score input
function setupCreditScoreInput() {
	const creditScoreInput = document.getElementById("creditScore");
	const creditScoreValue = document.getElementById("creditScoreValue");
	const creditScoreBar = document.querySelector(".credit-score-bar");

	if (creditScoreInput && creditScoreValue) {
		// Set initial value
		creditScoreValue.textContent = creditScoreInput.value;
		updateCreditScoreBar(creditScoreInput.value);

		// Update on input change
		creditScoreInput.addEventListener("input", function () {
			const value = this.value;
			creditScoreValue.textContent = value;
			updateCreditScoreBar(value);
		});
	}
}

// Add function to update credit score bar
function updateCreditScoreBar(value) {
	const percentage = ((value - 300) / (850 - 300)) * 100;
	const creditScoreBar = document.querySelector(".credit-score-progress");

	if (creditScoreBar) {
		creditScoreBar.style.width = `${percentage}%`;

		// Update color based on credit score range
		if (value >= 750) {
			creditScoreBar.style.backgroundColor = "var(--success)";
		} else if (value >= 670) {
			creditScoreBar.style.backgroundColor = "var(--primary)";
		} else if (value >= 580) {
			creditScoreBar.style.backgroundColor = "var(--warning, #f59e0b)";
		} else {
			creditScoreBar.style.backgroundColor = "var(--error)";
		}
	}
}

// Initialize all functionality
document.addEventListener("DOMContentLoaded", () => {
	setupCardModal(); // Setup modal first
	setupCardComparison(); // Then setup comparison

	// Add any other initialization code here
	enhanceFiltering();
	setupCreditScoreInput();
});

// Add weighted scoring system
function calculateCardScore(card, userProfile, spending) {
	let score = 0;
	const weights = {
		rewardsMatch: 0.4,
		creditScoreMatch: 0.2,
		annualFeeValue: 0.2,
		welcomeBonus: 0.1,
		additionalBenefits: 0.1
	};

	// Calculate rewards match
	score += calculateRewardsMatch(card, spending) * weights.rewardsMatch;

	// Credit score compatibility
	score +=
		calculateCreditScoreMatch(card, userProfile.creditScore) *
		weights.creditScoreMatch;

	// Annual fee value proposition
	score += calculateAnnualFeeValue(card, spending) * weights.annualFeeValue;

	// Welcome bonus consideration
	score += calculateWelcomeBonusValue(card, spending) * weights.welcomeBonus;

	// Additional benefits value
	score += calculateBenefitsValue(card) * weights.additionalBenefits;

	return score;
}

// Detailed scoring functions
function calculateRewardsMatch(card, spending) {
	let rewardsValue = 0;
	let potentialValue = 0;

	Object.entries(spending).forEach(([category, amount]) => {
		const rate = card.rewards[category] || card.rewards.other || 0;
		rewardsValue += amount * rate;
		potentialValue += amount * 0.05; // Assume 5% is the best possible rate
	});

	return rewardsValue / potentialValue;
}

function calculateCreditScoreMatch(card, userScore) {
	const creditScoreRanges = {
		excellent: { min: 750, max: 850 },
		good: { min: 670, max: 749 },
		fair: { min: 580, max: 669 },
		poor: { min: 300, max: 579 }
	};

	// Add recommended credit score ranges to cards
	const cardScoreRange = card.recommendedCreditScore || creditScoreRanges.good;

	if (userScore >= cardScoreRange.min && userScore <= cardScoreRange.max) {
		return 1;
	} else {
		const distance = Math.min(
			Math.abs(userScore - cardScoreRange.min),
			Math.abs(userScore - cardScoreRange.max)
		);
		return Math.max(0, 1 - distance / 100);
	}
}

function analyzeSpendingPatterns(spendingHistory) {
	const patterns = {
		categories: {},
		seasonal: {},
		trends: {}
	};

	// Analyze category distribution
	spendingHistory.forEach((record) => {
		Object.entries(record.spending).forEach(([category, amount]) => {
			if (!patterns.categories[category]) {
				patterns.categories[category] = {
					total: 0,
					count: 0,
					average: 0
				};
			}
			patterns.categories[category].total += amount;
			patterns.categories[category].count++;
		});
	});

	// Calculate averages and identify primary spending categories
	Object.values(patterns.categories).forEach((cat) => {
		cat.average = cat.total / cat.count;
	});

	// Identify seasonal patterns
	const seasonalData = groupByMonth(spendingHistory);
	patterns.seasonal = analyzeSeasonal(seasonalData);

	// Calculate spending trends
	patterns.trends = calculateTrends(spendingHistory);

	return patterns;
}

function analyzeBenefits(card, userProfile, spendingPatterns) {
	const benefits = {
		money: calculateMonetaryBenefits(card, spendingPatterns),
		insurance: evaluateInsuranceBenefits(card, userProfile),
		travel: assessTravelBenefits(card, spendingPatterns),
		shopping: evaluateShoppingBenefits(card, spendingPatterns)
	};

	return {
		totalValue: calculateTotalBenefitValue(benefits),
		details: benefits,
		recommendations: generateBenefitRecommendations(benefits, userProfile)
	};
}

function displayEnhancedRecommendations(recommendations) {
	recommendations.forEach((rec) => {
		const card = rec.card;
		const analysis = rec.analysis;

		// Create detailed breakdown
		const breakdown = {
			rewardsValue: calculateAnnualRewardsValue(card, analysis.spending),
			benefitsValue: calculateBenefitsValue(card, analysis.profile),
			costAnalysis: analyzeCardCosts(card),
			alternativeCards: findSimilarCards(card),
			optimizationTips: generateOptimizationTips(card, analysis)
		};

		// Display enhanced recommendation
		displayCardWithAnalysis(card, breakdown);
	});
}

// Add a feature to create a side-by-side comparison checklist
function createComparisonChecklist(selectedCards) {
	const features = [
		"Annual Fee",
		"Welcome Bonus",
		"Reward Rates",
		"Foreign Transaction Fee",
		"Travel Insurance",
		"Purchase Protection",
		"Extended Warranty",
		"Cell Phone Protection",
		"Airport Lounge Access",
		"Global Entry/TSA Credit",
		"Rental Car Insurance"
	];

	return `
		<div class="comparison-checklist">
			<table class="comparison-table">
				<thead>
					<tr>
						<th>Feature</th>
						${selectedCards
							.map(
								(card) => `
							<th>${card.name}</th>
						`
							)
							.join("")}
					</tr>
				</thead>
				<tbody>
					${features
						.map(
							(feature) => `
						<tr>
							<td>${feature}</td>
							${selectedCards
								.map(
									(card) => `
								<td>${getFeatureValue(card, feature)}</td>
							`
								)
								.join("")}
						</tr>
					`
						)
						.join("")}
				</tbody>
			</table>
		</div>
	`;
}

// Add an advanced reward calculator
class RewardsCalculator {
	calculateRewardsPotential(card, spending) {
		const firstYear = {
			rewards: 0,
			welcomeBonus: this.calculateWelcomeBonusValue(card, spending),
			annualFee: card.annualFee,
			totalValue: 0
		};

		const ongoing = {
			rewards: 0,
			annualFee: card.annualFee,
			totalValue: 0
		};

		// Calculate category rewards
		Object.entries(spending).forEach(([category, amount]) => {
			const monthlyReward = this.calculateCategoryReward(
				card,
				category,
				amount
			);
			const yearlyReward = monthlyReward * 12;
			firstYear.rewards += yearlyReward;
			ongoing.rewards += yearlyReward;
		});

		// Calculate totals
		firstYear.totalValue =
			firstYear.rewards + firstYear.welcomeBonus - firstYear.annualFee;
		ongoing.totalValue = ongoing.rewards - ongoing.annualFee;

		return { firstYear, ongoing };
	}

	calculateWelcomeBonusValue(card, spending) {
		if (!card.welcomeBonus) return 0;

		const monthlySpending = utils.calculateMonthlySpending(spending);
		const monthsToReachBonus = card.welcomeBonus.spend / monthlySpending;

		return monthsToReachBonus <= card.welcomeBonus.timeframe
			? card.welcomeBonus.value
			: 0;
	}

	calculateCategoryReward(card, category, amount) {
		const rate = card.rewards[category] || card.rewards.other || 0;
		return amount * rate;
	}
}

// Add travel benefits value calculator
class TravelBenefitsCalculator {
	calculateTravelBenefits(card) {
		const benefits = {
			loungeAccess: this.calculateLoungeValue(card),
			travelCredits: this.calculateTravelCredits(card),
			insuranceValue: this.calculateInsuranceValue(card),
			globalEntry: this.calculateGlobalEntryValue(card)
		};

		benefits.totalValue = Object.values(benefits).reduce((a, b) => a + b, 0);
		return benefits;
	}

	calculateLoungeValue(card) {
		return featureValues.loungeAccess[card.loungeAccess || "None"];
	}

	calculateTravelCredits(card) {
		return Object.entries(card.travelCredits || {}).reduce(
			(total, [credit, available]) =>
				total + (available ? featureValues.travelCredits[credit] : 0),
			0
		);
	}

	calculateInsuranceValue(card) {
		return featureValues.insuranceValue[card.insuranceLevel || "None"];
	}

	calculateGlobalEntryValue(card) {
		return card.globalEntry ? featureValues.travelCredits["Global Entry"] : 0;
	}
}

// Add spending optimization suggestions
class SpendingOptimizer {
	optimizeSpending(cards, spending) {
		const optimization = {
			categories: {},
			potentialSavings: 0,
			recommendations: []
		};

		Object.entries(spending).forEach(([category, amount]) => {
			const bestCard = this.findBestCardForCategory(cards, category);
			const currentReward = this.calculateCurrentReward(
				cards,
				category,
				amount
			);
			const potentialReward = this.calculatePotentialReward(
				bestCard,
				category,
				amount
			);

			optimization.categories[category] = {
				bestCard: bestCard.name,
				potentialExtra: potentialReward - currentReward,
				recommendation: `Use ${
					bestCard.name
				} for ${category} to earn ${utils.formatPercent(
					bestCard.rewards[category] || bestCard.rewards.other
				)}`
			};

			optimization.potentialSavings +=
				optimization.categories[category].potentialExtra;
		});

		return optimization;
	}

	findBestCardForCategory(cards, category) {
		return cards.reduce((best, card) => {
			const rate = card.rewards[category] || card.rewards.other || 0;
			return rate > (best.rewards[category] || best.rewards.other || 0)
				? card
				: best;
		});
	}

	calculateCurrentReward(cards, category, amount) {
		const bestRate = Math.max(
			...cards.map((card) => card.rewards[category] || card.rewards.other || 0)
		);
		return amount * bestRate;
	}

	calculatePotentialReward(card, category, amount) {
		const rate = card.rewards[category] || card.rewards.other || 0;
		return amount * rate;
	}
}

// Add credit score impact estimation
class CreditScoreEstimator {
	estimateCreditScoreImpact(card, userProfile) {
		const impact = {
			hardPull: -5,
			newAccount: -10,
			utilizationChange: this.calculateUtilizationImpact(card, userProfile),
			longTermEffect: this.estimateLongTermEffect(card, userProfile),
			recoveryTime: this.estimateRecoveryTime(userProfile),
			recommendations: this.generateRecommendations(card, userProfile)
		};

		impact.totalInitialImpact =
			impact.hardPull + impact.newAccount + impact.utilizationChange;
		return impact;
	}

	calculateUtilizationImpact(card, userProfile) {
		if (!card.creditLimit) return 0;

		const currentUtilization =
			userProfile.currentBalance / userProfile.totalCredit;
		const newUtilization =
			userProfile.currentBalance / (userProfile.totalCredit + card.creditLimit);

		return this.estimateUtilizationScoreImpact(
			currentUtilization,
			newUtilization
		);
	}

	estimateUtilizationScoreImpact(currentUtil, newUtil) {
		const difference = currentUtil - newUtil;
		if (difference > 0.3) return 30;
		if (difference > 0.2) return 20;
		if (difference > 0.1) return 10;
		return 5;
	}

	estimateLongTermEffect(card, userProfile) {
		return {
			effect: "Positive",
			reasons: [
				"Increased credit mix",
				"Lower overall utilization",
				"Additional payment history"
			]
		};
	}

	estimateRecoveryTime(userProfile) {
		if (userProfile.creditScore >= 740) return "3-6 months";
		if (userProfile.creditScore >= 670) return "6-9 months";
		return "9-12 months";
	}

	generateRecommendations(card, userProfile) {
		return [
			"Wait at least 3 months between credit card applications",
			"Keep utilization below 30% on all cards",
			"Make all payments on time"
		];
	}
}

// Application Optimizer Class
class ApplicationOptimizer {
	constructor() {
		this.issuerRules = {
			"chase": {
				name: "Chase",
				rules: {
					"5/24": "No more than 5 new credit cards in 24 months",
					"sapphire": "48 months between Sapphire bonuses",
					"velocity": "Maximum 2 applications in 30 days"
				},
				minTimeBetweenApps: 30 // days
			},
			"amex": {
				name: "American Express",
				rules: {
					"lifetime": "Once per lifetime for welcome bonus",
					"velocity": "Maximum 2 credit cards in 90 days"
				},
				minTimeBetweenApps: 90
			},
			"capital_one": {
				name: "Capital One",
				rules: {
					"velocity": "Maximum 1 application every 6 months"
				},
				minTimeBetweenApps: 180
			},
			"citi": {
				name: "Citi",
				rules: {
					"velocity": "Maximum 1 application every 8 days",
					"family": "24 months between cards in same family"
				},
				minTimeBetweenApps: 8
			}
		};
	}

	optimizeApplicationTiming(selectedCards, userProfile) {
		if (!selectedCards || !Array.isArray(selectedCards) || !userProfile) {
			return {
				recommendations: [],
				warnings: ["Invalid input data for application timing optimization"]
			};
		}

		const recommendations = [];
		const warnings = [];

		selectedCards.forEach((card) => {
			if (!card || !card.issuer) {
				warnings.push("Invalid card data encountered");
				return;
			}

			const timing = this.calculateOptimalTiming(card, userProfile);
			recommendations.push({
				cardName: card.name,
				issuer: card.issuer,
				timing: timing.recommendation,
				warnings: timing.warnings
			});
		});

		return { recommendations, warnings };
	}

	calculateOptimalTiming(card, userProfile) {
		if (!card || !card.issuer || !userProfile) {
			return {
				recommendation: "Unable to calculate timing",
				warnings: ["Invalid card or profile data"]
			};
		}

		const issuer = card.issuer.toLowerCase().replace(/\s+/g, "_");
		const issuerRules = this.issuerRules[issuer];

		if (!issuerRules) {
			return {
				recommendation: "Apply anytime",
				warnings: [`No specific rules found for ${card.issuer}`]
			};
		}

		const warnings = [];
		let recommendation = "";

		// Check recent applications
		const recentApps = userProfile.recentApplications || [];
		const issuerApps = recentApps.filter(
			(app) => app.issuer.toLowerCase() === issuer
		);

		// Calculate days since last application
		const lastApp = issuerApps[0];
		const daysSinceLastApp = lastApp
			? Math.floor(
					(Date.now() - new Date(lastApp.date)) / (1000 * 60 * 60 * 24)
			  )
			: Number.MAX_SAFE_INTEGER;

		// Check issuer-specific rules
		if (issuer === "chase" && recentApps.length >= 5) {
			warnings.push("Chase 5/24 rule may apply");
			recommendation = "Wait until you are under 5/24";
		} else if (daysSinceLastApp < issuerRules.minTimeBetweenApps) {
			recommendation = `Wait ${
				issuerRules.minTimeBetweenApps - daysSinceLastApp
			} more days`;
			warnings.push(
				`Minimum time between applications for ${issuerRules.name} is ${issuerRules.minTimeBetweenApps} days`
			);
		} else {
			recommendation = "Can apply now";
		}

		// Add issuer-specific warnings
		Object.entries(issuerRules.rules).forEach(([rule, description]) => {
			warnings.push(`${issuerRules.name} ${rule} rule: ${description}`);
		});

		return {
			recommendation,
			warnings
		};
	}

	getIssuerRules(issuer) {
		if (!issuer) return null;
		return this.issuerRules[issuer.toLowerCase().replace(/\s+/g, "_")] || null;
	}
}

// Card Comparison Class
class CardComparison {
	constructor() {
		this.comparisonFeatures = {
			annualFee: {
				label: "Annual Fee",
				format: (value) => `$${value}`
			},
			welcomeBonus: {
				label: "Welcome Bonus",
				format: (value) => (value ? `${value} points/miles` : "None")
			},
			rewardsRate: {
				label: "Rewards Rate",
				format: (value) => this.formatRewardsRate(value)
			},
			travelBenefits: {
				label: "Travel Benefits",
				format: (value) => this.formatBenefitsList(value)
			},
			purchaseProtection: {
				label: "Purchase Protection",
				format: (value) => (value ? "Yes" : "No")
			},
			foreignTransaction: {
				label: "Foreign Transaction Fee",
				format: (value) => (value ? `${value}%` : "None")
			},
			creditScoreReq: {
				label: "Credit Score Required",
				format: (value) => this.formatCreditScore(value)
			}
		};
	}

	createComparison(selectedCards) {
		if (
			!selectedCards ||
			!Array.isArray(selectedCards) ||
			selectedCards.length === 0
		) {
			return {
				error: "No cards selected for comparison"
			};
		}

		const comparison = {
			cards: selectedCards.map((card) => this.extractCardFeatures(card)),
			features: this.comparisonFeatures,
			timestamp: new Date().toISOString()
		};

		return comparison;
	}

	extractCardFeatures(card) {
		if (!card) return null;

		return {
			id: card.id || "",
			name: card.name || "Unknown Card",
			issuer: card.issuer || "Unknown Issuer",
			imageUrl: card.imageUrl || "",
			features: {
				annualFee: card.annualFee || 0,
				welcomeBonus: this.extractWelcomeBonus(card),
				rewardsRate: this.extractRewardsRate(card),
				travelBenefits: this.extractTravelBenefits(card),
				purchaseProtection: card.purchaseProtection || false,
				foreignTransaction: card.foreignTransactionFee || 0,
				creditScoreReq: card.creditScoreRequired || "Unknown"
			}
		};
	}

	extractWelcomeBonus(card) {
		if (!card.welcomeBonus) return null;
		return {
			amount: card.welcomeBonus.amount || 0,
			type: card.welcomeBonus.type || "points",
			requirement: card.welcomeBonus.spendRequirement || 0,
			timeframe: card.welcomeBonus.timeframe || 90
		};
	}

	extractRewardsRate(card) {
		if (!card.rewards) return {};

		const rates = {};
		Object.entries(card.rewards).forEach(([category, rate]) => {
			rates[category] = parseFloat(rate) || 0;
		});
		return rates;
	}

	extractTravelBenefits(card) {
		if (!card.travelBenefits) return [];
		return Array.isArray(card.travelBenefits)
			? card.travelBenefits
			: Object.entries(card.travelBenefits)
					.filter(([_, value]) => value)
					.map(([benefit, _]) => benefit);
	}

	formatRewardsRate(rates) {
		if (!rates || Object.keys(rates).length === 0) return "No rewards";

		return Object.entries(rates)
			.map(([category, rate]) => `${rate}x ${category}`)
			.join(", ");
	}

	formatBenefitsList(benefits) {
		if (!benefits || benefits.length === 0) return "None";
		return benefits.join(", ");
	}

	formatCreditScore(score) {
		const ranges = {
			excellent: "740+",
			good: "670-739",
			fair: "580-669",
			poor: "<580"
		};
		return ranges[score.toLowerCase()] || score;
	}

	generateComparisonHTML(comparison) {
		if (!comparison || comparison.error) {
			return `<div class="error-message">${
				comparison.error || "Error generating comparison"
			}</div>`;
		}

		let html = `
			<div class="comparison-container">
				<div class="comparison-header">
					<div class="feature-column">Features</div>
					${comparison.cards
						.map(
							(card) => `
						<div class="card-column">
							<img src="${card.imageUrl}" alt="${card.name}" class="card-image">
							<h3>${card.name}</h3>
							<p class="issuer">${card.issuer}</p>
						</div>
					`
						)
						.join("")}
				</div>
				<div class="comparison-body">
        `;

		// Add feature rows
		Object.entries(comparison.features).forEach(([featureKey, feature]) => {
			html += `
				<div class="feature-row">
					<div class="feature-name">${feature.label}</div>
					${comparison.cards
						.map(
							(card) => `
						<div class="feature-value">
							${feature.format(card.features[featureKey])}
						</div>
					`
						)
						.join("")}
				</div>
			`;
		});

		html += `
				</div>
			</div>
		`;

		return html;
	}
}

// Update CreditCardAdvisor class to properly initialize CardComparison
class CreditCardAdvisor {
	constructor() {
		this.cardComparison = new CardComparison();
		this.applicationOptimizer = new ApplicationOptimizer();
		this.rewardsCalculator = new RewardsCalculator();
		this.travelBenefitsCalculator = new TravelBenefitsCalculator();
		this.spendingOptimizer = new SpendingOptimizer();
		this.creditScoreEstimator = new CreditScoreEstimator();
	}

	generateComprehensiveAnalysis(selectedCards, spending, userProfile) {
		if (!selectedCards || !spending || !userProfile) {
			console.error("Missing required data for analysis");
			return null;
		}

		try {
			// Application timing analysis
			const applicationTiming =
				this.applicationOptimizer.optimizeApplicationTiming(
					selectedCards,
					userProfile
				);

			return {
				applicationTiming
				// ... other analysis results ...
			};
		} catch (error) {
			console.error("Error generating comprehensive analysis:", error);
			return null;
		}
	}
}

// Add this to your existing JavaScript
function setupAnalysisTabs() {
	const tabButtons = document.querySelectorAll(".tab-button");
	const tabPanes = document.querySelectorAll(".tab-pane");

	tabButtons.forEach((button) => {
		button.addEventListener("click", () => {
			// Remove active class from all buttons and panes
			tabButtons.forEach((btn) => btn.classList.remove("active"));
			tabPanes.forEach((pane) => pane.classList.remove("active"));

			// Add active class to clicked button and corresponding pane
			button.classList.add("active");
			const tabId = button.dataset.tab + "Tab";
			document.getElementById(tabId).classList.add("active");
		});
	});
}

// Helper function to format dates
function formatDate(date) {
	return new Date(date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric"
	});
}

// Helper function to validate card data
function validateCardData(card) {
	return (
		card &&
		typeof card === "object" &&
		card.name &&
		card.issuer &&
		typeof card.issuer === "string"
	);
}

// Display comprehensive analysis results
function displayComprehensiveAnalysis(analysis) {
	if (!analysis) {
		console.error("No analysis data available");
		return;
	}

	const analysisContainer = document.getElementById("comprehensiveAnalysis");
	if (!analysisContainer) {
		console.error("Analysis container not found");
		return;
	}

	// Clear previous results
	analysisContainer.innerHTML = "";

	// Create the analysis sections
	const sections = {
		cardComparison: createCardComparisonSection(analysis.cardComparison),
		rewardsAnalysis: createRewardsAnalysisSection(analysis.rewardsAnalysis),
		travelBenefits: createTravelBenefitsSection(analysis.travelBenefits),
		optimizationSuggestions: createOptimizationSection(
			analysis.optimizationSuggestions
		),
		applicationTiming: createApplicationTimingSection(
			analysis.applicationTiming
		),
		creditScoreImpact: createCreditScoreSection(analysis.creditScoreImpact)
	};

	// Add sections to container
	Object.values(sections).forEach((section) => {
		if (section) {
			analysisContainer.appendChild(section);
		}
	});

	// Show the container
	analysisContainer.classList.remove("hidden");
}

function createCardComparisonSection(comparison) {
	if (!comparison) return null;

	const section = document.createElement("section");
	section.className = "analysis-section card-comparison";

	section.innerHTML = `
		<h3>Card Comparison</h3>
		<div class="comparison-content">
			${comparison.recommendations
				.map(
					(rec) => `
				<div class="comparison-item">
					<h4>${rec.cardName}</h4>
					<div class="comparison-details">
						<p>Annual Fee: ${formatCurrency(rec.annualFee)}</p>
						<p>Rewards Value: ${formatCurrency(rec.rewardsValue)}</p>
						<p>Net Value: ${formatCurrency(rec.netValue)}</p>
					</div>
				</div>
			`
				)
				.join("")}
		</div>
	`;

	return section;
}

function createRewardsAnalysisSection(rewards) {
	if (!rewards) return null;

	const section = document.createElement("section");
	section.className = "analysis-section rewards-analysis";

	section.innerHTML = `
		<h3>Rewards Analysis</h3>
		<div class="rewards-content">
			<div class="total-rewards">
				<h4>Potential Annual Rewards</h4>
				<p class="value">${formatCurrency(rewards.totalPotentialRewards)}</p>
			</div>
			<div class="category-breakdown">
				<h4>Category Breakdown</h4>
				${Object.entries(rewards.categoryBreakdown)
					.map(
						([category, value]) => `
					<div class="category-item">
						<span class="category">${formatCategory(category)}</span>
						<span class="value">${formatCurrency(value)}</span>
					</div>
				`
					)
					.join("")}
			</div>
		</div>
	`;

	return section;
}

function createTravelBenefitsSection(benefits) {
	if (!benefits) return null;

	const section = document.createElement("section");
	section.className = "analysis-section travel-benefits";

	section.innerHTML = `
		<h3>Travel Benefits Analysis</h3>
		<div class="benefits-content">
			<div class="total-value">
				<h4>Total Annual Value</h4>
				<p class="value">${formatCurrency(benefits.totalValue)}</p>
			</div>
			<div class="benefits-breakdown">
				${benefits.breakdown
					.map(
						(benefit) => `
					<div class="benefit-item">
						<span class="benefit-name">${benefit.name}</span>
						<span class="benefit-value">${formatCurrency(benefit.value)}</span>
						<p class="benefit-description">${benefit.description}</p>
					</div>
				`
					)
					.join("")}
			</div>
		</div>
	`;

	return section;
}

function createOptimizationSection(optimization) {
	if (!optimization) return null;

	const section = document.createElement("section");
	section.className = "analysis-section optimization";

	section.innerHTML = `
		<h3>Spending Optimization</h3>
		<div class="optimization-content">
			${optimization.suggestions
				.map(
					(suggestion) => `
				<div class="optimization-item">
					<h4>${suggestion.category}</h4>
					<p class="suggestion">${suggestion.recommendation}</p>
					<p class="potential-value">Potential Additional Value: ${formatCurrency(
						suggestion.potentialValue
					)}</p>
				</div>
			`
				)
				.join("")}
		</div>
	`;

	return section;
}

function createApplicationTimingSection(timing) {
	if (!timing) return null;

	const section = document.createElement("section");
	section.className = "analysis-section application-timing";

	section.innerHTML = `
		<h3>Application Timing</h3>
		<div class="timing-content">
			${timing.recommendations
				.map(
					(rec) => `
				<div class="timing-item">
					<h4>${rec.cardName}</h4>
					<p class="recommendation">${rec.timing}</p>
					<div class="warnings">
						${rec.warnings
							.map(
								(warning) => `
							<p class="warning">${warning}</p>
						`
							)
							.join("")}
					</div>
				</div>
			`
				)
				.join("")}
		</div>
	`;

	return section;
}

function createCreditScoreSection(creditScore) {
	if (!creditScore) return null;

	const section = document.createElement("section");
	section.className = "analysis-section credit-score";

	section.innerHTML = `
		<h3>Credit Score Impact</h3>
		<div class="credit-score-content">
			<div class="impact-summary">
				<h4>Estimated Impact</h4>
				<p class="impact ${creditScore.impact < 0 ? "negative" : "positive"}">
					${creditScore.impact > 0 ? "+" : ""}${creditScore.impact} points
				</p>
			</div>
			<div class="factors">
				${creditScore.factors
					.map(
						(factor) => `
					<div class="factor-item">
						<span class="factor-name">${factor.name}</span>
						<span class="factor-impact ${factor.impact < 0 ? "negative" : "positive"}">
							${factor.impact > 0 ? "+" : ""}${factor.impact}
						</span>
						<p class="factor-description">${factor.description}</p>
					</div>
				`
					)
					.join("")}
			</div>
		</div>
	`;

	return section;
}

// Helper functions for formatting
function formatCurrency(amount) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD"
	}).format(amount);
}

function formatCategory(category) {
	return category
		.split("_")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
}

function formatPercentage(value) {
	return `${(value * 100).toFixed(1)}%`;
}
