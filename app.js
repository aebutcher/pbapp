const typeChart = {
  normal: {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 1,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 0.5,
    ghost: 0,
    dragon: 1,
    dark: 1,
    steel: 0.5,
    fairy: 1
  },

  fire: {
    normal: 1,
    fire: 0.5,
    water: 0.5,
    electric: 1,
    grass: 2,
    ice: 2,
    fighting: 1,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 2,
    rock: 0.5,
    ghost: 1,
    dragon: 0.5,
    dark: 1,
    steel: 2,
    fairy: 1
  },

  water: {
    normal: 1,
    fire: 2,
    water: 0.5,
    electric: 1,
    grass: 0.5,
    ice: 1,
    fighting: 1,
    poison: 1,
    ground: 2,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 2,
    ghost: 1,
    dragon: 0.5,
    dark: 1,
    steel: 1,
    fairy: 1
  },

  electric: {
    normal: 1,
    fire: 1,
    water: 2,
    electric: 0.5,
    grass: 0.5,
    ice: 1,
    fighting: 1,
    poison: 1,
    ground: 0,
    flying: 2,
    psychic: 1,
    bug: 1,
    rock: 1,
    ghost: 1,
    dragon: 0.5,
    dark: 1,
    steel: 1,
    fairy: 1
  },

  grass: {
    normal: 1,
    fire: 0.5,
    water: 2,
    electric: 1,
    grass: 0.5,
    ice: 1,
    fighting: 1,
    poison: 0.5,
    ground: 2,
    flying: 0.5,
    psychic: 1,
    bug: 0.5,
    rock: 2,
    ghost: 1,
    dragon: 0.5,
    dark: 1,
    steel: 0.5,
    fairy: 1
  },

  ice: {
    normal: 1,
    fire: 0.5,
    water: 0.5,
    electric: 1,
    grass: 2,
    ice: 0.5,
    fighting: 1,
    poison: 1,
    ground: 2,
    flying: 2,
    psychic: 1,
    bug: 1,
    rock: 1,
    ghost: 1,
    dragon: 2,
    dark: 1,
    steel: 0.5,
    fairy: 1
  },

  fighting: {
    normal: 2,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 2,
    fighting: 1,
    poison: 0.5,
    ground: 1,
    flying: 0.5,
    psychic: 0.5,
    bug: 0.5,
    rock: 2,
    ghost: 0,
    dragon: 1,
    dark: 2,
    steel: 2,
    fairy: 0.5
  },

  poison: {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 2,
    ice: 1,
    fighting: 1,
    poison: 0.5,
    ground: 0.5,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 0.5,
    ghost: 0.5,
    dragon: 1,
    dark: 1,
    steel: 0,
    fairy: 2
  },

  ground: {
    normal: 1,
    fire: 2,
    water: 1,
    electric: 2,
    grass: 0.5,
    ice: 1,
    fighting: 1,
    poison: 2,
    ground: 1,
    flying: 0,
    psychic: 1,
    bug: 0.5,
    rock: 2,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 2,
    fairy: 1
  },

  flying: {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 0.5,
    grass: 2,
    ice: 1,
    fighting: 2,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 2,
    rock: 0.5,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 0.5,
    fairy: 1
  },

  psychic: {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 2,
    poison: 2,
    ground: 1,
    flying: 1,
    psychic: 0.5,
    bug: 1,
    rock: 1,
    ghost: 1,
    dragon: 1,
    dark: 0,
    steel: 0.5,
    fairy: 1
  },

  bug: {
    normal: 1,
    fire: 0.5,
    water: 1,
    electric: 1,
    grass: 2,
    ice: 1,
    fighting: 0.5,
    poison: 0.5,
    ground: 1,
    flying: 0.5,
    psychic: 2,
    bug: 1,
    rock: 1,
    ghost: 0.5,
    dragon: 1,
    dark: 2,
    steel: 0.5,
    fairy: 0.5
  },

  rock: {
    normal: 1,
    fire: 2,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 2,
    fighting: 0.5,
    poison: 1,
    ground: 0.5,
    flying: 2,
    psychic: 1,
    bug: 2,
    rock: 1,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 0.5,
    fairy: 1
  },

  ghost: {
    normal: 0,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 1,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 2,
    bug: 1,
    rock: 1,
    ghost: 2,
    dragon: 1,
    dark: 0.5,
    steel: 1,
    fairy: 1
  },

  dragon: {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 1,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 1,
    ghost: 1,
    dragon: 2,
    dark: 1,
    steel: 0.5,
    fairy: 0
  },

  dark: {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 0.5,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 2,
    bug: 1,
    rock: 1,
    ghost: 2,
    dragon: 1,
    dark: 0.5,
    steel: 1,
    fairy: 0.5
  },

  steel: {
    normal: 1,
    fire: 0.5,
    water: 0.5,
    electric: 0.5,
    grass: 1,
    ice: 2,
    fighting: 1,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 2,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 0.5,
    fairy: 2
  },

  fairy: {
    normal: 1,
    fire: 0.5,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 2,
    poison: 0.5,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 1,
    ghost: 1,
    dragon: 2,
    dark: 2,
    steel: 0.5,
    fairy: 1
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

//Add icons to dropdown
document.querySelectorAll("li[data-value]").forEach(li => {
  const type = li.dataset.value.toLowerCase(); // get data-value
  const iconSpan = li.querySelector(".icon"); // the child <span> where icon goes

  if (typeIcons[type] && iconSpan) {
    iconSpan.textContent = typeIcons[type]; // insert the icon
  }
});

// Script for dropdown
const input = document.getElementById("typeInput");
const list = document.getElementById("dropdownList");
const items = list.querySelectorAll("li");
const wrapper = document.getElementById("typeInputWrapper");
const selectedIcon = document.getElementById("selectedIcon");

// Show dropdown and select all text when input is focused
input.addEventListener("focus", () => {
  list.style.display = "block";

  // Delay selection so it isn't cleared by mouseup
  setTimeout(() => {
    input.select();
  }, 0);
});

// Filter items on input (without changing input.value)
input.addEventListener("input", () => {
  const typedValue = input.value.toLowerCase();
  let firstMatch = null;

  items.forEach((item) => {
    const text = item.querySelector(".label").innerText.toLowerCase();
    const isMatch = text.startsWith(typedValue);
    item.classList.toggle("hidden", !isMatch);

    if (!firstMatch && isMatch) firstMatch = item;
    item.classList.remove("highlight");
  });

  // Highlight first visible match (for visual feedback only)
  if (firstMatch) firstMatch.classList.add("highlight");
});

// Select highlighted item on Enter or Tab
input.addEventListener("keydown", (e) => {
  const highlighted = list.querySelector(".highlight");

  if ((e.key === "Enter" || e.key === "Tab") && highlighted) {
    e.preventDefault();
    selectItem(highlighted);
  }
});

// Select item on click
items.forEach((item) => {
  item.addEventListener("click", () => selectItem(item));
});

// Helper function to handle selection
function selectItem(item) {
  const label = item.querySelector(".label").innerText;
  const icon = item.querySelector(".icon").innerText;
  const typeClass = [...item.classList].find((c) => c.startsWith("type-"));

  // Update input and icon
  input.value = label;
  selectedIcon.textContent = icon;

  // Update wrapper styling
  wrapper.className = "input-wrapper";
  if (typeClass) wrapper.classList.add(typeClass);

  // Highlight selected item
  items.forEach((i) => i.classList.remove("selected", "highlight"));
  item.classList.add("selected");

  // Hide dropdown
  list.style.display = "none";

  console.log("Selected:", item.dataset.value);

  displayResults(item.dataset.value);
}

function displayResults(type) {
  document.getElementById("results").replaceChildren();
  var results = groupByEffectiveness(type);

  printTypes("Super effective!", results["2"]);
  printTypes("Not very effective...", results["0.5"]);
  printTypes("Does not affect!", results["0"]);
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

function printTypes(heading, types) {
  if (!types || types.length === 0) return;
  
  var resultsBox = document.getElementById("results");

  //Print the heading
  const efHeading = document.createElement("h3");
  efHeading.textContent = `${heading}`;
  resultsBox.appendChild(efHeading);

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
    resultsBox.appendChild(tLine);
  });
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
