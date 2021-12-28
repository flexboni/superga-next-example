import Link from "next/link";
import React from "react";

const FistPost = () => {
  return (
    <div>
      <h1>First Post!!</h1>

      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </div>
  );
};

export default FistPost;
