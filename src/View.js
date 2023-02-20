import React, { useState, useEffect, useCallback } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { endpoint } from "./services/endpoint";
import { RotatingLines } from "react-loader-spinner";
import { Container, Button } from "./styles";

const View = () => {
  const [isHealthy, setIsHealthy] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [search] = useState(document.location.search || "");
  const navigate = useNavigate();

  const verifyHealth = useCallback(async () => {
    try {
      const isDetailsPage = document.location.pathname.split("/").length === 3;

      const response = await endpoint.get("health");
      setIsHealthy(response.status === 200);

      if (!search.length && !isDetailsPage)
        navigate(response.status === 200 && "/questions");
    } catch (err) {
      console.error(err);
    } finally {
      setShowLoader(false);
    }
  }, [navigate, search.length]);

  const handleValidateHealth = useCallback(() => {
    setShowLoader(true);
    verifyHealth();
  }, [verifyHealth]);

  useEffect(() => {
    verifyHealth();
  }, [verifyHealth]);

  return (
    <>
      <Container>
        {showLoader && (
          <RotatingLines
            strokeColor="red"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
          />
        )}

        {!isHealthy && !showLoader && (
          <Button type="button" onClick={handleValidateHealth}>
            Try Again
          </Button>
        )}
      </Container>
      {isHealthy && <Outlet />}
    </>
  );
};

export default View;
