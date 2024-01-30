import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        botId: '9fc0be59-eb00-46c0-8434-ccf5b07be933',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: '9fc0be59-eb00-46c0-8434-ccf5b07be933',
      });
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const btn = document.getElementsByClassName("bpw-widget-btn");
      console.log("btn", btn);
    }, 1000);
  }, []);

  return <div id="webchat" style={{ display: "none" }} />;
};

export default Chatbot;