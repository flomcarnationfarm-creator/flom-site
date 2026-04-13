

const slides = document.querySelectorAll(".bg-picture");
const flowerNameEn = document.getElementById("flower-name-en");
const flowerNameJp = document.getElementById("flower-name-jp");
const flowerCopy = document.getElementById("flower-copy");

const flowerData = [
  {
    en: "Sakura Minami",
    jp: "サクラ ミナミ",
    copy: "やわらかな桜色に、繊細な絞りの入る品種。<br>静けさの中に、芯の強さがある。"
  },
  {
    en: "Tyson",
    jp: "タイソン",
    copy: "深い色の奥に、強い輪郭を持つ品種。<br>意図を隠さず、静かに立つ。"
  },
  {
    en: "Brisa",
    jp: "ブリサ",
    copy: "軽やかに見えて、設計の精度が出る品種。<br>環境の差が、そのまま表情になる。"
  },
  {
    en: "Moonlight",
    jp: "ムーンライト",
    copy: "やわらかな光を抱えたような色合い。<br>気配だけを静かに残す。"
  },
  {
    en: "Momoka",
    jp: "モモカ",
    copy: "柔らかさの中に、輪郭を保つ色。<br>選択の積み重ねが、完成度になる。"
  }
];

let current = 0;

function updateText(index) {
  flowerNameEn.classList.add("fade-text");
  flowerNameJp.classList.add("fade-text");
  flowerCopy.classList.add("fade-text");

  setTimeout(() => {
    flowerNameEn.textContent = flowerData[index].en;
    flowerNameJp.textContent = flowerData[index].jp;
    flowerCopy.innerHTML = flowerData[index].copy;

    flowerNameEn.classList.remove("fade-text");
    flowerNameJp.classList.remove("fade-text");
    flowerCopy.classList.remove("fade-text");
  }, 300);
}

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
  updateText(current);
}, 6500);
