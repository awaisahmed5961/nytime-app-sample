import { render, screen } from "@testing-library/react";
import NewsCardSkeleton from "./NewsCardSkelton";

describe("NewsCardSkeleton component", () => {
  test("It should render with correct structure and classes", () => {
    render(<NewsCardSkeleton />);

    const skeletonContainer = screen.getByRole("status");
    expect(skeletonContainer).toBeInTheDocument();
    expect(skeletonContainer).toHaveClass("bg-white");
    expect(skeletonContainer).toHaveClass("border");
    expect(skeletonContainer).toHaveClass("border-gray-200");
    expect(skeletonContainer).toHaveClass("rounded-lg");
    expect(skeletonContainer).toHaveClass("shadow-md");
    expect(skeletonContainer).toHaveClass("p-4");
    expect(skeletonContainer).toHaveClass("mb-4");
    expect(skeletonContainer).toHaveClass("animate-pulse");

    const skeletonDivs = screen.getAllByRole("presentation");
    expect(skeletonDivs).toHaveLength(5);

    expect(skeletonDivs[0]).toHaveClass("w-full");
    expect(skeletonDivs[0]).toHaveClass("h-64");
    expect(skeletonDivs[0]).toHaveClass("bg-gray-200");
    expect(skeletonDivs[0]).toHaveClass("rounded-md");
    expect(skeletonDivs[0]).toHaveClass("mb-4");

    expect(skeletonDivs[1]).toHaveClass("h-6");
    expect(skeletonDivs[1]).toHaveClass("bg-gray-200");
    expect(skeletonDivs[1]).toHaveClass("rounded");
    expect(skeletonDivs[1]).toHaveClass("w-3/4");
    expect(skeletonDivs[1]).toHaveClass("mb-2");

    expect(skeletonDivs[2]).toHaveClass("h-4");
    expect(skeletonDivs[2]).toHaveClass("bg-gray-200");
    expect(skeletonDivs[2]).toHaveClass("rounded");
    expect(skeletonDivs[2]).toHaveClass("w-1/2");
    expect(skeletonDivs[2]).toHaveClass("mb-2");

    expect(skeletonDivs[3]).toHaveClass("h-4");
    expect(skeletonDivs[3]).toHaveClass("bg-gray-200");
    expect(skeletonDivs[3]).toHaveClass("rounded");
    expect(skeletonDivs[3]).toHaveClass("w-1/2");
    expect(skeletonDivs[3]).toHaveClass("mb-4");

    expect(skeletonDivs[4]).toHaveClass("h-4");
    expect(skeletonDivs[4]).toHaveClass("bg-gray-200");
    expect(skeletonDivs[4]).toHaveClass("rounded");
    expect(skeletonDivs[4]).toHaveClass("w-full");
  });
});
