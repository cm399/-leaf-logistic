import { NewsApiResponse } from "types/APIService";

export class newsApiService {
  static API_Key = "dc548159a22c46c8974ef05b2a26c950";

  public static fetchTopHeadlines = async (
    country: string,
    search?: string
  ): Promise<NewsApiResponse> => {
    try {
      const isSearchEnabled = search !== undefined;
      if (isSearchEnabled && !search) {
        return {
          status: "ok",
          totalResults: 0,
          articles: [],
        } as NewsApiResponse;
      }

      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}${
          isSearchEnabled ? `&q=${search}` : ""
        }&category=business&apiKey=${this.API_Key}`
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch top headlines: ${response.statusText}`
        );
      }
      const data = await response.json();
      return data as NewsApiResponse;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}
