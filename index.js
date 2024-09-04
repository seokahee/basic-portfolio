const toggleBtns = document.querySelectorAll(".toggleBtn");

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);

    // 클릭한 버튼의 상태 확인
    const isActive = btn.classList.contains("active");

    // 모든 버튼에서 active 클래스 제거
    toggleBtns.forEach((button) => {
      button.classList.remove("active");
    });

    // 모든 섹션을 숨김
    document.querySelectorAll(".section-content").forEach((section) => {
      section.classList.remove("active");
    });

    if (!isActive) {
      // 클릭한 버튼이 비활성 상태일 때만 active 클래스 추가
      btn.classList.add("active");

      // 클릭한 버튼의 타겟 섹션만 보이게 함
      if (targetSection) {
        targetSection.classList.add("active");
      }
    }
  });
});

const frontendImages = [
  { src: "/img/icons/next.png", alt: "Next.js" },
  { src: "/img/icons/js.png", alt: "JavaScript" },
  { src: "/img/icons/ts.png", alt: "Typescript" },
  { src: "/img/icons/redux.png", alt: "Redux" },
  { src: "/img/icons/zustand.png", alt: "Zustand" },
  { src: "/img/icons/axios.png", alt: "Axios" },
  { src: "/img/icons/query.png", alt: "TanStack-Query" },
  { src: "/img/icons/tailwind.png", alt: "Tailwind css" },
  { src: "/img/icons/style.png", alt: "Styled-components" },
];

const backendImages = [
  { src: "/img/icons/Java.png", alt: "Java" },
  { src: "/img/icons/cat.png", alt: "Apache Tomcat" },
  { src: "/img/icons/oracle.png", alt: "Oracle" },
  { src: "/img/icons/sql.png", alt: "SQL" },
  { src: "/img/icons/my.png", alt: "MySQL" },
];

const frontendList = document.getElementById("frontend-list");
const backendList = document.getElementById("backend-list");

frontendImages.forEach((image) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.alt;
  li.appendChild(img);
  frontendList.appendChild(li);
});

backendImages.forEach((image) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.alt;
  li.appendChild(img);
  backendList.appendChild(li);
});

const aboutMe = [
  { label: "NAME", value: "서가희" },
  { label: "BIRTH", value: "1995-04-30" },
  { label: "EMAIL", value: "9599kaka@naver.com" },
  { label: "PHONE", value: "010-5659-8475" },
  { label: "INTRO", value: "다양한 시도를 좋아하는 개발자입니다." },
];

const container = document.querySelector(".about-container");

aboutMe.forEach((item) => {
  const div = document.createElement("div");
  div.classList.add("about-item");

  const label = document.createElement("span");
  label.classList.add("about-label");
  label.textContent = `${item.label}_`;

  const value = document.createElement("span");
  value.classList.add("about-value");
  value.textContent = item.value;

  div.appendChild(label);
  div.appendChild(value);

  container.appendChild(div);
});
