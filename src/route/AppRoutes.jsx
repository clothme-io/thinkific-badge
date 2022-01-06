import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { RouteWithLayout } from "./RouteWithLayout";
import { Non_AuthRoutes, AuthRoutes, PagesRoutes } from "./RouteOptions";
import {
  WelcomePage,
  CreateBadge,
  CreateLinkedInPage,
  ShowBadges,
  Courses,
  Dashboard,
  Account,
} from "../pages";
import { PlainLayout } from "../layout";
import { MainLayout } from "../layout/main/MainLayout";

export const AppRoutes = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Routes>
        <Route path={Non_AuthRoutes.welcome} element={<WelcomePage />} />
        <Route
          path={Non_AuthRoutes.home}
          element={<Navigate replace to={Non_AuthRoutes.welcome} />}
        />

        {/* WELCOME */}
        <Route
          path={PagesRoutes.createBadge}
          element={
            <RouteWithLayout redirectTo={Non_AuthRoutes.welcome}>
              <PlainLayout>
                <CreateBadge />
              </PlainLayout>
            </RouteWithLayout>
          }
        />

        {/* AUTH */}
        {/* <RouteWithLayout
          Layout={PlainLayout}
          Component={}
          path={AuthRoutes.signup}
          exact={true}
          isAuthRequired={false}
        />
        <RouteWithLayout
          Layout={PlainLayout}
          Component={Login}
          path={AuthRoutes.login}
          exact={true}
          isAuthRequired={false}
        /> */}

        {/* ACCOUNT */}
        <Route
          path={PagesRoutes.dashboard}
          element={
            <RouteWithLayout redirectTo={Non_AuthRoutes.welcome}>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </RouteWithLayout>
          }
        />
        <Route
          path={PagesRoutes.account}
          element={
            <RouteWithLayout redirectTo={Non_AuthRoutes.welcome}>
              <MainLayout>
                <Account />
              </MainLayout>
            </RouteWithLayout>
          }
        />
        <Route
          path={PagesRoutes.createLindedInPage}
          element={
            <RouteWithLayout redirectTo={Non_AuthRoutes.welcome}>
              <MainLayout>
                <CreateLinkedInPage />
              </MainLayout>
            </RouteWithLayout>
          }
        />
        <Route
          path={PagesRoutes.showAllBadges}
          element={
            <RouteWithLayout redirectTo={Non_AuthRoutes.welcome}>
              <MainLayout>
                <ShowBadges />
              </MainLayout>
            </RouteWithLayout>
          }
        />
        <Route
          path={PagesRoutes.createBadge}
          element={
            <RouteWithLayout redirectTo={Non_AuthRoutes.welcome}>
              <CreateBadge />
            </RouteWithLayout>
          }
        />
        <Route
          path={PagesRoutes.createLindedInPage}
          element={
            <RouteWithLayout redirectTo={Non_AuthRoutes.welcome}>
              <MainLayout>
                <CreateLinkedInPage />
              </MainLayout>
            </RouteWithLayout>
          }
        />
        <Route
          path={PagesRoutes.courses}
          element={
            <RouteWithLayout redirectTo={Non_AuthRoutes.welcome}>
              <MainLayout>
                <Courses />
              </MainLayout>
            </RouteWithLayout>
          }
        />
      </Routes>
    </Router>
  );
};
