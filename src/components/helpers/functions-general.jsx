// export const baseImgUrl = "http://localhost/react-intro/public/img";
export const devBaseImgUrl="http://localhost/react-portfolio/public/img/home"

export const baseImgUrl = "../../img"

export const urlPathPortfolio = "http://localhost/react-portfolio";
export const devApiUrl = `${urlPathPortfolio}/rest`;

export const devKey =
  "$2a$12$47wDvbLInZif/PVS8B6P3.7WxyJvUpBzZAWCsnWJUKq3nrn4qgmeO";

  // fetch for uploading photo or file
  export const fetchFormData = (url, fd = {}) => {
    const data = fetch(url, {
      method: "post",
      body: fd,
    })
      .then((res) => res.json())
      .catch((error) => {
        console.error(error + " api endpoint error");
      });
  
    return data;
  };

  // get the url id parameter
export const getUrlParam = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams;
};

export const checkLocalStorage = () => {
  let glatoken = null;
  try {
    glatoken = JSON.parse(localStorage.getItem("glatoken"));
  } catch (error) {
    glatoken = null;
  }

  return glatoken;
};

export function setStorageRoute(jwt) {
  localStorage.setItem("glatoken", JSON.stringify({ token: jwt }));
};