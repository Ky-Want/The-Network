import { reactive } from 'vue'


export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},


  /** @type {import('./models/Post.js').Post[]} */
  posts: [],

  /** @type {import('./models/Post.js').Post[]} */
  activePost: [],


  /** @type {import('./models/Advert.js').Advert} */
  adverts: {},


  /** @type {import('./models/Profile.js').Profile | null} */
  activeProfile: null,


  /** @type {import('./models/Advert.js').Advert} */
  profile: {},

  profileNextPage: null,
  profilePreviousPage: null,

  nextPage: null,
  previousPage: null
})
