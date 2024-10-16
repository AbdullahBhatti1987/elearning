import React from "react";
import ReadingBlog from "../components/ReadingBlog";
import BlogTop from "../components/BlogTop";
import RelatedBlog from "../components/RelatedBlog";
import MarketingArticles from "../components/MarketingArticles";

function BlogPage() {
  return (
    <div>
        <BlogTop/>
        <ReadingBlog/>
        <RelatedBlog/>
        <MarketingArticles/>

    </div>
  );
}

export default BlogPage;
