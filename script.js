async function sharableApps() {
  const response = await fetch('./apps.json');
  const data = await response.json();
  return data;
}
const apps = await sharableApps();
const path = "./assets/sharable-apps/files/";
const container = document.querySelector(".container");

apps.forEach(app => {
  const addApp = `<a href="${path}${app.file}" download>${app.name}</a>`;
  container.insertAdjacentHTML("afterbegin" , addApp);
});