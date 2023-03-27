import { version } from "../../package.json";

export function addReleaseTag() {
  const tagLineParagragh = document.querySelector(".myDocs_version");
  // docsReleaseTagSpan.classList.add('github-release-tag')
  tagLineParagragh.innerText = `v-${version}`;
}
