import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { ColorScheme } from "./quartz/util/theme"
import { SimpleSlug } from "./quartz/util/path"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: "giscus",
      options: {
        // from data-repo
        repo: "hgup/hgup.github.io",
        // from data-repo-id
        repoId: "R_kgDOMy_K9A",
        // from data-category
        category: "Announcements",
        // from data-category-id
        categoryId: "DIC_kwDOMy_K9M4CikXP",
      },
    }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/hgup",
      LinkedIn: "https://linkedin.com/in/hgup",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({ hideOnRoot: true, spacerSymbol: "/" }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(
      Component.Explorer({
        folderClickBehavior: "link",
        title: "All Writing",
        useSavedState: true,
      }),
    ),
    Component.DesktopOnly(
      Component.RecentNotes({
        linkToMore: "tags" as SimpleSlug,
        filter: (f) =>
          (f.slug?.startsWith("thoughts") ||
            f.slug?.startsWith("LABS") ||
            f.slug?.startsWith("explorations") ||
            f.slug?.startsWith("Music")) ??
          false,
        title: "Recent writing",
        limit: 4,
        showTags: false,
      }),
    ),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({ spacerSymbol: "/", showCurrentPage: true }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search({ enablePreview: true }),
    // Component.Darkmode(),
    Component.DesktopOnly(
      Component.Explorer({
        folderClickBehavior: "link",
        useSavedState: true,
        title: "All Writing",
        folderDefaultState: "collapsed",
      }),
    ),
  ],
  right: [
    Component.RecentNotes({
      filter: (f) =>
        (f.slug?.startsWith("thoughts") ||
          f.slug?.startsWith("LABS") ||
          f.slug?.startsWith("explorations") ||
          f.slug?.startsWith("Music")) ??
        false,
      title: "Recent writing",
      limit: 10,
      showTags: false,
    }),
  ],
}
