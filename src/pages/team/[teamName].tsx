import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch("http://13.125.255.206/api/home/teams");
  const json = await data.json();

  return {
    props: {
      json: json,
    },
  };
};

export { default } from "routes/team";
