import React from "react";

const page = ({ params }: { params: { name: string } }) => {
  return <center>Project Name  {params.name}</center>;
};

export default page;
