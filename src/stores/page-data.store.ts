import { create } from 'zustand'

export const pageDataStore = create(set => ({
  pageData: {
    title: 'Building the infra for tomorrow',
    subTitle: 'Premier Player in Expressways, Bridges & Tunnels across India',
    cta: 'Know more',
    background: {
      ['background-image']: `url('/images/gawar-g.svg'), url('/images/home-main-banner.svg')`,
      ['background-size']: `contain, 58%`,
      ['background-position']: `calc(100% - 4.5rem) top, 95% center`,
    },
  },
  updatePageData: (pageData: any) => {
    set((state: any) => ({
      pageData: { ...state.pageData, ...pageData },
    }))
  },
}))
