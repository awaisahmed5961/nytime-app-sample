import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import Select from "../../components/UI/Select";
import { fetchArticles } from "../../service/article";
import {
  setArticleLoading,
  setArticles,
  setTotalCount,
} from "../../store/stateslice/articles";
import ArticleListing from "../../components/ArticleListing/ArticleListing";

const Home: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const ArticlesState = useSelector((state: RootState) => state.articles);
  const { articles, loading } = ArticlesState;

  const [selectedValue, setSelectedValue] = useState<string>("1");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const fetchArticlesFromAPi = async (day: number) => {
    try {
      dispatch(setArticleLoading(true));
      const articlesResponse = await fetchArticles({ day });
      const { results, num_results } = articlesResponse.data;
      dispatch(setTotalCount(num_results));
      dispatch(setArticles(results));
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      dispatch(setArticleLoading(false));
    }
  };

  useEffect(() => {
    fetchArticlesFromAPi(Number(selectedValue));
  }, [selectedValue]);

  return (
    <>
      <div className="flex justify-between items-center mb-4 p-4">
        <h2 className="text-3xl font-semibold">Popular Articles</h2>

        <Select
          value={selectedValue}
          handleOnChange={handleSelectChange}
          options={[
            { value: "1", label: "1 Day" },
            { value: "7", label: "7 Days" },
            { value: "30", label: "30 Days" },
          ]}
        />
      </div>
      <ArticleListing loading={loading} articles={articles} />
    </>
  );
};

export default Home;
