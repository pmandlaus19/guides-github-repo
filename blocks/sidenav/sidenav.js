import { migrateTree } from "../utils.js";
const treeData = [{"displayName":"testMap","isMap":true,"children":[{"displayName":"Vehicle Structure","url":"contents/vehicle-structure"},{"displayName":"Crew and passenger system","url":"contents/crew-and-passenger-system"}],"_key":"GUID-b5cb7f50-a18c-498a-870c-926c56686c0f"},{"displayName":"test","isMap":true,"children":[{"displayName":"test2","url":"contents/test-2"}],"_key":"GUID-a15361ad-044d-48a0-934d-6a3588566090"},{"displayName":"testMapRepublish","isMap":true,"children":[{"displayName":"Administration Concept 089","url":"contents/large-fileset/topic-089"},{"displayName":"Administration Concept 093","url":"contents/large-fileset/topic-093"}],"_key":"GUID-f45e1c99-d042-4219-bfd6-6f87198dd1bb"},{"displayName":"\n    Large Test Book\n  ","isMap":true,"children":[{"displayName":"Administration Submap","url":"","children":[{"displayName":"Administration Concept 077","url":"contents/topic-077"},{"displayName":"Administration Concept 079","url":"contents/topic-079"},{"displayName":"Administration Concept 081","url":"contents/topic-081"},{"displayName":"Administration Concept 083","url":"contents/topic-083"},{"displayName":"Administration Concept 085","url":"contents/topic-085"},{"displayName":"Administration Concept 087","url":"contents/topic-087"},{"displayName":"Administration Concept 089","url":"contents/topic-089"},{"displayName":"Administration Concept 091","url":"contents/topic-091"},{"displayName":"Administration Concept 093","url":"contents/topic-093"},{"displayName":"Administration Concept 095","url":"contents/topic-095"},{"displayName":"Administration Concept 097","url":"contents/topic-097"},{"displayName":"Administration Concept 099","url":"contents/topic-099"},{"displayName":"Administration Topic 076","url":"contents/topic-076"},{"displayName":"Administration Topic 078","url":"contents/topic-078"},{"displayName":"Administration Topic 080","url":"contents/topic-080"},{"displayName":"Administration Topic 084","url":"contents/topic-084"},{"displayName":"Administration Topic 086","url":"contents/topic-086"},{"displayName":"Administration Topic 088","url":"contents/topic-088"},{"displayName":"Administration Topic 090","url":"contents/topic-090"},{"displayName":"Administration Topic 092","url":"contents/topic-092"},{"displayName":"Administration Topic 094","url":"contents/topic-094"},{"displayName":"Administration Topic 096","url":"contents/topic-096"},{"displayName":"Administration Topic 098","url":"contents/topic-098"},{"displayName":"Administration Topic 100","url":"contents/topic-100"},{"displayName":"Authoring Concept 001","url":"contents/topic-001"}],"isMap":true,"_key":"GUID-ec9996af-c013-4597-83a5-fbe2645e1529"},{"displayName":"Authoring Submap","url":"","children":[{"displayName":"Publishing Concept 053","url":"contents/topic-053"},{"displayName":"Publishing Concept 051","url":"contents/topic-051"},{"displayName":"Authoring Topic 024","url":"contents/topic-024"},{"displayName":"Authoring Topic 022","url":"contents/topic-022"},{"displayName":"Authoring Topic 020","url":"contents/topic-020"},{"displayName":"Authoring Topic 018","url":"contents/topic-018"},{"displayName":"Authoring Topic 016","url":"contents/topic-016"},{"displayName":"Authoring Topic 014","url":"contents/topic-014"},{"displayName":"Authoring Topic 012","url":"contents/topic-012"},{"displayName":"Authoring Topic 010","url":"contents/topic-010"},{"displayName":"Authoring Topic 008","url":"contents/topic-008"},{"displayName":"Authoring Topic 006","url":"contents/topic-006"},{"displayName":"Authoring Topic 004","url":"contents/topic-004"},{"displayName":"Authoring Topic 002","url":"contents/topic-002"},{"displayName":"Authoring Concept 025","url":"contents/topic-025"},{"displayName":"Authoring Concept 023","url":"contents/topic-023"},{"displayName":"Authoring Concept 021","url":"contents/topic-021"},{"displayName":"Authoring Concept 019","url":"contents/topic-019"},{"displayName":"Authoring Concept 017","url":"contents/topic-017"},{"displayName":"Authoring Concept 015","url":"contents/topic-015"},{"displayName":"Authoring Concept 003","url":"contents/topic-003"},{"displayName":"Authoring Concept 005","url":"contents/topic-005"},{"displayName":"Authoring Concept 007","url":"contents/topic-007"},{"displayName":"Authoring Concept 009","url":"contents/topic-009"},{"displayName":"Authoring Concept 011","url":"contents/topic-011"},{"displayName":"Authoring Concept 013","url":"contents/topic-013"}],"isMap":true,"_key":"GUID-dc0c3aaa-b5e2-4a74-b287-9286eade9ecc"},{"displayName":"Large Test Map","url":"","children":[{"displayName":"submap_02_reviewing.ditamap","url":"","children":[{"displayName":"Reviewing Topic 044","url":"contents/topic-044"},{"displayName":"Reviewing Topic 042","url":"contents/topic-042"},{"displayName":"Reviewing Topic 040","url":"contents/topic-040"},{"displayName":"Reviewing Topic 038","url":"contents/topic-038"},{"displayName":"Reviewing Topic 034","url":"contents/topic-034"},{"displayName":"Reviewing Topic 032","url":"contents/topic-032"},{"displayName":"Reviewing Topic 030","url":"contents/topic-030"},{"displayName":"Reviewing Topic 028","url":"contents/topic-028"},{"displayName":"Reviewing Topic 026","url":"contents/topic-026"},{"displayName":"Reviewing Concept 049","url":"contents/topic-049"},{"displayName":"Reviewing Concept 047","url":"contents/topic-047"},{"displayName":"Reviewing Concept 045","url":"contents/topic-045"},{"displayName":"Reviewing Concept 043","url":"contents/topic-043"},{"displayName":"Reviewing Concept 041","url":"contents/topic-041"},{"displayName":"Reviewing Concept 039","url":"contents/topic-039"},{"displayName":"Reviewing Concept 037","url":"contents/topic-037"},{"displayName":"Reviewing Concept 035","url":"contents/topic-035"},{"displayName":"Reviewing Concept 033","url":"contents/topic-033"},{"displayName":"Reviewing Concept 031","url":"contents/topic-031"},{"displayName":"Reviewing Concept 029","url":"contents/topic-029"},{"displayName":"Reviewing Concept 027","url":"contents/topic-027"}],"isMap":true,"_key":"GUID-6ff56286-0847-4b99-8d6a-cdb841410b6a"},{"displayName":"submap_03_publishing.ditamap","url":"","children":[{"displayName":"Publishing Topic 072","url":"contents/topic-072"},{"displayName":"Publishing Topic 070","url":"contents/topic-070"},{"displayName":"Publishing Topic 068","url":"contents/topic-068"},{"displayName":"Publishing Topic 066","url":"contents/topic-066"},{"displayName":"Publishing Topic 062","url":"contents/topic-062"},{"displayName":"Publishing Topic 060","url":"contents/topic-060"},{"displayName":"Publishing Topic 058","url":"contents/topic-058"},{"displayName":"Publishing Topic 056","url":"contents/topic-056"},{"displayName":"Publishing Topic 054","url":"contents/topic-054"},{"displayName":"Publishing Topic 052","url":"contents/topic-052"},{"displayName":"Publishing Concept 075","url":"contents/topic-075"},{"displayName":"Publishing Concept 073","url":"contents/topic-073"},{"displayName":"Publishing Concept 071","url":"contents/topic-071"},{"displayName":"Publishing Concept 069","url":"contents/topic-069"},{"displayName":"Publishing Concept 065","url":"contents/topic-065"},{"displayName":"Publishing Concept 063","url":"contents/topic-063"},{"displayName":"Publishing Concept 059","url":"contents/topic-059"},{"displayName":"Publishing Concept 061","url":"contents/topic-061"}],"isMap":true,"_key":"GUID-4c471ae0-9349-417c-b38a-18da7843035d"},{"displayName":"Authoring Submap","url":"","children":[{"displayName":"Publishing Concept 053","url":"contents/topic-053"},{"displayName":"Publishing Concept 051","url":"contents/topic-051"},{"displayName":"Authoring Topic 024","url":"contents/topic-024"},{"displayName":"Authoring Topic 022","url":"contents/topic-022"},{"displayName":"Authoring Topic 020","url":"contents/topic-020"},{"displayName":"Authoring Topic 018","url":"contents/topic-018"},{"displayName":"Authoring Topic 016","url":"contents/topic-016"},{"displayName":"Authoring Topic 014","url":"contents/topic-014"},{"displayName":"Authoring Topic 012","url":"contents/topic-012"},{"displayName":"Authoring Topic 010","url":"contents/topic-010"},{"displayName":"Authoring Topic 008","url":"contents/topic-008"},{"displayName":"Authoring Topic 006","url":"contents/topic-006"},{"displayName":"Authoring Topic 004","url":"contents/topic-004"},{"displayName":"Authoring Topic 002","url":"contents/topic-002"},{"displayName":"Authoring Concept 025","url":"contents/topic-025"},{"displayName":"Authoring Concept 023","url":"contents/topic-023"},{"displayName":"Authoring Concept 021","url":"contents/topic-021"},{"displayName":"Authoring Concept 019","url":"contents/topic-019"},{"displayName":"Authoring Concept 017","url":"contents/topic-017"},{"displayName":"Authoring Concept 015","url":"contents/topic-015"},{"displayName":"Authoring Concept 003","url":"contents/topic-003"},{"displayName":"Authoring Concept 005","url":"contents/topic-005"},{"displayName":"Authoring Concept 007","url":"contents/topic-007"},{"displayName":"Authoring Concept 009","url":"contents/topic-009"},{"displayName":"Authoring Concept 011","url":"contents/topic-011"},{"displayName":"Authoring Concept 013","url":"contents/topic-013"}],"isMap":true,"_key":"GUID-dc0c3aaa-b5e2-4a74-b287-9286eade9ecc"},{"displayName":"Administration Submap","url":"","children":[{"displayName":"Administration Concept 077","url":"contents/topic-077"},{"displayName":"Administration Concept 079","url":"contents/topic-079"},{"displayName":"Administration Concept 081","url":"contents/topic-081"},{"displayName":"Administration Concept 083","url":"contents/topic-083"},{"displayName":"Administration Concept 085","url":"contents/topic-085"},{"displayName":"Administration Concept 087","url":"contents/topic-087"},{"displayName":"Administration Concept 089","url":"contents/topic-089"},{"displayName":"Administration Concept 091","url":"contents/topic-091"},{"displayName":"Administration Concept 093","url":"contents/topic-093"},{"displayName":"Administration Concept 095","url":"contents/topic-095"},{"displayName":"Administration Concept 097","url":"contents/topic-097"},{"displayName":"Administration Concept 099","url":"contents/topic-099"},{"displayName":"Administration Topic 076","url":"contents/topic-076"},{"displayName":"Administration Topic 078","url":"contents/topic-078"},{"displayName":"Administration Topic 080","url":"contents/topic-080"},{"displayName":"Administration Topic 084","url":"contents/topic-084"},{"displayName":"Administration Topic 086","url":"contents/topic-086"},{"displayName":"Administration Topic 088","url":"contents/topic-088"},{"displayName":"Administration Topic 090","url":"contents/topic-090"},{"displayName":"Administration Topic 092","url":"contents/topic-092"},{"displayName":"Administration Topic 094","url":"contents/topic-094"},{"displayName":"Administration Topic 096","url":"contents/topic-096"},{"displayName":"Administration Topic 098","url":"contents/topic-098"},{"displayName":"Administration Topic 100","url":"contents/topic-100"},{"displayName":"Authoring Concept 001","url":"contents/topic-001"}],"isMap":true,"_key":"GUID-ec9996af-c013-4597-83a5-fbe2645e1529"}],"isMap":true,"_key":"GUID-f9bc32df-a01b-46f2-82c7-08ab9f5030a2"},{"displayName":"submap_02_reviewing.ditamap","url":"","children":[{"displayName":"Reviewing Topic 044","url":"contents/topic-044"},{"displayName":"Reviewing Topic 042","url":"contents/topic-042"},{"displayName":"Reviewing Topic 040","url":"contents/topic-040"},{"displayName":"Reviewing Topic 038","url":"contents/topic-038"},{"displayName":"Reviewing Topic 034","url":"contents/topic-034"},{"displayName":"Reviewing Topic 032","url":"contents/topic-032"},{"displayName":"Reviewing Topic 030","url":"contents/topic-030"},{"displayName":"Reviewing Topic 028","url":"contents/topic-028"},{"displayName":"Reviewing Topic 026","url":"contents/topic-026"},{"displayName":"Reviewing Concept 049","url":"contents/topic-049"},{"displayName":"Reviewing Concept 047","url":"contents/topic-047"},{"displayName":"Reviewing Concept 045","url":"contents/topic-045"},{"displayName":"Reviewing Concept 043","url":"contents/topic-043"},{"displayName":"Reviewing Concept 041","url":"contents/topic-041"},{"displayName":"Reviewing Concept 039","url":"contents/topic-039"},{"displayName":"Reviewing Concept 037","url":"contents/topic-037"},{"displayName":"Reviewing Concept 035","url":"contents/topic-035"},{"displayName":"Reviewing Concept 033","url":"contents/topic-033"},{"displayName":"Reviewing Concept 031","url":"contents/topic-031"},{"displayName":"Reviewing Concept 029","url":"contents/topic-029"},{"displayName":"Reviewing Concept 027","url":"contents/topic-027"}],"isMap":true,"_key":"GUID-6ff56286-0847-4b99-8d6a-cdb841410b6a"}],"_key":"GUID-a09717d7-fbac-47a1-b103-129fc0abeb80"}]
const mapTitle = "guides-github-repo-main"
const isDesktop = window.matchMedia("(min-width: 900px)");

function expandHeirarchy(element, root) {
  if (element === root) return;
  let parent = element.parentElement;
  parent.classList.remove("closed");
  expandHeirarchy(parent, root);
}

function expandSelection(parent) {
  let queryString = window.location.search;
  let params = new URLSearchParams(queryString);
  let id = params.get("expand");
  let element = document.getElementById(`sidenav-li-${id}`);
  if (!element) return;
  element.classList.add("selected");
  expandHeirarchy(element, parent);
  element.scrollIntoView();
}

function scrollSidenavSelectionToView() {
  const element = document.querySelector('.sidenav-list-item.selected')
  const sidenavContainer = document.getElementsByClassName("sidenav-container")[0];
  if(!element) return
  if (element.offsetTop < sidenavContainer.scrollTop || element.offsetTop + element.offsetHeight > sidenavContainer.scrollTop + sidenavContainer.clientHeight) {
    sidenavContainer.scrollTo({
      top: Math.max(element.offsetTop - 110, 0),
      behavior: 'smooth'
    });
  }
}



function addResizeBar() {
  const sidenavContainer = document.getElementsByClassName("sidenav-container")[0];
  const div = document.createElement("div");
  div.classList.add('sidenav-resize-bar');
  let isResizing = false
  div.addEventListener('mousedown', (evt) => {
    isResizing = true
    document.addEventListener('mousemove', function (event) {
      if (isResizing) {
        let newWidth = event.pageX - sidenavContainer.offsetLeft;
        sidenavContainer.style.width = `${newWidth}px`;
      }
    })
  })
  document.addEventListener('mouseup', function () {
    if (isResizing) {
      isResizing = false;
    }
  })
  sidenavContainer.insertAdjacentElement("afterend", div)
}

function addExpandCollapseButton() {
  const divWrapper = document.createElement("div");
  divWrapper.classList.add('title-close-wrapper')
  const titleSpan = document.createElement("span");
  titleSpan.classList.add('title-span')
  titleSpan.textContent = mapTitle
  const span = document.createElement("span");
  span.classList.add('sidenav-expand-collapse')
  span.classList.add('open')
  const sidenavContainer = document.getElementsByClassName("sidenav-container")[0];
  span.addEventListener('click', () => {
    const isOpen = span.classList.contains('open')
    const sidenavResizer = document.getElementsByClassName("sidenav-resize-bar")[0];
    if(!isOpen) {
      sidenavContainer.classList.remove('collapse-width')
      sidenavResizer.classList.remove('force-hide')
    } else {
      sidenavContainer.classList.add('collapse-width')
      sidenavResizer.classList.add('force-hide')
    }
    span.classList.toggle("open");
  })
  divWrapper.append(titleSpan)
  divWrapper.append(span)
  sidenavContainer.prepend(divWrapper)
}

function generateId(prefix, suffix) {
  if(prefix) {
      return `${prefix}-${suffix}`
  }
  return `${suffix}`
}


window.addEventListener('aem-app-ready', () => {
  scrollSidenavSelectionToView()
})


function createTree(parent, data, prefix, level) {
  const ul = document.createElement("ul");
  ul.classList.add("tree");
  parent.appendChild(ul);
  data.forEach((item, idx) => {
    const li = document.createElement("li");
    const newPrefix = generateId(prefix, level)
    const _id = generateId(newPrefix, idx);
    li.setAttribute("id", `sidenav-li-${_id}`);
    ul.appendChild(li);
    const anchor = document.createElement("a");
    const span = document.createElement("span");
    span.classList.add("chevron-icon-span");
    anchor.textContent = item.displayName;
    anchor.setAttribute("data-li-id", _id);
    anchor.setAttribute("title", item.displayName);
    anchor.setAttribute("aria-label", item.displayName);
    const siteURL =
      window.location.protocol +
      "//" +
      window.location.hostname +
      (window.location.port ? ":" + window.location.port : "");
    if (item.url) {
      let navURL = new URL(item.url, siteURL).href;
      anchor.setAttribute("href", navURL);
      anchor.addEventListener("click", (event) => {
        event.preventDefault();
        onClick(anchor.getAttribute("data-li-id"), navURL);
      });
    }
    li.classList.add("sidenav-list-item");
    li.classList.add("closed");
    if (item.children) {
      li.classList.add("has-children");
      const wrapperSpan = document.createElement("span");
      wrapperSpan.classList.add("chevron-text-wrapper");
      wrapperSpan.appendChild(span);
      wrapperSpan.appendChild(anchor);
      li.appendChild(wrapperSpan);
      createTree(li, item.children, newPrefix, idx);
    } else {
      li.appendChild(anchor);
    }
  });
}

function onClick(id, navURL) {
  const url = new URL(navURL);
  url.searchParams.set("expand", id); // set the query parameter
  window.location.href = url.toString(); // navigate
}

// Get the treeview element and create the tree
const treeview = document.getElementsByClassName("sidenav")[0];
addExpandCollapseButton();
createTree(treeview, treeData, '', '');
migrateTree(isDesktop);
addResizeBar(treeview);
isDesktop.addEventListener("change", () => migrateTree(isDesktop));
expandSelection(treeview);

// Add click event listener to each span element
treeview.querySelectorAll("span").forEach((span) => {
  span.addEventListener("click", (event) => {
    // Toggle the "closed" class on the parent li element
    event.currentTarget.parentNode.classList.toggle("closed");
  });
});