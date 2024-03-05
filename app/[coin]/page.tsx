import React from "react";

function page({ params }: { params: { coin: string } }) {
  return <div>{params.coin}</div>;
}

export default page;
