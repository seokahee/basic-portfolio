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
          backendList.innerHTML = "";

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

// project
// 카드색
// const frontColors = ["rgb(20 20 20)", "rgb(219 219 219)"];
// const frontShadow = ["rgb(110 0 0)", "rgb(0 102 162)"];

// // const backColors = ["rgb(20 20 20)", "#FFF"];
// const backShadow = ["rgb(110 0 0)", "rgb(0 102 162)"];

// const projects = [
//   {
//     projectName: "V-Up",
//     projectLink: "https://re-v-up-ver-3.vercel.app/",
//     description: "음악과 커뮤니티 결합 서비스",
//     tech: [
//       "Next.js",
//       "React",
//       "Typescript",
//       "Javascript",
//       "Supabase",
//       "Zustand",
//       "TanStack-Query",
//       "Tailwind CSS",
//       "React-h5-audio-player",
//       "Sweetalert",
//     ],
//   },
//   {
//     projectName: "BookPang",
//     projectLink: "",
//     description: "준비중 입니다.",
//     tech: [
//       "Next.js",
//       "React",
//       "Typescript",
//       "Javascript",
//       "Zustand",
//       "TanStack-Query",
//     ],
//   },
// ];

// // 카드 생성하는 함수
// function createProjectCards() {
//   const container = document.querySelector(".project-container");
//   projects.forEach((project, index) => {
//     // 카드 컨테이너
//     const cardContainer = document.createElement("div");
//     cardContainer.classList.add("projectCard-container");

//     // 앞면 카드
//     const frontCard = document.createElement("div");
//     frontCard.classList.add("card-side", "project-front");

//     // 링크가 있을 때만 <a> 태그 생성
//     if (project.projectLink) {
//       const logoLink = document.createElement("a");
//       logoLink.href = project.projectLink;
//       logoLink.target = "_blank"; // 새로운 탭에서 열기

//       const projectTitle = document.createElement("h3");
//       projectTitle.innerText = project.projectName;

//       logoLink.appendChild(projectTitle);
//       frontCard.appendChild(logoLink);
//     } else {
//       const projectTitle = document.createElement("h3");
//       projectTitle.innerText = project.projectName;
//       frontCard.appendChild(projectTitle);
//     }

//     // 뒷면 카드
//     const backCard = document.createElement("div");
//     backCard.classList.add("card-side", "project-back");
//     const description = document.createElement("p");
//     description.textContent = project.description;
//     const techList = document.createElement("ul");
//     project.tech.forEach((tech) => {
//       const li = document.createElement("li");
//       li.textContent = tech;
//       techList.appendChild(li);
//     });
//     backCard.appendChild(description);
//     backCard.appendChild(techList);

//     // 카드 컨테이너에 앞면과 뒷면 추가
//     cardContainer.appendChild(frontCard);
//     cardContainer.appendChild(backCard);

//     // 카드의 배경색 및 그림자 적용
//     frontCard.style.background = frontColors[index % frontColors.length];
//     frontCard.style.boxShadow = `0px 1px 20px 20px ${
//       frontShadow[index % frontShadow.length]
//     }`;

//     // backCard.style.background = backColors[index % backColors.length];
//     backCard.style.boxShadow = `0px 1px 20px 20px ${
//       backShadow[index % backShadow.length]
//     }`;

//     // 전체 프로젝트 컨테이너에 카드 추가
//     container.appendChild(cardContainer);
//   });
// }

// // 카드를 페이지 로드 시 생성
// window.onload = createProjectCards;

const container = document.querySelector(".project-tech");

const vUPImages = [
  { src: "/img/icons/next.png", alt: "Next.js" },
  { src: "/img/icons/js.png", alt: "JavaScript" },
  { src: "/img/icons/ts.png", alt: "Typescript" },
  { src: "/img/icons/zustand.png", alt: "Zustand" },
  { src: "/img/icons/query.png", alt: "TanStack-Query" },
  { src: "/img/icons/tailwind.png", alt: "Tailwind css" },
  { src: "/img/icons/supa.png", alt: "supabase" },
];

vUPImages.forEach((image) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.alt;
  li.appendChild(img);
  container.appendChild(li);
});
