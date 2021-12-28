/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

const url = "https://api.spacexdata.com/v3/launches";

const launches = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <div>
      <ol>
        {data.map((launch, index) => (
          <li key={index}>{launch.mission_name}</li>
        ))}
      </ol>
    </div>
  );
};

/**
 * getServerSideProps 와 달리 build time 시 데이터를 fetch 해서 build/ dir 어딘가에
 * 저장 해놓고 화면이 보여질 때 불러온다
 */
export const getStaticProps = async () => {
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { data },
  };
};

/**
 * getStaticProps 와 달리 화면이 갱신될 때마다(요청이 서버로 갈 때마다)
 * 데이터를 fetch 해온다.
 */
// export const getServerSideProps = async () => {
//   const res = await fetch(url);
//   const data = await res.json();

//   return {
//     props: { data },
//   };
// };

export default launches;
