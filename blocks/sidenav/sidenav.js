import { migrateTree } from "../utils.js";
const treeData = [{"displayName":"print multilingual","isMap":true,"children":[{"displayName":"guides-34718-en","url":"","children":[{"displayName":"CrossReferencesAndLinks.dita","url":"contents/lang/en/guides-34718/crossreferencesandlinks"}],"isMap":true,"_key":"GUID-97340cc7-f2e8-4cb6-9bdd-1f8486043d31-en"},{"displayName":"गाइड-34718-Hindi","url":"","children":[{"displayName":"क्रॉस रेफरेंस और लिंक","url":"contents/lang/hi/guides-34718/crossreferencesandlinks"}],"isMap":true,"_key":"GUID-eb1f77ae-456d-4a82-b9a8-00e2c6d6535f-hi"},{"displayName":"Shared conxmtent","url":"contents/lang/en/guides-34718/sharedcontent"},{"displayName":"figuresLibrary","url":"contents/lang/en/guides-34718/figureslibrary"},{"displayName":"tablesLibrary","url":"contents/lang/en/guides-34718/tableslibrary"},{"displayName":"Shared conxmtent","url":"contents/lang/en/guides-34718/sharedcontent"},{"displayName":"Shared conxmtent","url":"contents/lang/en/guides-34718/sharedcontent"},{"displayName":"Shared conxmtent","url":"contents/lang/en/guides-34718/sharedcontent"},{"displayName":"Shared conxmtent","url":"contents/lang/en/guides-34718/sharedcontent"},{"displayName":"Shared conxmtent","url":"contents/lang/en/guides-34718/sharedcontent"},{"displayName":"figuresLibrary","url":"contents/lang/en/guides-34718/figureslibrary"},{"displayName":"figuresLibrary","url":"contents/lang/en/guides-34718/figureslibrary"},{"displayName":"tablesLibrary","url":"contents/lang/en/guides-34718/tableslibrary"},{"displayName":"tablesLibrary","url":"contents/lang/en/guides-34718/tableslibrary"}],"_key":"GUID-4db787ea-b697-4a08-bb02-ba56f80bc65b","publishSubfolder":"lang","assets":["contents/lang/en/guides-34718/dog-on-ball.png","contents/lang/en/guides-34718/batman.gif","contents/lang/en/guides-34718/fire-fly-titan-test.jpg"]},{"displayName":"Topic asset metadata","isMap":true,"children":[{"displayName":"first","url":"contents/ditamap1/first","children":[{"displayName":"table2","url":"contents/ditamap1/table2"}]},{"displayName":"new","url":"contents/ditamap1/new"},{"displayName":"Test TASK","url":"contents/ditamap1/task-numbering"},{"displayName":"Creating an SQLJ file","url":"contents/ditamap1/space"}],"publishSubfolder":"ditamap1"},{"displayName":"testMapRepublish","isMap":true,"children":[{"displayName":"Administration Concept 089","url":"contents/check/large-fileset/topic-089"}],"_key":"GUID-f45e1c99-d042-4219-bfd6-6f87198dd1bb","publishSubfolder":"check"},{"displayName":"publish-me","isMap":true,"children":[{"displayName":"i-have-xrefs","url":"contents/ditamap10/all-keys-references/i-have-xrefs"},{"displayName":"i-define-keys","url":"","children":[{"displayName":"key-reference","url":"contents/ditamap10/all-keys-references/key-reference"},{"displayName":"content-key-reference","url":"contents/ditamap10/all-keys-references/content-key-reference"}],"isMap":true,"_key":"GUID-73353c38-7857-430b-b79f-ede256c0b339"},{"displayName":"i-refer-reference-files","url":"","children":[{"displayName":"file-reference","url":"contents/ditamap10/all-keys-references/file-reference"},{"displayName":"content-key-reference","url":"contents/ditamap10/all-keys-references/content-key-reference"},{"displayName":"content-references","url":"contents/ditamap10/all-keys-references/content-references"},{"displayName":"key-reference","url":"contents/ditamap10/all-keys-references/key-reference"}],"isMap":true,"_key":"GUID-f931b7e9-7b1a-45e5-b6d6-dbe5a1093e59"}],"_key":"GUID-c9ef1e44-dc07-42e6-98cd-e980c21e4ca9","publishSubfolder":"ditamap10"},{"displayName":"TestTables","isMap":true,"children":[{"displayName":"Untitled","url":"","children":[{"displayName":"testTable","url":"contents/svgoutofmap/testtables/testtable"}]}],"_key":"GUID-f5dc3922-6a1e-4b25-8b02-c04db0769210","publishSubfolder":"svgoutofmap","assets":["contents/svgoutofmap/testtables/mathml-760103e1becb.svg","contents/svgoutofmap/testtables/mathml-c620b54a5690.svg","contents/svgoutofmap/testtables/mathml-c933527a1013.svg","contents/svgoutofmap/testtables/mathml-628e94c33dd8.svg","contents/svgoutofmap/testtables/mathml-fe86a5c28c24.svg","contents/svgoutofmap/testtables/mathml-6325b0e7095e.svg","contents/svgoutofmap/guides-regression/multimedia-report-data/multimedia/svgimage.svg"]},{"displayName":"base_map","isMap":true,"children":[{"displayName":"topic_with_actual_external_refs","url":"contents/ditamap11/topics-direct/topic-with-external-refs"},{"displayName":"topic_with_internal_Refs","url":"contents/ditamap11/topics-direct/topic-with-internal-refs"},{"displayName":"topic_with_internal_refs_as_external","url":"contents/ditamap11/topics-direct/topic-with-internal-refs-as-external"},{"displayName":"Captive Portal Modes","url":"contents/ditamap11/cyclic/f1/captive"},{"displayName":"Address Objects","url":"contents/ditamap11/cyclic/f2/address-objects"},{"displayName":"mm_tests","url":"contents/ditamap11/topics-direct/mm-tests"}],"_key":"GUID-9288e451-4be1-4ffa-a60e-081ea173f946","publishSubfolder":"ditamap11","assets":["contents/ditamap11/multimedia-path/launchpad.jpg"]},{"displayName":"GUIDES-23883 Footnote-in-Title Regression Dataset","isMap":true,"children":[{"displayName":"Concept: Card Maintenance FN_CONCEPT_TITLE_SHOULD_NOT_APPEAR_IN_DERIVED_LABEL","url":"contents/footnote/topics/concept-title-footnote"},{"displayName":"GUIDES-23883 Cross-reference Consumer Matrix","url":"contents/footnote/topics/xref-consumers"},{"displayName":"GUIDES-23883 Figure, Table, Section, and Example Targets","url":"contents/footnote/topics/composite-targets"},{"displayName":"Account Maintenance FN_TOPIC_TITLE_SHOULD_NOT_APPEAR_IN_DERIVED_LABEL Guide","url":"contents/footnote/topics/topic-title-footnote"},{"displayName":"Concept: Card Maintenance FN_CONCEPT_TITLE_SHOULD_NOT_APPEAR_IN_DERIVED_LABEL","url":"contents/footnote/topics/concept-title-footnote"},{"displayName":"Task: Replace Account Filter FN_TASK_TITLE_SHOULD_NOT_APPEAR_IN_DERIVED_LABEL","url":"contents/footnote/topics/task-title-footnote"},{"displayName":"Reference: Wash Parameters FN_REFERENCE_TITLE_SHOULD_NOT_APPEAR_IN_DERIVED_LABEL","url":"contents/footnote/topics/reference-title-footnote"},{"displayName":"Control Topic Without Footnote","url":"contents/footnote/topics/no-footnote-control"},{"displayName":"Footnote Outside Title Control","url":"contents/footnote/topics/footnote-outside-title-control"}],"_key":"GUID-a6c5519c-4bc5-4a52-8e27-ad48c95c47e2","publishSubfolder":"footnote","assets":["contents/footnote/assets/carwash.svg"]},{"displayName":"\n    GUIDES-22230 Page Numbering Repro\n  ","isMap":true,"children":[{"displayName":"Untitled","url":"","children":[{"displayName":"Front Matter Page 1","url":"contents/frontmatter/fm01"},{"displayName":"Front Matter Page 2","url":"contents/frontmatter/fm02"},{"displayName":"Front Matter Page 3","url":"contents/frontmatter/fm03"},{"displayName":"Front Matter Page 4","url":"contents/frontmatter/fm04"},{"displayName":"Front Matter Page 5","url":"contents/frontmatter/fm05"}]},{"displayName":"Body Chapter 1","url":"contents/frontmatter/body01","children":[{"displayName":"Body Chapter 2","url":"contents/frontmatter/body02"},{"displayName":"Body Chapter 3","url":"contents/frontmatter/body03"},{"displayName":"Body Chapter 4","url":"contents/frontmatter/body04"},{"displayName":"Body Chapter 5","url":"contents/frontmatter/body05"},{"displayName":"Body Chapter 6","url":"contents/frontmatter/body06"},{"displayName":"Body Chapter 7","url":"contents/frontmatter/body07"},{"displayName":"Body Chapter 8","url":"contents/frontmatter/body08"},{"displayName":"Body Chapter 9","url":"contents/frontmatter/body09"},{"displayName":"Body Chapter 10","url":"contents/frontmatter/body10"}]},{"displayName":"Untitled","url":"","children":[{"displayName":"Back Matter Page 1","url":"contents/frontmatter/bm01","children":[{"displayName":"Back Matter Page 2","url":"contents/frontmatter/bm02"},{"displayName":"Back Matter Page 3","url":"contents/frontmatter/bm03"},{"displayName":"Back Matter Page 4","url":"contents/frontmatter/bm04"},{"displayName":"Back Matter Page 5","url":"contents/frontmatter/bm05"},{"displayName":"","url":""}]},{"displayName":"Back Matter Page 2","url":"contents/frontmatter/bm02"},{"displayName":"Back Matter Page 3","url":"contents/frontmatter/bm03"},{"displayName":"Back Matter Page 4","url":"contents/frontmatter/bm04"},{"displayName":"Back Matter Page 5","url":"contents/frontmatter/bm05"}]}],"_key":"GUID-1084c1ba-29bf-4f1a-bf2f-5d7680070996","publishSubfolder":"frontmatter"}]
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