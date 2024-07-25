import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Home from "./Home";
import articleReducer from "../../store/stateslice/articles";
import { fetchArticles } from "../../service/article";

jest.mock("../../service/article", () => ({
  fetchArticles: jest.fn(),
}));

const mockStore = (state) =>
  configureStore({
    reducer: { articles: articleReducer },
    preloadedState: state,
  });

describe("Home component", () => {
  test("should render loading skeletons when loading", () => {
    fetchArticles.mockResolvedValue({
      data: { results: [], num_results: 0 },
    });

    const store = mockStore({
      articles: { articles: [], loading: true, totalArticles: 0 },
    });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const skeletons = screen.getAllByRole("status");
    expect(skeletons.length).toBe(6);
  });

  //   test("should render articles when not loading", async () => {
  //     const mockArticles = [
  //       {
  //         uri: "nyt://article/827ba773-2792-5414-9b5e-022744900e0e",
  //         url: "https://www.nytimes.com/2024/07/24/opinion/trump-lies-charts-data.html",
  //         id: 100000009552082,
  //         asset_id: 100000009552082,
  //         source: "New York Times",
  //         published_date: "2024-07-24",
  //         updated: "2024-07-24 07:52:39",
  //         section: "Opinion",
  //         subsection: "",
  //         nytdsection: "opinion",
  //         adx_keywords:
  //           "Presidential Election of 2024;Rumors and Misinformation;Foreign Aid;United States Politics and Government;Labor and Jobs;Crime and Criminals;Prices (Fares, Fees and Rates);Customs (Tariff);United States Economy;Foreign Workers;Trump, Donald J;Biden, Joseph R Jr;Ukraine",
  //         column: null,
  //         byline: "By Steven Rattner and Aileen Clarke",
  //         type: "Article",
  //         title: "Don’t Take Trump’s Word for It. Check the Data.",
  //         abstract:
  //           "A demonstration of the many ways the ex-president bends the truth, in charts.",
  //         des_facet: [
  //           "Presidential Election of 2024",
  //           "Rumors and Misinformation",
  //           "Foreign Aid",
  //           "United States Politics and Government",
  //           "Labor and Jobs",
  //           "Crime and Criminals",
  //           "Prices (Fares, Fees and Rates)",
  //           "Customs (Tariff)",
  //           "United States Economy",
  //           "Foreign Workers",
  //         ],
  //         org_facet: [],
  //         per_facet: ["Trump, Donald J", "Biden, Joseph R Jr"],
  //         geo_facet: ["Ukraine"],
  //         media: [],
  //         eta_id: 0,
  //       },
  //       {
  //         uri: "nyt://article/b055d7e9-9503-582d-a82d-074c66fd2d03",
  //         url: "https://www.nytimes.com/2024/07/24/us/politics/donald-trump-nephew-book-fred-trump.html",
  //         id: 100000009589128,
  //         asset_id: 100000009589128,
  //         source: "New York Times",
  //         published_date: "2024-07-24",
  //         updated: "2024-07-24 23:23:14",
  //         section: "U.S.",
  //         subsection: "Politics",
  //         nytdsection: "u.s.",
  //         adx_keywords:
  //           "Books and Literature;United States Politics and Government;Presidential Election of 2024;Race and Ethnicity;Disabilities;Black People;Discrimination;Content Type: Personal Profile;Trump, Fred C III;Trump, Donald J",
  //         column: null,
  //         byline: "By Shawn McCreesh",
  //         type: "Article",
  //         title:
  //           "Nephew Says Trump Suggested Some Disabled People ‘Should Just Die’",
  //         abstract:
  //           "In a new memoir, Fred C. Trump III claims his uncle, Donald J. Trump, made cruel and racist comments.",
  //         des_facet: [
  //           "Books and Literature",
  //           "United States Politics and Government",
  //           "Presidential Election of 2024",
  //           "Race and Ethnicity",
  //           "Disabilities",
  //           "Black People",
  //           "Discrimination",
  //           "Content Type: Personal Profile",
  //         ],
  //         org_facet: [],
  //         per_facet: ["Trump, Fred C III", "Trump, Donald J"],
  //         geo_facet: [],
  //         media: [
  //           {
  //             type: "image",
  //             subtype: "photo",
  //             caption:
  //               "Former President Donald J. Trump during a campaign rally in Grand Rapids, Mich., on Saturday. Mr. Trump’s nephew, Fred C. Trump III, claimed in a book his uncle made cruel remarks about a disabled relative. ",
  //             copyright: "Doug Mills/The New York Times",
  //             approved_for_syndication: 1,
  //             "media-metadata": [
  //               {
  //                 url: "https://static01.nyt.com/images/2024/07/24/multimedia/24pol-Trump-Book-topart-ktjz/24pol-Trump-Book-topart-ktjz-thumbStandard.jpg",
  //                 format: "Standard Thumbnail",
  //                 height: 75,
  //                 width: 75,
  //               },
  //               {
  //                 url: "https://static01.nyt.com/images/2024/07/24/multimedia/24pol-Trump-Book-topart-ktjz/24pol-Trump-Book-topart-ktjz-mediumThreeByTwo210.jpg",
  //                 format: "mediumThreeByTwo210",
  //                 height: 140,
  //                 width: 210,
  //               },
  //               {
  //                 url: "https://static01.nyt.com/images/2024/07/24/multimedia/24pol-Trump-Book-topart-ktjz/24pol-Trump-Book-topart-ktjz-mediumThreeByTwo440.jpg",
  //                 format: "mediumThreeByTwo440",
  //                 height: 293,
  //                 width: 440,
  //               },
  //             ],
  //           },
  //         ],
  //         eta_id: 0,
  //       },
  //     ];

  //     fetchArticles.mockResolvedValue({
  //       data: { results: mockArticles, num_results: mockArticles.length },
  //     });

  //     const store = mockStore({
  //       articles: {
  //         articles: mockArticles,
  //         loading: false,
  //         totalArticles: mockArticles.length,
  //       },
  //     });

  //     render(
  //       <Provider store={store}>
  //         <Home />
  //       </Provider>
  //     );

  //     await waitFor(() => {
  //       const articleElements = screen.getAllByText(
  //         /Don’t Take Trump’s Word for It. Check the Data.|Nephew Says Trump Suggested Some Disabled People ‘Should Just Die’/
  //       );
  //       expect(articleElements.length).toBe(mockArticles.length);
  //     });
  //   });

  test("It should call fetchArticles with the correct value when select changes", async () => {
    const store = mockStore({
      articles: { articles: [], loading: false, totalArticles: 0 },
    });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "7" },
    });

    await waitFor(() => {
      expect(fetchArticles).toHaveBeenCalledWith({ day: 7 });
    });
  });

  test("It should display the correct heading", () => {
    const store = mockStore({
      articles: { articles: [], loading: false, totalArticles: 0 },
    });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(screen.getByText("Popular Articles")).toBeInTheDocument();
  });

  test("It should display the correct default select value", () => {
    const store = mockStore({
      articles: { articles: [], loading: false, totalArticles: 0 },
    });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const select = screen.getByRole("combobox");
    expect(select).toHaveValue("1");
  });

  test("It should display the correct default select value", () => {
    const store = mockStore({
      articles: { articles: [], loading: false, totalArticles: 0 },
    });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const select = screen.getByRole("combobox");
    expect(select).toHaveValue("1");
  });
});
