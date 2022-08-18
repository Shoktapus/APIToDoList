const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      tasks: [],
    },
    actions: {
      getData: () => {
        fetch("https://assets.breatheco.de/apis/fake/todos/user/martell", {
          method: "GET",
          headers: { "content-type": "application/json" },
        })
          .then((response) => response.json())
          .then((result) => setStore({ tasks: result }))
          .catch((error) => console.log("error", error));
      },
      addItem: (list) => {
        fetch("https://assets.breatheco.de/apis/fake/todos/user/martell", {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(list),
        })
          .then((response) => {
            response.status === 200 ? setStore({ tasks: list }) : "";
          })
          .catch((error) => console.log("error", error));
      },
      deleteItem: (index) => {
		const store = getStore()
        const del = store.tasks.filter((element, i) => index !== i);
        
        fetch("https://assets.breatheco.de/apis/fake/todos/user/martell", {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(del),
        })
          .then((response) => {
            response.status === 200 ? setStore({ tasks: del }) : "";
          })
          .catch((error) => console.log("error", error));
      },
    },
  };
};

export default getState;
