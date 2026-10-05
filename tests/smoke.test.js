import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'jewellery',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Jewellery',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: 'fd051a6c-6d76-5872-b5f1-48712d9ee72b',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: '6b91356f-d7c7-598c-9081-59fee1195ec8',
    dynasty: {
      item: 'ebd922f2-6e8f-55bf-89e3-929ab1494983',
      name: 'Umayyads',
    },
    timeline: {
      code: 'jo',
      id: 'jor',
      country: 'Jordan',
    },
    partner: {
      id: '42fb6391-e1f6-527a-85db-f9638b02d667',
      name: 'Higher Institute for the Study of Contemporary History of Tunisia, University of Manouba',
      city: 'Tunis',
      country: 'Tunisia',
      objects: 2,
    },
  },
})
