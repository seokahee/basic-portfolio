const audio = document.getElementById("audio");
const initialContainer = document.querySelector(".initial-container");
const soundOnBtn = document.getElementById("sound-on");
const soundOffBtn = document.getElementById("sound-off");
const audioPlayer = document.querySelector(".audio-player");
const audioBtn = document.querySelector(".audio-btn");
const volumeBar = document.getElementById("volumeBar");

let isPlaying = false; // 현재 재생 상태 변수

// 디폴트 볼륨 설정
const defaultVolume = 0.05;
audio.volume = defaultVolume;
volumeBar.value = defaultVolume; // 슬라이더 디폴트 값 설정

// 초기 화면 숨기기 및 플레이어 표시
function hideInitialShowPlayer() {
  initialContainer.style.display = "none";
  audioPlayer.style.display = "block";
}

// 사운드 ON 버튼 클릭 시 동작
soundOnBtn.addEventListener("click", () => {
  hideInitialShowPlayer();
  audio.play(); // 자동 재생
  audioBtn.innerText = "OFF"; // 버튼 텍스트
  isPlaying = true;
});

// 사운드 OFF 버튼 클릭 시 동작
soundOffBtn.addEventListener("click", () => {
  hideInitialShowPlayer();
  audio.pause(); // 재생하지 않음
  audioBtn.innerText = "ON";
  isPlaying = false;
});

// 재생/일시 정지 버튼 클릭 시 동작
audioBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    audioBtn.innerText = "ON";
  } else {
    audio.play();
    audioBtn.innerText = "OFF";
  }
  isPlaying = !isPlaying;
});

// 볼륨 조절 기능
volumeBar.addEventListener("input", () => {
  audio.volume = volumeBar.value;
});

// toggle
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
          container.innerText = ""; // 애니메이션 재시작을 위해 내용 제거

          const delay = 50; // 각 문자 타이핑 간의 지연 시간
          const initialDelay = 0; // 항목 간의 초기 지연 시간
          const startDelay = 500; // 전체 애니메이션 시작 전 지연 시간

          setTimeout(() => {
            aboutMe.forEach((item, index) => {
              const div = document.createElement("div");
              div.classList.add("about-valueBox");

              const title = document.createElement("span");
              title.classList.add("about-title");
              title.innerText = item.title;

              const content = document.createElement("span");
              content.classList.add("about-content");

              if (item.content === "서가희") {
                content.classList.add("about-name");
              }

              div.appendChild(title);
              div.appendChild(content);

              container.appendChild(div);

              // 순차적으로 타이핑 애니메이션 적용
              setTimeout(() => {
                let i = 0;
                const typingTxt = item.content;

                function typing() {
                  if (i < typingTxt.length) {
                    content.innerText += typingTxt.charAt(i);
                    i++;
                  } else {
                    clearInterval(typingInterval); // 타이핑 완료 시 타이머 정지
                    content.style.borderRight = "none"; // 커서 사라지게 함
                  }
                }

                const typingInterval = setInterval(typing, delay);
              }, index * (initialDelay + delay * item.content.length)); // 각 항목에 지연시간 적용
            });
          }, startDelay); // 전체 애니메이션 시작 전 지연
        }

        // Activities;
        const ghost = document.querySelector(".ghost");

        // Click event handler function
        function handleClick() {
          alert("깜짝이야!");
          ghost.style.opacity = "0"; // 클릭 시 opacity를 0으로 설정하여 숨김
          ghost.removeEventListener("click", handleClick); // 클릭 후 이벤트 리스너 제거
        }

        function updateGhost() {
          if (targetSection.id === "activitiesSection") {
            if (getComputedStyle(ghost).opacity === "0") {
              ghost.style.opacity = "1";
            }
            ghost.addEventListener("click", handleClick, { once: true });
          } else {
            ghost.removeEventListener("click", handleClick);
          }
        }

        updateGhost();
      }
    }
  });
});

// Skill
const frontendImages = [
  {
    src: "https://github.com/seokahee/basic-portfolio/blob/main/img/icons/next.png?raw=true",
    alt: "Next.js",
  },
  {
    src: "https://github.com/seokahee/basic-portfolio/blob/main/img/icons/js.png?raw=true",
    alt: "JavaScript",
  },
  {
    src: "https://github.com/seokahee/basic-portfolio/blob/main/img/icons/ts.png?raw=true",
    alt: "Typescript",
  },
  {
    src: "https://github.com/seokahee/basic-portfolio/blob/main/img/icons/redux.png?raw=true",
    alt: "Redux",
  },
  {
    src: "https://github.com/seokahee/basic-portfolio/blob/main/img/icons/zustand.png?raw=true",
    alt: "Zustand",
  },
  {
    src: "https://github.com/seokahee/basic-portfolio/blob/main/img/icons/axios.png?raw=true",
    alt: "Axios",
  },
  {
    src: "https://github.com/seokahee/basic-portfolio/blob/main/img/icons/query.png?raw=true",
    alt: "TanStack-Query",
  },
  {
    src: "https://github.com/seokahee/basic-portfolio/blob/main/img/icons/tailwind.png?raw=true",
    alt: "Tailwind css",
  },
  {
    src: "https://github.com/seokahee/basic-portfolio/blob/main/img/icons/style.png?raw=true",
    alt: "Styled-components",
  },
];

const backendImages = [
  {
    src: "https://github.com/seokahee/basic-portfolio/blob/main/img/icons/Java.png?raw=true",
    alt: "Java",
  },
  {
    src: "https://github.com/seokahee/basic-portfolio/blob/main/img/icons/cat.png?raw=true",
    alt: "Apache Tomcat",
  },
  {
    src: "https://github.com/seokahee/basic-portfolio/blob/main/img/icons/oracle.png?raw=true",
    alt: "Oracle",
  },
  {
    src: "https://github.com/seokahee/basic-portfolio/blob/main/img/icons/sql.png?raw=true",
    alt: "SQL",
  },
  {
    src: "https://github.com/seokahee/basic-portfolio/blob/main/img/icons/my.png?raw=true",
    alt: "MySQL",
  },
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

// Project
const cardColors = ["rgb(20 20 20)", "rgb(20 20 20)"];
const cardShadow = ["rgb(255 0 0)", "#0bff00"];
const cardBorder = ["rgb(255 0 0)", "#0bff00"];

const projects = [
  {
    projectName: "V-Up",
    img: "https://github.com/seokahee/basic-portfolio/blob/main/img/gif/vUP.gif?raw=true",
    imgArl: "V-UP",
    ProjectLink: "",
  },
  {
    projectName: "BookPang",
    img: "https://github.com/seokahee/basic-portfolio/blob/main/img/gif/BookPang.gif?raw=true",
    imgArl: "BookPang",
    ProjectLink: "",
  },
];

function createProjectCards() {
  const container = document.querySelector(".project-container");
  projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    const projectName = document.createElement("p");
    projectName.classList.add("project-name");
    projectName.innerText = project.projectName;

    const projectImg = document.createElement("img");
    projectImg.classList.add("project-img");
    projectImg.src = project.img;
    projectImg.alt = project.imgArl;

    const projectLink = document.createElement("a");

    // 프로젝트 링크 여부에 따라 처리
    if (project.ProjectLink === "") {
      // 링크가 없으면 클릭 시 알림창
      projectLink.addEventListener("click", (event) => {
        event.preventDefault(); // 링크 동작 막기
        alert("준비 중입니다.");
      });
    } else {
      // 링크가 있을 때는 정상적으로 링크로 이동
      projectLink.href = project.ProjectLink;
      projectLink.target = "_blank";
    }

    projectLink.appendChild(projectImg);

    card.appendChild(projectName);
    card.appendChild(projectLink);

    // 카드 스타일
    const bgColor = cardColors[index % cardColors.length];
    const boxShadow = `0px 1px 20px 5px ${
      cardShadow[index % cardShadow.length]
    }`;
    const border = `5px solid ${cardBorder[index % cardBorder.length]}`;

    // 스타일 적용
    card.style.bgColor = bgColor;
    card.style.boxShadow = boxShadow;
    card.style.border = border;

    // dataset = 카드의 원래 색과 그림자를 저장
    card.dataset.backgroundColor = bgColor;
    card.dataset.boxShadow = boxShadow;
    card.dataset.border = border;

    container.appendChild(card);
  });
}

window.onload = createProjectCards;

const container = document.querySelector(".project-container");
container.classList.add("active");

const overlay = document.querySelector(".overlay");

container.addEventListener("mouseover", (event) => {
  const card = event.target.closest(".project-card"); // 이벤트 타겟 찾기
  if (card) {
    overlay.classList.add("active");
    container.classList.remove("active");

    card.style.boxShadow = "none";
    card.style.border = "none";
  }
});

container.addEventListener("mouseout", (event) => {
  const card = event.target.closest(".project-card");
  if (card) {
    overlay.classList.remove("active");
    container.classList.add("active");

    card.style.boxShadow = card.dataset.boxShadow;
    card.style.border = card.dataset.border;
  }
});
