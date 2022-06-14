const projectData = [
  {
    imageSrc: './images/works.png',
    title: 'Multi-Post Stories <br> Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    id: 'firstProject',
    popupDescription: {
      imageSrc: './images/popup-desk.png',
      title: 'Keeping track of hundreds of components',
      technologies: ['Ruby on rails', 'css', 'javascript'],
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      demoLink: 'https://nickemma.github.io/techie-emma-portfolio/',
      source: 'https://github.com/NickEmma/techie-emma-portfolio',
    },
  },
  {
    imageSrc: './images/works.png',
    title: 'Multi-Post Stories <br> Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    id: 'secondProject',
    popupDescription: {
      imageSrc: './images/popup-desk.png',
      title: 'Keeping track of hundreds of components',
      technologies: ['Ruby on rails', 'css', 'javascript'],
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      demoLink: 'https://nickemma.github.io/techie-emma-portfolio/',
      source: 'https://github.com/NickEmma/techie-emma-portfolio',
    },
  },
  {
    imageSrc: './images/works.png',
    title: 'Multi-Post Stories <br> Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    id: 'thirdProject',
    popupDescription: {
      imageSrc: './images/popup-desk.png',
      title: 'Keeping track of hundreds of components',
      technologies: ['Ruby on rails', 'css', 'javascript'],
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      demoLink: 'https://nickemma.github.io/techie-emma-portfolio/',
      source: 'https://github.com/NickEmma/techie-emma-portfolio',
    },
  },
  {
    imageSrc: './images/works.png',
    title: 'Multi-Post Stories <br> Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    id: 'fourthProject',
    popupDescription: {
      imageSrc: './images/popup-desk.png',
      title: 'Keeping track of hundreds of components',
      technologies: ['Ruby on rails', 'css', 'javascript'],
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      demoLink: 'https://nickemma.github.io/techie-emma-portfolio/',
      source: 'https://github.com/NickEmma/techie-emma-portfolio',
    },
  },
  {
    imageSrc: './images/works.png',
    title: 'Multi-Post Stories <br> Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    id: 'fifthProject',
    popupDescription: {
      imageSrc: './images/popup-desk.png',
      title: 'Keeping track of hundreds of components',
      technologies: ['Ruby on rails', 'css', 'javascript'],
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      demoLink: 'https://nickemma.github.io/techie-emma-portfolio/',
      source: 'https://github.com/NickEmma/techie-emma-portfolio',
    },
  },
  {
    imageSrc: './images/works.png',
    title: 'Multi-Post Stories <br> Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    id: 'sixthProject',
    popupDescription: {
      imageSrc: './images/popup-desk.png',
      title: 'Keeping track of hundreds of components',
      technologies: ['Ruby on rails', 'css', 'javascript'],
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      demoLink: 'https://nickemma.github.io/techie-emma-portfolio/',
      source: 'https://github.com/NickEmma/techie-emma-portfolio',
    },
  },
];

for (let i = 0; i < projectData.length; i += 1) {
  let li = '';
  for (let k = 0; k < projectData[i].technologies.length; k += 1) {
    li += `<li>${projectData[i].technologies[k]}</li>`;
  }

  const data = document.createElement('div');
  data.classList.add('box');
  data.innerHTML = `
                <div class="image">
                <img src="${projectData[i].imageSrc}" alt=" " /> 
                </div>
                <div class="content">
                    <h3>
                    ${projectData[i].title}
                    </h3>
                    <ul>
                    ${li}
                    </ul>
                    <button id="${projectData[i].id}" type='button' class="btn">See Project</button>
                </div>
    `;

  document.querySelector('.box-container').appendChild(data);
}

const previousBody = document.body;
function pop(event) {
  const clickButton = event.target.getAttribute('id');
  let currentWork = '';
  projectData.forEach((e) => {
    if (clickButton === e.id) currentWork = e;
  });

  const popup = document.createElement('div');
  let liTag = '';
  for (
    let j = 0;
    j < currentWork.popupDescription.technologies.length;
    j += 1
  ) {
    liTag += `<li>${currentWork.popupDescription.technologies[j]}</li>`;
  }

  popup.classList.add('popup-container');
  popup.classList.add('visible');
  popup.setAttribute('id', 'popup');
  popup.innerHTML = `
  <div class="popup">
  <div class="project-image">
       <i class="fas fa-times"></i>
    <img src="${currentWork.popupDescription.imageSrc}" alt=" " />
  </div>

  <div class="pop-desc">
    <h3 class="title">
    ${currentWork.popupDescription.title}
    </h3>
    <ul class="pop-ul">
      ${liTag}
    </ul>
  <p class="text">
   ${currentWork.popupDescription.description}
  </p>
    <div class="popup-buttons">
      <button type="button" class="see-live">
        See Live
          <i class="fas fa-arrow-alt-circle-right"></i>
      </button>
      <button type="button" class="see-live">
        See Source
        <i class="fab fa-github"></i>
    </div>
  </div>  
  </div>
  `;

  const newBody = document.createElement('body');
  newBody.appendChild(popup);
  document.body = newBody;

  document.querySelector('i').addEventListener('click', () => {
    document.body = previousBody;
  });

  document.querySelectorAll('.see-live').forEach((e) => {
    e.addEventListener('click', () => {
      window.open(currentWork.popupDescription.demoLink);
    });
  });

  document.querySelectorAll('.see-source').forEach((e) => {
    e.addEventListener('click', () => {
      window.open(currentWork.popupDescription.source);
    });
  });
}

const clickAction = document.querySelectorAll('.btn');
clickAction.forEach((e) => {
  e.addEventListener('click', pop);
});
