import React from "react";
import { Link } from "react-router-dom";
export interface MediaMetadata {
  url: string;
  format: string;
  height: number;
  width: number;
}

export interface Media {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  "media-metadata": MediaMetadata[];
}

export interface Article {
  uri: string;
  url: string;
  id: number;
  asset_id: number;
  source: string;
  published_date: string;
  updated: string;
  section: string;
  subsection: string;
  nytdsection: string;
  adx_keywords: string;
  column: string | null;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  media: Media[];
  eta_id: number;
}

interface NewsCardProps {
  article: Article;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 mb-4">
      <img
        src={
          article && article.media && article.media.length
            ? article.media[0]["media-metadata"][2].url
            : "/image-missing.jpg"
        }
        alt={
          article && article.media && article.media.length
            ? article.media[0].caption
            : "Image missing"
        }
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">
        <Link to={`/article/${article.id}`} rel="noopener noreferrer">
          {article.title}
        </Link>
      </h2>
      <p className="text-gray-600 mb-2">
        <span className="font-bold">By:</span> {article.byline}
      </p>
      <p className="text-gray-500 mb-2">
        <span className="font-bold">Published Date:</span>{" "}
        {new Date(article.published_date).toLocaleDateString()}
      </p>
      <p className="text-gray-700">{article.abstract}</p>
    </div>
  );
};

export default NewsCard;
