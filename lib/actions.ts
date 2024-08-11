import qs from 'query-string';
import { apiUrl } from '@/config/appConfig';

interface GetBlogsParams {
  query?: string;
  category?: string;
}

export const getBlogs = async (params: GetBlogsParams) => {
  const { query, category } = params;
  let blogs: any = [];
  try {
    if (!category && category !== 'all' && !query) {
      blogs = await fetch(`${apiUrl}/`);
      console.log('category', 'no');
    } else {
      blogs = await fetch(`${apiUrl}?category=${category}&query=${query}`);
      console.log('category', category);
    }
    const result = await blogs.json();
    return result.posts;
  } catch (error) {
    return blogs;
  }
};

export const getBlogPlaylist = async () => {
  let playlist: any = [];
  try {
    playlist = await fetch(`${apiUrl}/playlist`);
    const result = await playlist.json();
    return result.playlist;
  } catch (error) {
    return playlist;
  }
};

interface UrlQueryParams {
  params: string;
  key?: string;
  value?: string | null;
  keysToRemove?: string[];
}

export const formUrlQuery = ({
  params,
  key,
  value,
  keysToRemove
}: UrlQueryParams) => {
  const currentUrl = qs.parse(params);

  if (keysToRemove) {
    keysToRemove.forEach((keyToRemove) => {
      delete currentUrl[keyToRemove];
    });
  } else if (key && value) {
    currentUrl[key] = value;
  }

  const stringifyUrl = qs.stringifyUrl(
    { url: window.location.pathname, query: currentUrl },
    { skipNull: true }
  );

  return stringifyUrl;
};
