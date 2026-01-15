fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector(".container");

    data.forEach((testimonial) => {
      const article = `
        <article class="${testimonial.class}">
          <div class="data">
            <div class="photo">
              <img src="${testimonial.image}" alt="${testimonial.name}" />
            </div>
            <div class="personal-info">
              <p class="name">${testimonial.name}</p>
              <p class="graduate">Verified Graduate</p>
            </div>
          </div>
          <div class="title">
            <h2>${testimonial.title}</h2>
          </div>
          <div class="paragraph">
            <p>" ${testimonial.paragraph} "</p>
          </div>
        </article>
      `;
      container.innerHTML += article;
    });
  });
