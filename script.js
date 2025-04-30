const container = document.getElementById("projects-container");

fetch("YOUR_SANITY_OR_CMS_API_URL")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <img src="${project.imageUrl}" width="300" />
      `;
      container.appendChild(projectDiv);
    });
  });
