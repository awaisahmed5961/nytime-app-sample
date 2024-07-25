import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "../../types/articletypes";

interface ArticlesState {
  articles: Article[];
  totalArticles: Number;
  loading: Boolean;
}

const initialState: ArticlesState = {
  totalArticles: 0,
  loading: true,
  articles: [],
};

const articles = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles(state, action: PayloadAction<Article[]>) {
      state.articles = action.payload;
    },
    setTotalCount(state, action: PayloadAction<Number>) {
      state.totalArticles = action.payload;
    },
    setArticleLoading(state, action: PayloadAction<Boolean>) {
      state.loading = action.payload;
    },
  },
});

export const selectArticleById = (
  state: { articles: ArticlesState },
  id: number
) => state.articles.articles.find((article) => article.id === id);

export const { setArticles, setArticleLoading, setTotalCount } =
  articles.actions;
export default articles.reducer;
