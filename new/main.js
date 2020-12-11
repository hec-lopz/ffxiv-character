const $search_bar = document.search_params;
const $server_list = document.getElementById("servers");
const FFXIV = "https://xivapi.com/";

const getData = async (query) => {
  const url = FFXIV + query;
  const response = await fetch(url);
  return response.json();
};

const servers_list = getData("servers");
servers_list.then((response) => {
  response.forEach((element) => {
    const option = document.createElement("option");
    option.setAttribute("value", element);
    $server_list.append(option);
  });
});
