import {
  mdiArmFlexOutline,
  mdiBriefcaseOutline,
  mdiHomeOutline,
  mdiMapMarker,
  mdiStarOutline,
  mdiTrophyVariantOutline,
} from '@mdi/js'

export default [
  {
    title: 'Project Presentation',
    icon: mdiHomeOutline,
    to: 'home',
  },
  {
    title: 'First Insights',
    icon: mdiBriefcaseOutline,
    to: 'second-page',
  },
  {
    title: 'Location',
    icon: mdiMapMarker,
    to: 'third-page',
  },
  {
    title: 'Leading Breweries',
    icon: mdiTrophyVariantOutline,
    to: 'fourth-page',
  },
  {
    title: 'Strategic Advice',
    icon: mdiArmFlexOutline,
    to: 'fifth-page',
  },
  {
    title: 'Results',
    icon: mdiStarOutline,
    to: 'conclusion',
  },
]
