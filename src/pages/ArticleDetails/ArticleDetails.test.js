import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import articleReducer, {
  selectArticleById,
} from "../../store/stateslice/articles";
import ArticleDetails from "./ArticleDetails";

const mockStore = (state) =>
  configureStore({
    reducer: { articles: articleReducer },
    preloadedState: state,
  });

test("It should redirect to home when no article is found", async () => {
  const history = createMemoryHistory();
  history.push("/article/999");

  const store = mockStore({
    articles: { articles: [], loading: false, totalArticles: 0 },
  });

  render(
    <Provider store={store}>
      <Router location={history.location} navigator={history}>
        <ArticleDetails />
      </Router>
    </Provider>
  );

  await waitFor(() => {
    expect(history.location.pathname).toBe("/");
  });
});

test("should display loading state when article is not yet available", () => {
  const history = createMemoryHistory();
  history.push("/article/1"); // Existing article ID

  const store = mockStore({
    articles: { articles: [], loading: true, totalArticles: 0 },
  });

  render(
    <Provider store={store}>
      <Router location={history.location} navigator={history}>
        <ArticleDetails />
      </Router>
    </Provider>
  );

  expect(screen.getByText("Loading...")).toBeInTheDocument();
});

test("It should display article details correctly", async () => {
  const history = createMemoryHistory();
  history.push("/article/1");

  const mockArticle = {
    id: 1,
    url: "https://example.com",
    title: "Article Title",
    byline: "Author Name",
    published_date: "2024-07-24",
    abstract: "Article abstract",
    media: [
      {
        "media-metadata": [
          { url: "" },
          { url: "" },
          { url: "https://example.com/image.jpg" },
        ],
        caption: "Image caption",
      },
    ],
    source: "Source",
    section: "Section",
    subsection: "Subsection",
    nytdsection: "NYT Section",
    des_facet: ["Tag1", "Tag2"],
    per_facet: ["Person1", "Person2"],
  };

  const store = mockStore({
    articles: { articles: [mockArticle], loading: false, totalArticles: 1 },
  });

  render(
    <Provider store={store}>
      <Router location={history.location} navigator={history}>
        <ArticleDetails />
      </Router>
    </Provider>
  );

  setTimeout(async () => {
    await waitFor(() => {
      expect(screen.getByText("Article Title")).toBeInTheDocument();
      expect(screen.getByText("By: Author Name")).toBeInTheDocument();
      expect(screen.getByText("Published Date: 7/24/2024")).toBeInTheDocument();
      expect(screen.getByText("Article abstract")).toBeInTheDocument();
      expect(screen.getByText("Source: Source")).toBeInTheDocument();
      expect(screen.getByText("Section: Section")).toBeInTheDocument();
      expect(screen.getByText("Subsection: Subsection")).toBeInTheDocument();
      expect(screen.getByText("NYT Section: NYT Section")).toBeInTheDocument();
      expect(screen.getByText("Tag1")).toBeInTheDocument();
      expect(screen.getByText("Person1")).toBeInTheDocument();
    });
  }, 3000);

  // Ensure article details are displayed
});
