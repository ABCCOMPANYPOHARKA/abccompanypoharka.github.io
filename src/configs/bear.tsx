import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! I'm a Multi Talented Person (Ignore If You Can't Digest.).."
      },
      {
        id: "github-stats",
        title: "My ABC Team",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "We protect you from noobs..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about for Privacy & Security Awareness..."
      }
    ]
  },
  {
    id: "project",
    title: "Our AIMs",
    icon: "i-octicon:repo",
    md: [
      {
        id: "flint",
        title: "ABC PRIVACY PROTECTION",
        icon: "i-heroicons-solid:fire",
        excerpt: "Prevention Is Cure In Digital Life",

      },




    ]
  }
];

export default bear;
