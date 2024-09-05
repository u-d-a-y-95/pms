import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "./index.css";
import "@mantine/notifications/styles.css";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <QueryClientProvider client={client}>
          <ModalsProvider>
            <App />
          </ModalsProvider>
          <Notifications />
        </QueryClientProvider>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
