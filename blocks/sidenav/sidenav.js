import { migrateTree } from "../utils.js";
const treeData = [{"displayName":"test3","isMap":true,"children":[{"displayName":"checktableinisolation.dita","url":"contents/eds-canonicalization-test/checktableinisolation"},{"displayName":"Table-only isolated repro (EDS)","url":"contents/eds-canonicalization-test/table-only-isolated"},{"displayName":"LVGL","url":"contents/mapexport-guiguiderug-1-7-0-1788534925452/content/topics/lvgl"},{"displayName":"div/p canonicalization repro (EDS)","url":"contents/eds-canonicalization-test/div-paragraph-canonicalization-repro"},{"displayName":"Yocto","url":"contents/mapexport-guiguiderug-1-7-0-1788534925452/content/topics/yocto"},{"displayName":"Content","url":"contents/mapexport-guiguiderug-1-7-0-1788534925452/content/topics/content"},{"displayName":"Button","url":"contents/mapexport-guiguiderug-1-7-0-1788534925452/content/topics/button-0"},{"displayName":"Window","url":"contents/mapexport-guiguiderug-1-7-0-1788534925452/content/topics/window-0"},{"displayName":"MCUXpresso","url":"contents/mapexport-guiguiderug-1-7-0-1788534925452/content/topics/prerequisites-003"},{"displayName":"Overview","url":"contents/mapexport-guiguiderug-1-7-0-1788534925452/content/topics/overview"},{"displayName":"Administration Concept 077","url":"contents/large-fileset/topic-077"}],"_key":"GUID-c0bbd913-cf60-4934-bb5e-81b1f7af46f2"},{"displayName":"\n    Large Test Book\n  ","isMap":true,"children":[{"displayName":"","url":"","children":[{"displayName":"","url":""}]},{"displayName":"topic_077","url":"contents/topic-077"},{"displayName":"topic_079","url":"contents/topic-079"},{"displayName":"topic_081","url":"contents/topic-081"},{"displayName":"topic_083","url":"contents/topic-083"},{"displayName":"topic_085","url":"contents/topic-085"},{"displayName":"topic_087","url":"contents/topic-087"},{"displayName":"topic_089","url":"contents/topic-089"},{"displayName":"topic_091","url":"contents/topic-091"},{"displayName":"topic_093","url":"contents/topic-093"},{"displayName":"topic_095","url":"contents/topic-095"},{"displayName":"topic_097","url":"contents/topic-097"},{"displayName":"topic_099","url":"contents/topic-099"},{"displayName":"topic_076","url":"contents/topic-076"},{"displayName":"topic_078","url":"contents/topic-078"},{"displayName":"topic_080","url":"contents/topic-080"},{"displayName":"topic_084","url":"contents/topic-084"},{"displayName":"topic_086","url":"contents/topic-086"},{"displayName":"topic_088","url":"contents/topic-088"},{"displayName":"topic_090","url":"contents/topic-090"},{"displayName":"topic_092","url":"contents/topic-092"},{"displayName":"topic_094","url":"contents/topic-094"},{"displayName":"topic_096","url":"contents/topic-096"},{"displayName":"topic_098","url":"contents/topic-098"},{"displayName":"topic_100","url":"contents/topic-100"},{"displayName":"topic_001","url":"contents/topic-001"},{"displayName":"topic_053","url":"contents/topic-053"},{"displayName":"topic_051","url":"contents/topic-051"},{"displayName":"topic_024","url":"contents/topic-024"},{"displayName":"topic_022","url":"contents/topic-022"},{"displayName":"topic_020","url":"contents/topic-020"},{"displayName":"topic_018","url":"contents/topic-018"},{"displayName":"topic_016","url":"contents/topic-016"},{"displayName":"topic_014","url":"contents/topic-014"},{"displayName":"topic_012","url":"contents/topic-012"},{"displayName":"topic_010","url":"contents/topic-010"},{"displayName":"topic_008","url":"contents/topic-008"},{"displayName":"topic_006","url":"contents/topic-006"},{"displayName":"topic_004","url":"contents/topic-004"},{"displayName":"topic_002","url":"contents/topic-002"},{"displayName":"topic_025","url":"contents/topic-025"},{"displayName":"topic_023","url":"contents/topic-023"},{"displayName":"topic_021","url":"contents/topic-021"},{"displayName":"topic_019","url":"contents/topic-019"},{"displayName":"topic_017","url":"contents/topic-017"},{"displayName":"topic_015","url":"contents/topic-015"},{"displayName":"topic_003","url":"contents/topic-003"},{"displayName":"topic_005","url":"contents/topic-005"},{"displayName":"topic_007","url":"contents/topic-007"},{"displayName":"topic_009","url":"contents/topic-009"},{"displayName":"topic_011","url":"contents/topic-011"},{"displayName":"topic_013","url":"contents/topic-013"},{"displayName":"topic_040","url":"contents/topic-040"},{"displayName":"topic_038","url":"contents/topic-038"},{"displayName":"topic_034","url":"contents/topic-034"},{"displayName":"topic_032","url":"contents/topic-032"},{"displayName":"topic_030","url":"contents/topic-030"},{"displayName":"topic_028","url":"contents/topic-028"},{"displayName":"topic_026","url":"contents/topic-026"},{"displayName":"topic_049","url":"contents/topic-049"},{"displayName":"topic_047","url":"contents/topic-047"},{"displayName":"topic_045","url":"contents/topic-045"},{"displayName":"topic_043","url":"contents/topic-043"},{"displayName":"topic_041","url":"contents/topic-041"},{"displayName":"topic_039","url":"contents/topic-039"},{"displayName":"topic_037","url":"contents/topic-037"},{"displayName":"topic_035","url":"contents/topic-035"},{"displayName":"topic_033","url":"contents/topic-033"},{"displayName":"topic_031","url":"contents/topic-031"},{"displayName":"topic_029","url":"contents/topic-029"},{"displayName":"topic_027","url":"contents/topic-027"},{"displayName":"topic_072","url":"contents/topic-072"},{"displayName":"topic_070","url":"contents/topic-070"},{"displayName":"topic_068","url":"contents/topic-068"},{"displayName":"topic_066","url":"contents/topic-066"},{"displayName":"topic_062","url":"contents/topic-062"},{"displayName":"topic_060","url":"contents/topic-060"},{"displayName":"topic_058","url":"contents/topic-058"},{"displayName":"topic_056","url":"contents/topic-056"},{"displayName":"topic_054","url":"contents/topic-054"},{"displayName":"topic_052","url":"contents/topic-052"},{"displayName":"topic_075","url":"contents/topic-075"},{"displayName":"topic_073","url":"contents/topic-073"},{"displayName":"topic_071","url":"contents/topic-071"},{"displayName":"topic_069","url":"contents/topic-069"},{"displayName":"topic_065","url":"contents/topic-065"},{"displayName":"topic_063","url":"contents/topic-063"},{"displayName":"topic_059","url":"contents/topic-059"},{"displayName":"topic_061","url":"contents/topic-061"},{"displayName":"topic_053","url":"contents/topic-053"},{"displayName":"topic_051","url":"contents/topic-051"},{"displayName":"topic_024","url":"contents/topic-024"},{"displayName":"topic_022","url":"contents/topic-022"},{"displayName":"topic_020","url":"contents/topic-020"},{"displayName":"topic_018","url":"contents/topic-018"},{"displayName":"topic_016","url":"contents/topic-016"},{"displayName":"topic_014","url":"contents/topic-014"},{"displayName":"topic_012","url":"contents/topic-012"},{"displayName":"topic_010","url":"contents/topic-010"},{"displayName":"topic_008","url":"contents/topic-008"},{"displayName":"topic_006","url":"contents/topic-006"},{"displayName":"topic_004","url":"contents/topic-004"},{"displayName":"topic_002","url":"contents/topic-002"},{"displayName":"topic_025","url":"contents/topic-025"},{"displayName":"topic_023","url":"contents/topic-023"},{"displayName":"topic_021","url":"contents/topic-021"},{"displayName":"topic_019","url":"contents/topic-019"},{"displayName":"topic_017","url":"contents/topic-017"},{"displayName":"topic_015","url":"contents/topic-015"},{"displayName":"topic_003","url":"contents/topic-003"},{"displayName":"topic_005","url":"contents/topic-005"},{"displayName":"topic_007","url":"contents/topic-007"},{"displayName":"topic_009","url":"contents/topic-009"},{"displayName":"topic_011","url":"contents/topic-011"},{"displayName":"topic_013","url":"contents/topic-013"},{"displayName":"topic_077","url":"contents/topic-077"},{"displayName":"topic_079","url":"contents/topic-079"},{"displayName":"topic_081","url":"contents/topic-081"},{"displayName":"topic_083","url":"contents/topic-083"},{"displayName":"topic_085","url":"contents/topic-085"},{"displayName":"topic_087","url":"contents/topic-087"},{"displayName":"topic_089","url":"contents/topic-089"},{"displayName":"topic_091","url":"contents/topic-091"},{"displayName":"topic_093","url":"contents/topic-093"},{"displayName":"topic_095","url":"contents/topic-095"},{"displayName":"topic_097","url":"contents/topic-097"},{"displayName":"topic_099","url":"contents/topic-099"},{"displayName":"topic_076","url":"contents/topic-076"},{"displayName":"topic_078","url":"contents/topic-078"},{"displayName":"topic_080","url":"contents/topic-080"},{"displayName":"topic_084","url":"contents/topic-084"},{"displayName":"topic_086","url":"contents/topic-086"},{"displayName":"topic_088","url":"contents/topic-088"},{"displayName":"topic_090","url":"contents/topic-090"},{"displayName":"topic_092","url":"contents/topic-092"},{"displayName":"topic_094","url":"contents/topic-094"},{"displayName":"topic_096","url":"contents/topic-096"},{"displayName":"topic_098","url":"contents/topic-098"},{"displayName":"topic_100","url":"contents/topic-100"},{"displayName":"topic_001","url":"contents/topic-001"},{"displayName":"topic_040","url":"contents/topic-040"},{"displayName":"topic_038","url":"contents/topic-038"},{"displayName":"topic_034","url":"contents/topic-034"},{"displayName":"topic_032","url":"contents/topic-032"},{"displayName":"topic_030","url":"contents/topic-030"},{"displayName":"topic_028","url":"contents/topic-028"},{"displayName":"topic_026","url":"contents/topic-026"},{"displayName":"topic_049","url":"contents/topic-049"},{"displayName":"topic_047","url":"contents/topic-047"},{"displayName":"topic_045","url":"contents/topic-045"},{"displayName":"topic_043","url":"contents/topic-043"},{"displayName":"topic_041","url":"contents/topic-041"},{"displayName":"topic_039","url":"contents/topic-039"},{"displayName":"topic_037","url":"contents/topic-037"},{"displayName":"topic_035","url":"contents/topic-035"},{"displayName":"topic_033","url":"contents/topic-033"},{"displayName":"topic_031","url":"contents/topic-031"},{"displayName":"topic_029","url":"contents/topic-029"},{"displayName":"topic_027","url":"contents/topic-027"}],"_key":"GUID-a09717d7-fbac-47a1-b103-129fc0abeb80"}]
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