export default function breadCrumb() {
  const breadCrumbList =
    document.getElementById("breadcrumbList") != null
      ? document.getElementById("breadcrumbList")
      : null;

  if (breadCrumbList) {
    for (let i = 0; i < breadCrumbList.childElementCount; i++) {
      if (i == 0) {
        breadCrumbList.children[0].firstElementChild.innerHTML = `<i class="icon-home"></i>`;
      }

      if (i != breadCrumbList.childElementCount - 1) {
        breadCrumbList.children[
          i
        ].innerHTML += `<i class="icon-right-big mr-1"></i>`;
      }
    }

    if (document.getElementById("breadcrumbContainer") != null) {
      setTimeout(function() {
        document
          .getElementById("breadcrumbContainer")
          .classList.remove("opacity-0");
      }, 100);
    }
  }

  const breadcrumbContent =
    document.getElementById("breadcrumbContent") != null
      ? document.getElementById("breadcrumbContent")
      : null;

  const breadcrumbTitle =
    document.getElementById("breadcrumbTitle") != null
      ? document.getElementById("breadcrumbTitle").innerHTML
      : breadCrumbList.lastElementChild.textContent;

  const breadcrumbDescription =
    document.getElementById("breadcrumbDescription") != null
      ? document.getElementById("breadcrumbDescription")
      : null;

  if (breadcrumbContent) {
    if (breadcrumbTitle) {
      breadcrumbContent.firstElementChild.innerHTML = breadcrumbTitle;
    } else {
      breadcrumbContent.firstElementChild.classList.add("hidden");
    }

    if (breadcrumbDescription) {
      breadcrumbContent.lastElementChild.innerHTML =
        breadcrumbDescription.innerHTML;
      breadcrumbDescription.parentElement.classList.add("hidden");
    } else {
      breadcrumbContent.lastElementChild.classList.add("hidden");
    }
  } else {
    document.getElementById("breadcrumbContent").classList.add("hidden");
  }
}
