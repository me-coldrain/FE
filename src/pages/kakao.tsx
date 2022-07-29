// import { GetServerSideProps } from "next";
// import React from "react";
// import Page from "routes/page";
// import { makeRequest } from "services/makeRequest";

// export const kakao = (props: any): JSX.Element => {
//   if (window) {
//     const code = new URL(window.location.href).searchParams.get("code");
//   }
//   React.useEffect(() => {
//     (async () => {
//       try {
//         const res = await fetch(
//           `https://90minglm.kro.kr/api/members/kakao/login/code=${code}`
//         );
//         console.log(res);
//         // const token = res.headers.authorization;
//         // window.localStorage.setItem('token', token);
//         // navigate('/main');
//       } catch (e) {
//         console.error(e);
//         // navigate('/main');
//       }
//     })();
//   }, []);

//   return <Page data={props}></Page>;
// };
