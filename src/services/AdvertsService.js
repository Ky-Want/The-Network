import { AppState } from "../AppState.js"
import { Advert } from "../models/Advert.js"
import { api } from "./AxiosService.js"



class AdvertsService {
  async getAdverts() {
    AppState.adverts = [] // NOTE empty the adverts to avoid data flashing
    const res = await api.get('api/ads')
    console.log("get my ads from the service", res.data);
    AppState.adverts = res.data.map(p => new Advert(p))
  }

  async getAdvertsById(id) {
    AppState.adverts = [] // NOTE empty the adverts to avoid data flashing
    const res = await axios.get('api/ads', {
      params: {
        id
      }
    })

    AppState.adverts = res.data.map(p => new Advert(p))

  }
}

export const advertsService = new AdvertsService()