import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NewsCard from "./NewsCard";

const mockArticle = {
  uri: "uri",
  url: "https://example.com",
  id: 1,
  asset_id: 1,
  source: "Source",
  published_date: "2024-07-24",
  updated: "2024-07-24T00:00:00Z",
  section: "Section",
  subsection: "Subsection",
  nytdsection: "NYT Section",
  adx_keywords: "keyword",
  column: null,
  byline: "Author Name",
  type: "Type",
  title: "Article Title",
  abstract: "Article abstract",
  des_facet: ["Tag1", "Tag2"],
  org_facet: [],
  per_facet: ["Person1", "Person2"],
  geo_facet: [],
  media: [
    {
      type: "image",
      subtype: "photo",
      caption: "Image caption",
      copyright: "Copyright",
      approved_for_syndication: 1,
      "media-metadata": [
        { url: "" },
        { url: "" },
        {
          url: "https://example.com/image.jpg",
          format: "Standard",
          height: 400,
          width: 600,
        },
      ],
    },
  ],
  eta_id: 1,
};

describe("NewsCard component", () => {
  test("It should render article details correctly", () => {
    render(
      <MemoryRouter>
        <NewsCard article={mockArticle} />
      </MemoryRouter>
    );

    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://example.com/image.jpg"
    );
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Image caption");

    expect(screen.getByRole("link", { name: "Article Title" })).toHaveAttribute(
      "href",
      "/article/1"
    );

    expect(screen.getByText(/By:/)).toBeInTheDocument();
    expect(screen.getByText(/Author Name/)).toBeInTheDocument();

    expect(screen.getByText(/Published Date:/)).toHaveTextContent(
      "Published Date:"
    );

    expect(screen.getByText("Article abstract")).toBeInTheDocument();
  });

  test("should render default image when no media is available", () => {
    const articleWithoutMedia = { ...mockArticle, media: [] };

    render(
      <MemoryRouter>
        <NewsCard article={articleWithoutMedia} />
      </MemoryRouter>
    );

    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "/image-missing.jpg"
    );
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Image missing");
  });
});
