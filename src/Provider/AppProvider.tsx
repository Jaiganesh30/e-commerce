import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { RouterProvider } from "react-router-dom";
import Router from "./components/routes/routes";

type AppProviderProps = {
  children: React.ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense>
      <ErrorBoundary fallback={<h1>Some error!! pimbiliki pillapi</h1>}>
        <RouterProvider router={Router}></RouterProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
