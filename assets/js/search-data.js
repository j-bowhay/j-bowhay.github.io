// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-open-source",
          title: "open source",
          description: "Please see bellow for a list of open source software I maintain.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/os/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-mathematics-in-industry",
          title: "mathematics in industry",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/industry";
          },
        },{id: "dropdown-countries-visited",
              title: "Countries Visited",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/assets/visited_places/index.html";
              },
            },{id: "news-i-have-graduated-from-the-msc-in-mathematical-modelling-and-scientific-computing-mmsc-at-the-university-of-oxford",
          title: 'I have graduated from the MSc in Mathematical Modelling and Scientific Computing (MMSC)...',
          description: "",
          section: "News",},{id: "news-i-have-been-awarded-the-kathryn-gillow-prize-for-the-best-dissertation-in-my-cohort-of-the-mmsc-my-dissertation-was-titled-computing-zeros-and-poles-of-complex-functions-numerically-and-was-supervised-by-prof-yuji-nakatsukasa-and-dr-irwin-zaid-i-hope-to-write-this-up-into-a-publication-soon",
          title: 'I have been awarded the Kathryn Gillow Prize for the best dissertation in...',
          description: "",
          section: "News",},{id: "news-scipy-1-15-0-has-been-released-there-are-lots-of-exciting-new-features-including-scipy-interpolate-aaa-which-i-wrote-as-part-of-my-msc-thesis-this-implements-the-aaa-algorithm-for-barycentric-rational-approximation",
          title: 'SciPy 1.15.0 has been released. There are lots of exciting new features including...',
          description: "",
          section: "News",},{id: "news-i-will-be-attending-the-icms-modelling-camp-2025-at-the-bayes-centre-edinburgh",
          title: 'I will be attending the ICMS Modelling Camp 2025 at the Bayes Centre,...',
          description: "",
          section: "News",},{id: "news-i-will-be-attending-the-3rd-scientific-python-developer-summit-at-the-escience-institute-university-of-washington",
          title: 'I will be attending the 3rd Scientific Python Developer Summit at the eScience...',
          description: "",
          section: "News",},{id: "news-i-was-part-of-the-winning-group-at-the-icms-modelling-camp-2025-we-worked-on-a-project-facilitated-by-trainline-looking-at-possible-improvements-to-the-split-save-ticket-system-using-a-combination-of-machine-learning-and-graph-theory-techniques",
          title: 'I was part of the winning group at the ICMS Modelling Camp 2025....',
          description: "",
          section: "News",},{id: "news-i-will-be-starting-my-phd-at-the-school-of-engineering-mathematics-and-technology-university-of-bristol-supervised-by-prof-alan-champneys-and-dr-matt-hennessy-during-which-i-will-be-studying-mechanical-biochemical-mathematical-models-for-cell-polarity",
          title: 'I will be starting my PhD at the School of Engineering Mathematics and...',
          description: "",
          section: "News",},{id: "news-i-will-be-attending-the-2025-gene-golub-siam-summer-school-on-frontiers-in-multi-dimensional-pattern-formation-at-concordia-university",
          title: 'I will be attending the 2025 Gene Golub SIAM Summer School on Frontiers...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%61%6B%65.%62%6F%77%68%61%79@%62%72%69%73%74%6F%6C.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/j-bowhay", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jake-bowhay", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0002-9559-4114", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=lX3l3AAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
