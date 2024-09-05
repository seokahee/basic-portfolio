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

        // About
        if (targetSection.id === "aboutSection") {
          const aboutMe = [
            { title: "NAME", content: "서가희" },
            { title: "BIRTH", content: "950430" },
            { title: "PHONE", content: "010-5659-8475" },
            { title: "EMAIL", content: "9599kaka@naver.com" },
          ];

          const container = document.querySelector(".about-item");
          container.innerHTML = ""; // 기존 내용 제거

          const delay = 50; // 각 문자 타이핑 간의 지연 시간 (밀리초)
          const initialDelay = 0; // 항목 간의 초기 지연 시간 (밀리초)
          const startDelay = 500; // 전체 애니메이션 시작 전 지연 시간 (밀리초)

          setTimeout(() => {
            aboutMe.forEach((item, index) => {
              const div = document.createElement("div");
              div.classList.add("about-valueBox");

              const title = document.createElement("span");
              title.classList.add("about-title");
              title.innerText = item.title;

              const content = document.createElement("span");
              content.classList.add("about-content");
              content.classList.add("typing-animation"); // 애니메이션 클래스 추가

              div.appendChild(title);
              div.appendChild(content);

              container.appendChild(div);

              // 순차적으로 타이핑 애니메이션을 적용
              setTimeout(() => {
                let i = 0;
                const typingTxt = item.content;

                function typing() {
                  if (i < typingTxt.length) {
                    content.innerHTML += typingTxt.charAt(i);
                    i++;
                  } else {
                    clearInterval(typingInterval); // 타이핑 완료 시 타이머 정지
                    content.style.borderRight = "none"; // 커서 사라지게 함
                  }
                }

                const typingInterval = setInterval(typing, delay);
              }, index * (initialDelay + delay * item.content.length)); // 각 항목에 초기 지연을 적용
            });
          }, startDelay); // 전체 애니메이션 시작 전 지연

          // Skill
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

          frontendList.innerHTML = ""; // 기존 목록 제거
          backendList.innerHTML = ""; // 기존 목록 제거

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
        }
      }
    }
  });
});

// Skill
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

// 캐러셀
const carouselLength = document.querySelectorAll(".cell").length - 1;
let current = 0;

// const vupProjectImages = [
//   { src: "/img/icons/next.png", alt: "Next.js" },
//   { src: "/img/icons/js.png", alt: "JavaScript" },
//   { src: "/img/icons/ts.png", alt: "Typescript" },
//   { src: "/img/icons/redux.png", alt: "Redux" },
//   { src: "/img/icons/zustand.png", alt: "Zustand" },
//   { src: "/img/icons/query.png", alt: "TanStack-Query" },
//   { src: "/img/icons/tailwind.png", alt: "Tailwind css" },
//   { src: "/img/icons/supa.png", alt: "Styled-components" },
// ];

// const vupList = document.getElementById("vUp-list");

// vupProjectImages.forEach((image) => {
//   const li = document.createElement("li");
//   const img = document.createElement("img");
//   img.src = image.src;
//   img.alt = image.alt;
//   li.appendChild(img);
//   vupList.appendChild(li);
// });

const vupTech = [
  "Next.js",
  "React",
  "Typescript",
  "Javascript",
  "Supabase",
  "Zustand",
  "TanStack-Query",
  "Tailwind CSS",
  "React-h5-audio-player",
  "Sweetalert",
];

const vupList = document.getElementById("vUp-list");

vupTech.forEach((tag) => {
  const li = document.createElement("li");
  li.textContent = tag; // 각 li 요소에 기술명을 추가합니다.
  vupList.appendChild(li);
});
