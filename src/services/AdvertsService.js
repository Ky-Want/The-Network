import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"



class AdvertsService {
  async getAdverts() {
    try {
      const res = await api.get('/ads')
      AppState.adverts = res.data
    } catch (error) {
      console.error('getting adverts', error)
    }
  }
}

export const advertsService = new AdvertsService()