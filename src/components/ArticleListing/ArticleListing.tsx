import React, { FC } from "react";
import { Article } from "../../types/articletypes";
import NewsCard from "../NewsCard/NewsCard";
import NewsCardSkeleton from "../NewsCardSkelton/NewsCardSkelton";

interface ArticleListingProps {
  loading: Boolean;
  articles: Article[];
}

const ArticleListing: FC<ArticleListingProps> = ({ loading, articles }) => {
  return (
    <div className="p-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {loading ? (
        <>
          {Array.from({ length: 6 }).map((_, index) => (
            <NewsCardSkeleton key={index} />
          ))}
        </>
      ) : (
        articles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))
      )}
    </div>
  );
};

export default ArticleListing;
