export type VideoType = 'standard' | 'shorts' | 'live';

export interface ThumbnailData {
  videoId: string;
  type: VideoType;
  thumbnails: {
    maxres: string;
    hq: string;
    mq: string;
  };
}

export const extractVideoId = (url: string): { id: string; type: VideoType } | null => {
  if (!url) return null;

  // Regular expressions for different YouTube URL formats
  const patterns = [
    { regex: /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/, type: 'standard' },
    { regex: /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?]+)/, type: 'standard' },
    { regex: /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([^?]+)/, type: 'shorts' },
    { regex: /(?:https?:\/\/)?(?:www\.)?youtube\.com\/live\/([^?]+)/, type: 'live' }, // Live URLs are becoming common
  ];

  for (const { regex, type } of patterns) {
    const match = url.match(regex);
    if (match && match[1]) {
      return { id: match[1], type: type as VideoType };
    }
  }

  // Fallback for embed URLs or other weird formats
  const embedMatch = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^?]+)/);
  if (embedMatch && embedMatch[1]) {
    return { id: embedMatch[1], type: 'standard' };
  }

  return null;
};

export const getThumbnailData = (url: string): ThumbnailData | null => {
  const result = extractVideoId(url);
  if (!result) return null;

  const { id, type } = result;

  return {
    videoId: id,
    type,
    thumbnails: {
      maxres: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
      hq: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
      mq: `https://img.youtube.com/vi/${id}/mqdefault.jpg`,
    },
  };
};

export const isValidYoutubeUrl = (url: string): boolean => {
  return !!extractVideoId(url);
};
