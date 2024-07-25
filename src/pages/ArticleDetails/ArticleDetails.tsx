import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { selectArticleById } from "../../store/stateslice/articles";

const ArticleDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = useSelector((state: RootState) =>
    selectArticleById(state, Number(id))
  );

  useEffect(() => {
    if (!article) {
      navigate("/");
    }
  }, [article, navigate]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 md:p-8 lg:p-12 max-w-6xl mx-auto">
      <article className="bg-white border border-gray-200 rounded-lg  overflow-hidden">
        <div className="relative">
          {article.media.length > 0 && (
            <img
              src={article.media[0]["media-metadata"][2].url}
              alt={article.media[0].caption || "Article Image"}
              className="w-full h-70 object-cover rounded-t-lg"
            />
          )}
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </h1>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">By:</span> {article.byline}
          </p>
          <p className="text-gray-500 mb-2">
            <span className="font-semibold">Published Date:</span>{" "}
            {new Date(article.published_date).toLocaleDateString()}
          </p>
          <p className="text-gray-700 mb-4">{article.abstract}</p>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">Details</h2>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Source:</span> {article.source}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Section:</span> {article.section}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Subsection:</span>{" "}
              {article.subsection}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">NYT Section:</span>{" "}
              {article.nytdsection}
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {article.des_facet.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">People</h2>
            <div className="flex flex-wrap gap-2">
              {article.per_facet.map((person, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {person}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleDetails;
