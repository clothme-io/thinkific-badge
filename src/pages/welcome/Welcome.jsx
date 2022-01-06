import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { checkTenantExist } from "../../networking/Auth";
import { PagesRoutes } from "../../route/RouteOptions";
import AppState from "../../state/valtioStore";
import { Top } from "./components/top";

export const WelcomePage = () => {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let tgid = params.get("tgid");
  const { isLoading, isError, error, data } = useQuery(
    `${tgid}`,
    checkTenantExist
  );
  useEffect(() => {
    if (data && data.session) {
      AppState.session.accessToken = data.session.accesToken;
      AppState.session.isAuth = true;
      AppState.session.refreshToken = data.session.refreshToken;
      AppState.account.gid = data.tenant.gid;
      AppState.account.isActive = data.tenant.isActive;
    }
  }, [data]);

  if (isLoading) {
    <h2>Loading...</h2>;
  }

  return (
    <div>
      <Top />
    </div>
  );
};
