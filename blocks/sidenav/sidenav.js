import { migrateTree } from "../utils.js";
const treeData = [{"publishSubfolder":"newdoc","children":[{"displayName":"topic1","url":"contents/newdoc/subfolder1/topic1"},{"displayName":"topic2","url":"contents/newdoc/subfolder2/topic2"}],"displayName":"test_move","_key":"GUID-829f9a9a-0680-4eec-8e88-c94dc173258c","isMap":true},{"publishSubfolder":"checkgithub","children":[{"displayName":"simple topic","url":"contents/checkgithub/simple-topic"}],"displayName":"map1","_key":"GUID-6224aecc-dd39-4f76-93f8-ad89d24113be","isMap":true},{"publishSubfolder":"chunking","children":[{"displayName":"chunking_topic_1","url":"contents/chunking/chunking-topic-1"}],"displayName":"chunking_map","_key":"GUID-dcf584de-8eab-4c17-8841-6ea1c523d2bc","isMap":true},{"publishSubfolder":"abc","assets":["contents/abc/image/carwash.jpg"],"children":[{"children":[{"displayName":"Changing the oil in your car","url":"contents/abc/tasks/changingtheoil"},{"displayName":"Organizing the workbench and tools","url":"contents/abc/tasks/organizing"},{"displayName":"Shovelling snow","url":"contents/abc/tasks/shovellingsnow"},{"displayName":"Spray painting","url":"contents/abc/tasks/spraypainting"},{"displayName":"Taking out the garbage","url":"contents/abc/tasks/takinggarbage"},{"displayName":"Washing the car","url":"contents/abc/tasks/washingthecar"}],"displayName":"Garage Tasks","url":"contents/abc/tasks/garagetaskoverview"},{"children":[{"displayName":"Lawnmower","url":"contents/abc/concepts/lawnmower"},{"displayName":"Oil","url":"contents/abc/concepts/oil"},{"displayName":"Paint","url":"contents/abc/concepts/paint"},{"displayName":"Shelving","url":"contents/abc/concepts/shelving"},{"displayName":"Snow shovel","url":"contents/abc/concepts/snowshovel"},{"displayName":"Tool box","url":"contents/abc/concepts/toolbox"},{"displayName":"Tools","url":"contents/abc/concepts/tools"},{"displayName":"Water hose","url":"contents/abc/concepts/waterhose"},{"displayName":"Wheel barrow","url":"contents/abc/concepts/wheelbarrow"},{"displayName":"Workbench","url":"contents/abc/concepts/workbench"},{"displayName":"Windshield washer fluid","url":"contents/abc/concepts/wwfluid"}],"displayName":"Garage Concepts","url":"contents/abc/concepts/garageconceptsoverview"}],"displayName":"Eclipse content aggregated by a map","_key":"GUID-2d7e4997-2a96-49ac-96f1-34263fa5d0e0","isMap":true},{"publishSubfolder":"chunked","children":[{"children":[{"displayName":"Product Overview","url":"contents/chunked/chunk1908988246#product-overview"},{"displayName":"Installation Guide","url":"contents/chunked/chunk1908988246#installation-guide"},{"displayName":"Configuration Guide","url":"contents/chunked/chunk1908988246#configuration-guide"}],"displayName":"Product Information","url":"contents/chunked/chunk1908988246"}],"displayName":"Product Documentation","_key":"GUID-52b3d958-3bdc-423b-8b80-cf8dbfacb60a","isMap":true},{"publishSubfolder":"multimedia","assets":["contents/multimedia/multimedia/videocontent.mp4","contents/multimedia/multimedia/testsong.mp3","contents/multimedia/multimedia/svgimage.svg","contents/multimedia/multimedia/86778225.jpg","contents/multimedia/multimedia/32aab24b732f5d7c4451f7f9-rw-1200.gif"],"children":[{"displayName":"Video content Topic","url":"contents/multimedia/media-topic"},{"displayName":"Image content testing ","url":"contents/multimedia/image-content-testing"},{"children":[{"displayName":"indirect Topic","url":"contents/multimedia/indirect-topic"}],"displayName":"Indirect References","_key":"GUID-054982be-6ce0-4147-ac9a-2040b4b01dc7","url":"","isMap":true}],"displayName":"Multimedia Report","_key":"GUID-4cd15890-bb81-4b16-8f75-ff26267b4b1f","isMap":true},{"publishSubfolder":"check","assets":["contents/check/multimedia/1933932.jpg"],"children":[{"displayName":"Real Time Counter and Calendar (RTCC)","url":"contents/check/timers/rtcc"},{"displayName":"Pulse Counter (PCNT)","url":"contents/check/timers/pcnt"},{"displayName":"Watchdog Timer (WDOG)","url":"contents/check/timers/wdog"},{"displayName":"Timer/Counter (TIMER)","url":"contents/check/timers/timer"}],"displayName":"Counters/Timers and PWM","_key":"GUID-ec651be7-88a6-4fa5-838c-1a75e442abf1","isMap":true},{"publishSubfolder":"sequence","assets":["contents/sequence/image/carwash.jpg"],"children":[{"displayName":"Changing the oil in your car","url":"contents/sequence/tasks/changingtheoil"},{"displayName":"Organizing the workbench and tools","url":"contents/sequence/tasks/organizing"},{"displayName":"Shovelling snow","url":"contents/sequence/tasks/shovellingsnow"},{"displayName":"Spray painting","url":"contents/sequence/tasks/spraypainting"},{"displayName":"Taking out the garbage","url":"contents/sequence/tasks/takinggarbage"},{"displayName":"Washing the car","url":"contents/sequence/tasks/washingthecar"},{"displayName":"Lawnmower","url":"contents/sequence/concepts/lawnmower"},{"displayName":"Oil","url":"contents/sequence/concepts/oil"},{"displayName":"Paint","url":"contents/sequence/concepts/paint"},{"displayName":"Shelving","url":"contents/sequence/concepts/shelving"},{"displayName":"Snow shovel","url":"contents/sequence/concepts/snowshovel"},{"displayName":"Tool box","url":"contents/sequence/concepts/toolbox"},{"displayName":"Tools","url":"contents/sequence/concepts/tools"},{"displayName":"Water hose","url":"contents/sequence/concepts/waterhose"},{"displayName":"Wheel barrow","url":"contents/sequence/concepts/wheelbarrow"},{"displayName":"Workbench","url":"contents/sequence/concepts/workbench"},{"displayName":"Windshield washer fluid","url":"contents/sequence/concepts/wwfluid"}],"displayName":"Eclipse content aggregated by a map","_key":"GUID-601de388-5d24-477c-928b-4f4c6f1ba84f","isMap":true}]
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