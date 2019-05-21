export const imports = {
  'docs/hello.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-hello" */ 'docs/hello.mdx'
    ),
  'docs/launcher/launch-pad.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-launcher-launch-pad" */ 'docs/launcher/launch-pad.mdx'
    ),
  'docs/launcher/launcher-control.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-launcher-launcher-control" */ 'docs/launcher/launcher-control.mdx'
    ),
  'docs/launcher/launcher-software.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-launcher-launcher-software" */ 'docs/launcher/launcher-software.mdx'
    ),
  'docs/rockets/advanced.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-rockets-advanced" */ 'docs/rockets/advanced.mdx'
    ),
  'docs/rockets/control.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-rockets-control" */ 'docs/rockets/control.mdx'
    ),
  'docs/rockets/rocket.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-rockets-rocket" */ 'docs/rockets/rocket.mdx'
    ),
  'docs/rockets/sd-card.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-rockets-sd-card" */ 'docs/rockets/sd-card.mdx'
    ),
  'docs/rockets/software.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-rockets-software" */ 'docs/rockets/software.mdx'
    ),
}
