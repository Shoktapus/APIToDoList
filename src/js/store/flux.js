const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		tasks: []
		},
		actions: {
			addItem: (list) => {
				fetch("http://assets.breatheco.de/apis/fake/todos/user/martell", {
					method: "PUT", 
					headers: {"content-type": "application/json"}, 
					body: JSON.stringify(list)
				})
				.then((response) => {
					response.status === 200 ?setStore({tasks:list}): ""
				})
				.catch((error) => console.log("error", error))
			}

		}
	};
};

export default getState;
