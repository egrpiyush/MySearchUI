import { environment } from '../../environments/environment'

export const baseApiUrl = environment.production ? "https://prod.search.com" : "http://localhost:58947/api/search/"
export const getStaticSearchUrl = baseApiUrl + "GetStaticSearchResult"
export const getGoogleSearchUrl = baseApiUrl + "GetGoogleSearchResult"