import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();
  const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkxlQmsyZXlFWUR0MGNram9QT1EzUSJ9";
  const get = async (gtoken) => {
    const response = await fetch(
      `https://dev-1ycr2f4brea4mqn0.us.auth0.com/api/v2/users`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkxlQmsyZXlFWUR0MGNram9QT1EzUSJ9.eyJpc3MiOiJodHRwczovL2Rldi0xeWNyMmY0YnJlYTRtcW4wLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJSZTlscVhDY05ZWTJSdUY0eGhiTnROZHlOM3dkWXNtY0BjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9kZXYtMXljcjJmNGJyZWE0bXFuMC51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTcxNTQyMjM4NSwiZXhwIjoxNzE1NTA4Nzg1LCJzY29wZSI6InJlYWQ6dXNlcnMgdXBkYXRlOnVzZXJzIHJlYWQ6cm9sZXMgY3JlYXRlOnJvbGVzIGRlbGV0ZTpyb2xlcyB1cGRhdGU6cm9sZXMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMiLCJhenAiOiJSZTlscVhDY05ZWTJSdUY0eGhiTnROZHlOM3dkWXNtYyJ9.SE0CVCoHOYyVYc4GEGMoQfzo6EhsDf04iDbHG86ku16Fm3H8eyMNkiVQ7rnkE2eCkwo7pi9lb_iUPlfhUf1PjUXG-3lTSjbiGM4hMiOzdOBHlybwr_gcpLEdR2jXR-E6GyusiLn0TBMCsJO7DFkHL_llVCkht0zX8dEQI0ZWcxwEuAHFY0eyLgt9Rvhkww6o1XqA3RywI7AOB-o8fG7dXl1yds5xPA1yN_rKgh6JI-4NCgy5J478YycdD05aHX_1D0abrcak-PQ4bNP7y8AZmek_kZ-NJ7LMFnxLAx8NRwOlU3X5gHW_D-JBGMxxY10317lugXTviv_Ak3PFBCdzLw",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };
  get(token);
  get(token);
  const getToken = async () => {
    const response = await fetch(
      "https://dev-1ycr2f4brea4mqn0.us.auth0.com/oauth/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: "Re9lqXCcNYY2RuF4xhbNtNdyN3wdYsmc",
          client_secret:
            "HA5q43MvPquaMAPXe8XsNODTTkG4_NcSuYBDt7LZ4C_b5xoZoUdxWqOsZlHf7w-a",
          audience: "https://dev-1ycr2f4brea4mqn0.us.auth0.com/api/v2/",
          grant_type: "client_credentials",
        }),
      }
    );

    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <div className="container">
        <p className="userInfo" id="userInfo1">
          Name: {user.name}
        </p>
        <p className="userInfo" id="userInfo2">
          Given Name: {user.given_name}
        </p>
        <p className="userInfo" id="userInfo3">
          Family Name: {user.family_name}
        </p>
        <p className="userInfo" id="userInfo4">
          Email: {user.email}
        </p>
        <p className="userInfo" id="userInfo5">
          Sub: {user.sub}
        </p>
      </div>
    </>
  );
};

export default Profile;
