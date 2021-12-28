/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

const url = "https://api.spacexdata.com/v3/launches";

const launches = ({ data }) => {
  // CSR
  //   const [data, setData] = useState(null);

  //   useEffect(() => {
  //     const fetchLaunches = async () => {
  //       const res = await fetch(url);
  //       const data = await res.json();

  //       setData(data);
  //     };

  //     fetchLaunches();
  //   }, []);
  /////////////////////////////////////////////////////////////////////////////

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

// SSR
export const getServerSideProps = async () => {
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { data },
  };
};

export default launches;
