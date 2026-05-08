import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "ABC Links",
    sites: [
      {
        id: "my-blog",
        title: "Website",
        img: "/img/ui/avatar.jpg",
        link: "https://abccompanypoharka.github.io/",
        inner: true
      }
    ]
  },
  freq: {
    title: "Frequently Visited",
    sites: [
      {
        id: "github",
        title: "Github",
        img: "/img/sites/github.svg",
        link: "https://github.com/"
      }
    ]
  }
};

export default websites;
