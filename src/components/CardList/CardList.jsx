import {useContext} from "react";
import {GlobalContext} from "../../contexts/globalContext";
import RestCard from "../RestCard/RestCard";

export const CardList = () => {
	const {state: {list}} = useContext(GlobalContext)
	console.log(list)
	return (
		<>
			{list.map(post => <RestCard
				{...post}
			/>)}
		</>
	)
}