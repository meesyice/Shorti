import classes from "./Pages.module.css";
import UrlShortnerForm from "../components/forms/UrlShortnerForm";
import ShortUrlCard from "../components/cards/ShortUrlCard";
import InvalidUrlCard from "../components/cards/InavlidUrlCard";
import Card from "../components/cards/Card";
import Layout from "../components/layout/Layout";
import axios from "axios";
import SERVER_ENDPOINT from "../api";
import { useState } from "react";

function UrlShortner() {
  const [data, setData] = useState("");
  const [cardIsShown, setCardIsShown] = useState(false);
  const [erorrIsShown, setErorrIsShown] = useState(false);

  function ShortenUrlHandler(urlShortnerData) {
    const payload = JSON.stringify(urlShortnerData);
    axios
      .post(SERVER_ENDPOINT() + "api/shortener/", payload)
      .then((response) => {
        DisplayCardHandler();
        setData(response.data);
        console.log(data);
      })
      .catch((_e) => {
        DisplayErorrHandler();
      });
  }
  function DisplayErorrHandler() {
    setCardIsShown(false);
    setErorrIsShown(true);
  }
  function DisplayCardHandler() {
    setErorrIsShown(false);
    setCardIsShown(true);
  }
  return (
    <Layout>
      <div>
        <Card>
          <section>
            <h1
              className={classes.title}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              URL Shortner
            </h1>
            <UrlShortnerForm onShortenUrl={ShortenUrlHandler} />
          </section>
        </Card>
        {cardIsShown && <ShortUrlCard shorti={data} />}
        {erorrIsShown && <InvalidUrlCard />}
      </div>
    </Layout>
  );
}

export default UrlShortner;
