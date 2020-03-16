export default function breadCrumb() {
  const breadcrumbList =
    document.getElementById("breadcrumbList") != null
      ? document.getElementById("breadcrumbList")
      : null;
  const breadcrumbChilds =
    breadcrumbList != null ? Array.from(breadcrumbList.children) : null;

  const pathFormated = window.location.pathname.split("/");
  let pathTitle = pathFormated[pathFormated.length - 1];
  if (pathTitle.includes("-")) {
    pathTitle = pathTitle.split("-");
    pathTitle = pathTitle.join(" ");
  }

  const breadcrumbTitle =
    document.getElementById("breadcrumbTitle") != null
      ? document.getElementById("breadcrumbTitle").innerText
      : pathTitle;

  if (breadcrumbList) {
    breadcrumbList.firstElementChild.firstElementChild.innerHTML = `<i class="icon-home"></i>`;
  }

  if (breadcrumbChilds) {
    breadcrumbChilds.forEach(child => {
      child.innerHTML += `<i class="icon-right-big mr-1"></i>`;
    });
    breadcrumbList.innerHTML += `<li class="capitalize">${breadcrumbTitle}</li>`;
  }
  const breadcrumbDescription =
    document.getElementById("breadcrumbDescription") != null
      ? document.getElementById("breadcrumbDescription")
      : null;

  const breadcrumbContent =
    document.getElementById("breadcrumbContent") != null
      ? document.getElementById("breadcrumbContent")
      : null;

  if (breadcrumbContent) {
    if (breadcrumbTitle) {
      breadcrumbContent.firstElementChild.innerText = breadcrumbTitle;
    } else {
      breadcrumbContent.firstElementChild.classList.add("hidden");
    }

    if (breadcrumbDescription) {
      breadcrumbContent.lastElementChild.innerText =
        breadcrumbDescription.innerText;
      breadcrumbDescription.parentElement.classList.add("hidden");
    } else {
      breadcrumbContent.lastElementChild.classList.add("hidden");
    }
  } else {
    document.getElementById("breadcrumbContent").classList.add("hidden");
  }
}
