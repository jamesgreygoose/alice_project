let facts = [
  `"Cheetahs hunt alone."`,
  `"Cheetahs are cats."`,
  `"They would be too cold in a snowy country."`,
  `"They run so fast because they are light and have long legs."`,
  `"They live in dry grassland in Africa."`,
  `"They are yellow and black so they can camouflage in the desert."`,
  `"They are hunters or predators."`,
  `"Cheetahs are hunted for their fur."`,
  `"They are the fastest cat on the planet."`,
  `"Cheetahs are the fastest land animal in the world."`,
  `"They have sharp claws that stick out all the time"`,
  `"They eat zebras and antelopes. They are carnivores."`,
];

function newFact() {
  document.querySelector("#factBox").innerText =
    facts[Math.floor(Math.random() * 12)];
}
