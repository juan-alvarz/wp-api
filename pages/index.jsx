import Head from "next/head";
import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Test</title>
      </Head>
      <Container maxWidth="lg">
        <Typography variant="h1" color="initial">
          Main Page
        </Typography>
        <Typography variant="body1" color="initial">
          This is the site of API WP application
        </Typography>
      </Container>
    </>
  );
}
