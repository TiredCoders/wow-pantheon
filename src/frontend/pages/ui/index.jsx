import React from "react";
import Box from "../../components/UI/Layout/Box";
import FlexBox from "../../components/UI/Layout/FlexBox";
import UIToken from "../../utils/UIToken";

const Ui = () => {
	return (
		<>
			<FlexBox alignItems="center" margin={[20, 0]}>
				<Box color="white" margin={[0, 5]} width="300px">
					Primary Color
				</Box>
				<Box
					height="25px"
					width="25px"
					border="1px solid black"
					borderRadius="7px"
					margin={[0, 5]}
					background={UIToken.primary90}
				/>
				<Box
					height="25px"
					width="25px"
					border="1px solid black"
					borderRadius="7px"
					margin={[0, 5]}
					background="transparent"
				/>
				<Box
					height="25px"
					width="25px"
					border="1px solid black"
					borderRadius="7px"
					margin={[0, 5]}
					background={UIToken.primary70}
				/>
				<Box
					height="25px"
					width="25px"
					border="1px solid black"
					borderRadius="7px"
					margin={[0, 5]}
					background="transparent"
				/>
				<Box
					height="25px"
					width="25px"
					border="1px solid black"
					borderRadius="7px"
					margin={[0, 5]}
					background={UIToken.primary50}
				/>
				<Box
					height="25px"
					width="25px"
					border="1px solid black"
					borderRadius="7px"
					margin={[0, 5]}
					background="transparent"
				/>
				<Box
					height="25px"
					width="25px"
					border="1px solid black"
					borderRadius="7px"
					margin={[0, 5]}
					background={UIToken.primary30}
				/>
				<Box
					height="25px"
					width="25px"
					border="1px solid black"
					borderRadius="7px"
					margin={[0, 5]}
					background="transparent"
				/>
				<Box
					height="25px"
					width="25px"
					border="1px solid black"
					borderRadius="7px"
					margin={[0, 5]}
					background={UIToken.primary10}
				/>
			</FlexBox>
			<FlexBox alignItems="center">
				<Box color="white" margin={[0, 5]} width="300px">
					Secondary Color
				</Box>
				<Box
					height="25px"
					width="25px"
					border="1px solid black"
					borderRadius="7px"
					margin={[0, 5]}
					background="transparent"
				/>
				<Box
					height="25px"
					width="25px"
					border="1px solid black"
					borderRadius="7px"
					margin={[0, 5]}
					background="transparent"
				/>
				<Box
					height="25px"
					width="25px"
					border="1px solid black"
					borderRadius="7px"
					margin={[0, 5]}
					background="transparent"
				/>
				<Box
					height="25px"
					width="25px"
					border="1px solid black"
					borderRadius="7px"
					margin={[0, 5]}
					background="transparent"
				/>
				<Box
					height="25px"
					width="25px"
					border="1px solid black"
					borderRadius="7px"
					margin={[0, 5]}
					background="transparent"
				/>
				<Box
					height="25px"
					width="25px"
					border="1px solid black"
					borderRadius="7px"
					margin={[0, 5]}
					background="transparent"
				/>
				<Box
					height="25px"
					width="25px"
					border="1px solid black"
					borderRadius="7px"
					margin={[0, 5]}
					background="transparent"
				/>
				<Box
					height="25px"
					width="25px"
					border="1px solid black"
					borderRadius="7px"
					margin={[0, 5]}
					background="transparent"
				/>
				<Box
					height="25px"
					width="25px"
					border="1px solid black"
					borderRadius="7px"
					margin={[0, 5]}
					background="transparent"
				/>
			</FlexBox>
		</>
	);
};

export default Ui;
