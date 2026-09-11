import { migrateTree } from "../utils.js";
const treeData = [{"displayName":"Product Guide","isMap":true,"children":[{"displayName":"testfolder","url":"contents/publishfolder/sidenav-test-filesets/testfolder"},{"displayName":"level1.dita","url":"contents/publishfolder/testfolderstructure/level1"},{"displayName":"Quick Start Guide","url":"contents/publishfolder/sidenav-test-filesets/topics/quick-start"},{"displayName":"Installing the Product","url":"contents/publishfolder/sidenav-test-filesets/getting-started/installation"},{"displayName":"Your First Project","url":"contents/publishfolder/sidenav-test-filesets/getting-started/first-project"},{"displayName":"Caching Strategies","url":"contents/publishfolder/sidenav-test-filesets/getting-started/configuration/advanced-tuning/caching"},{"displayName":"Legal Notice","url":"contents/publishfolder/sidenav-test-filesets/shared/legal-notice"},{"displayName":"Reference","url":"","children":[{"displayName":"API Reference","url":"contents/publishfolder/sidenav-test-filesets/reference/api-reference"},{"displayName":"CLI Reference","url":"contents/publishfolder/sidenav-test-filesets/reference/cli-reference"}]},{"displayName":"Configuration Basics","url":"contents/publishfolder/sidenav-test-filesets/getting-started/configuration/config-basics"},{"displayName":"Glossary of Terms","url":"contents/publishfolder/sidenav-test-filesets/appendix/glossary"}],"_key":"GUID-1f1b4a7f-8c01-454c-b1b6-b8873099fb3d"},{"displayName":"sameFolder","isMap":true,"children":[{"displayName":"video_embed_test","url":"contents/check-1/pdfproject/dita/test2/video-embed-test"},{"displayName":"testtopicsvg","url":"contents/check-1/pdfproject/dita/test2/testtopicsvg"},{"displayName":"iframe_edge_cases_test","url":"contents/check-1/pdfproject/dita/test3/iframe-edge-cases-test"}],"_key":"GUID-cd6311c7-29b8-41f0-9a9c-3d798f6e7b98"},{"displayName":"testMapRepublish","isMap":true,"children":[{"displayName":"Administration Concept 089","url":"contents/check/large-fileset/topic-089"},{"displayName":"Administration Concept 093","url":"contents/check/large-fileset/topic-093"}],"_key":"GUID-f45e1c99-d042-4219-bfd6-6f87198dd1bb"},{"displayName":"test3","isMap":true,"children":[{"displayName":"Video Embed Test","url":"contents/test2/video-embed-test"}],"_key":"GUID-c0bbd913-cf60-4934-bb5e-81b1f7af46f2"},{"displayName":"map","isMap":true,"children":[{"displayName":"test1","url":"contents/testthispls/test1"},{"displayName":"test1fgd","url":"contents/testthispls/test1fgd"}],"_key":"GUID-68fc91ad-1484-412b-ab9e-e92128c4a4f9"}]
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