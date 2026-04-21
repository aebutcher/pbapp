//key = enemy . value = attack vs enemy
const typeChart = {
  normal: {
    normal: 1, fire: 1, water: 1, electric: 1, grass: 1, ice: 1,
    fighting: 2, poison: 1, ground: 1, flying: 1, psychic: 1,
    bug: 1, rock: 1, ghost: 0, dragon: 1, dark: 1, steel: 1, fairy: 1
  },

  fire: {
    normal: 1, fire: 0.5, water: 2, electric: 1, grass: 0.5, ice: 0.5,
    fighting: 1, poison: 1, ground: 2, flying: 1, psychic: 1,
    bug: 0.5, rock: 2, ghost: 1, dragon: 1, dark: 1, steel: 0.5, fairy: 0.5
  },

  water: {
    normal: 1, fire: 0.5, water: 0.5, electric: 2, grass: 2, ice: 0.5,
    fighting: 1, poison: 1, ground: 1, flying: 1, psychic: 1,
    bug: 1, rock: 1, ghost: 1, dragon: 1, dark: 1, steel: 0.5, fairy: 1
  },

  electric: {
    normal: 1, fire: 1, water: 1, electric: 0.5, grass: 1, ice: 1,
    fighting: 1, poison: 1, ground: 2, flying: 0.5, psychic: 1,
    bug: 1, rock: 1, ghost: 1, dragon: 1, dark: 1, steel: 0.5, fairy: 1
  },

  grass: {
    normal: 1, fire: 2, water: 0.5, electric: 0.5, grass: 0.5, ice: 2,
    fighting: 1, poison: 2, ground: 0.5, flying: 2, psychic: 1,
    bug: 2, rock: 1, ghost: 1, dragon: 1, dark: 1, steel: 1, fairy: 1
  },

  ice: {
    normal: 1, fire: 2, water: 1, electric: 1, grass: 1, ice: 0.5,
    fighting: 2, poison: 1, ground: 1, flying: 1, psychic: 1,
    bug: 1, rock: 2, ghost: 1, dragon: 1, dark: 1, steel: 2, fairy: 1
  },

  fighting: {
    normal: 1, fire: 1, water: 1, electric: 1, grass: 1, ice: 1,
    fighting: 1, poison: 1, ground: 1, flying: 2, psychic: 2,
    bug: 0.5, rock: 0.5, ghost: 1, dragon: 1, dark: 0.5, steel: 1, fairy: 2
  },

  poison: {
    normal: 1, fire: 1, water: 1, electric: 1, grass: 0.5, ice: 1,
    fighting: 0.5, poison: 0.5, ground: 2, flying: 1, psychic: 2,
    bug: 0.5, rock: 1, ghost: 1, dragon: 1, dark: 1, steel: 1, fairy: 0.5
  },

  ground: {
    normal: 1, fire: 1, water: 2, electric: 0, grass: 2, ice: 2,
    fighting: 1, poison: 0.5, ground: 1, flying: 1, psychic: 1,
    bug: 1, rock: 0.5, ghost: 1, dragon: 1, dark: 1, steel: 1, fairy: 1
  },

  flying: {
    normal: 1, fire: 1, water: 1, electric: 2, grass: 0.5, ice: 2,
    fighting: 0.5, poison: 1, ground: 0, flying: 1, psychic: 1,
    bug: 0.5, rock: 2, ghost: 1, dragon: 1, dark: 1, steel: 1, fairy: 1
  },

  psychic: {
    normal: 1, fire: 1, water: 1, electric: 1, grass: 1, ice: 1,
    fighting: 0.5, poison: 1, ground: 1, flying: 1, psychic: 0.5,
    bug: 2, rock: 1, ghost: 2, dragon: 1, dark: 2, steel: 1, fairy: 1
  },

  bug: {
    normal: 1, fire: 2, water: 1, electric: 1, grass: 0.5, ice: 1,
    fighting: 0.5, poison: 1, ground: 0.5, flying: 2, psychic: 1,
    bug: 1, rock: 2, ghost: 1, dragon: 1, dark: 1, steel: 1, fairy: 1
  },

  rock: {
    normal: 0.5, fire: 0.5, water: 2, electric: 1, grass: 2, ice: 1,
    fighting: 2, poison: 0.5, ground: 2, flying: 0.5, psychic: 1,
    bug: 1, rock: 1, ghost: 1, dragon: 1, dark: 1, steel: 2, fairy: 1
  },

  ghost: {
    normal: 0, fire: 1, water: 1, electric: 1, grass: 1, ice: 1,
    fighting: 0, poison: 0.5, ground: 1, flying: 1, psychic: 1,
    bug: 0.5, rock: 1, ghost: 2, dragon: 1, dark: 2, steel: 1, fairy: 1
  },

  dragon: {
    normal: 1, fire: 0.5, water: 0.5, electric: 0.5, grass: 0.5, ice: 2,
    fighting: 1, poison: 1, ground: 1, flying: 1, psychic: 1,
    bug: 1, rock: 1, ghost: 1, dragon: 2, dark: 1, steel: 1, fairy: 2
  },

  dark: {
    normal: 1, fire: 1, water: 1, electric: 1, grass: 1, ice: 1,
    fighting: 2, poison: 1, ground: 1, flying: 1, psychic: 0,
    bug: 2, rock: 1, ghost: 0.5, dragon: 1, dark: 0.5, steel: 1, fairy: 2
  },

  steel: {
    normal: 0.5, fire: 2, water: 1, electric: 1, grass: 0.5, ice: 0.5,
    fighting: 2, poison: 0, ground: 2, flying: 0.5, psychic: 0.5,
    bug: 0.5, rock: 0.5, ghost: 1, dragon: 0.5, dark: 1, steel: 0.5, fairy: 0.5
  },

  fairy: {
    normal: 1, fire: 1, water: 1, electric: 1, grass: 1, ice: 1,
    fighting: 0.5, poison: 2, ground: 1, flying: 1, psychic: 1,
    bug: 0.5, rock: 1, ghost: 1, dragon: 0, dark: 0.5, steel: 2, fairy: 1
  }
};

const typeIcons = {
  normal: "⬜",
  fire: "🔥",
  water: "💧",
  electric: "⚡",
  grass: "🌿",
  ice: "❄️",
  fighting: "🥊",
  poison: "☠️",
  ground: "🌍",
  flying: "🕊️",
  psychic: "🔮",
  bug: "🐛",
  rock: "🪨",
  ghost: "👻",
  dragon: "🐉",
  dark: "🌑",
  steel: "⚙️",
  fairy: "🧚",
};

let selectedItem = null;

// Add icons to dropdown
document.querySelectorAll("li[data-value]").forEach(li => {
  const type = li.dataset.value.toLowerCase();
  const iconSpan = li.querySelector(".icon");

  if (typeIcons[type] && iconSpan) {
    iconSpan.textContent = typeIcons[type];
  }
});

const input = document.getElementById("typeInput");
const list = document.getElementById("dropdownList");
const items = list.querySelectorAll("li");
const wrapper = document.getElementById("typeInputWrapper");
const selectedIcon = document.getElementById("selectedIcon");
const dropdown = document.querySelector(".dropdown");

// Toggle dropdown on tap
input.addEventListener("click", () => {
  list.style.display = list.style.display === "block" ? "none" : "block";
});

// Select item on tap
items.forEach((item) => {
  item.addEventListener("click", () => selectItem(item));
});

function selectItem(item) {
  const label = item.querySelector(".label").innerText;
  const icon = item.querySelector(".icon").innerText;
  const typeClass = [...item.classList].find(c => c.startsWith("type-"));

  // Update input text and icon
  input.value = label;
  selectedIcon.textContent = icon;

  // Update wrapper styling
  wrapper.className = "input-wrapper";
  if (typeClass) wrapper.classList.add(typeClass);

  // Mark selected item
  items.forEach(i => i.classList.remove("selected"));
  item.classList.add("selected");

  // Hide dropdown
  list.style.display = "none";

  selectedType = item.dataset.value;
  updateResults();
}

// Close when tapping outside
document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    list.style.display = "none";
  }
});

//Handling modes
let appMode = "attack";

function setMode(mode) {
    appMode = mode;
    updateModeButtons();
    updateLabels();
    updateResults();
}

function updateModeButtons() {
    document.querySelectorAll(".mode-btn").forEach(btn => {
        btn.classList.remove("modeSel");
    });

    document
        .querySelector(`[data-mode="${appMode}"]`)
        .classList.add("modeSel");
}

function updateLabels() {
    let inputLabel = document.getElementById("topDescr");
    let resultsLabel = document.getElementById("bottomDescr");
    if (appMode === "attack") {
        inputLabel.textContent = "OPPONENT:";
        resultsLabel.textContent = "ATTACK:";
    } else if (appMode === "defense") {
        inputLabel.textContent = "ATTACKER:";
        resultsLabel.textContent = "DEFENSE:";
    }
}

//Script for results
const resultsBox = document.getElementById("results");

function updateResults() {
    if (appMode === "attack") {
        showAttackResults(selectedType);
    } else if (appMode === "defense") {
        showDefenseResults(selectedType);
    }
}

function showAttackResults(type) {
  resultsBox.replaceChildren();
  var results = groupByEffectiveness(type);
  printTypes("Super effective!", results["2"]);
  printTypes("Not very effective...", results["0.5"]);
  printTypes("Does not affect!", results["0"]);
}

function showDefenseResults(type) {
  resultsBox.replaceChildren();
  var results = groupByResistance(type);
  printTypes("Super resistant!", results["0"]);
  printTypes("Resistant!", results["0.5"]);
  printTypes("Super vulnerable!", results["2"]);
}

function groupByEffectiveness(type) {
  const result = {};
  for (const [key, value] of Object.entries(typeChart[type])) {
    if (!result[value]) result[value] = [];
    result[value].push(key);
  }
  console.log(result);
  return result;
}

function groupByResistance(type) {
  const result = {
    0: [],
    0.5: [],
    1: [],
    2: []
  };

  for (const [attackType, matchups] of Object.entries(typeChart)) {
    const multiplier = matchups[type];
    result[multiplier].push(attackType);
  }

  return result;
}

function printTypes(heading, types) {
  if (!types || types.length === 0) return;
  
  //Print the heading
  const efHeading = document.createElement("h3");
  efHeading.textContent = `${heading}`;
  resultsBox.appendChild(efHeading);
  //Container for result types
  const lineBox = document.createElement("div");
  lineBox.classList.add("lineBox");

  //Print the type icons and names
  types.forEach((typeName) => {
    const tLine = document.createElement("div");
    tLine.classList.add(`type-${typeName.toLowerCase()}`, "typeLine");
    const iconSpan = document.createElement("span");
    iconSpan.classList.add("icon");
    iconSpan.innerHTML = `${typeIcons[typeName]}`;
    const nameSpan = document.createElement("span");
    nameSpan.classList.add("label");
    nameSpan.innerText = typeName.charAt(0).toUpperCase() + typeName.slice(1);
    const nameDiv = document.createElement("div");
    nameDiv.classList.add("text");
    nameDiv.appendChild(nameSpan);
    tLine.appendChild(iconSpan);
    tLine.appendChild(nameDiv);
    lineBox.appendChild(tLine);
  });
  resultsBox.appendChild(lineBox);
}

// Hide dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    list.style.display = "none";
  }
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js").then(() => console.log("Service Worker Registered"));
}
