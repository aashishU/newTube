import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import newTubeIcon from "../utils/youtube.png";
import SearchBar from "./SearchBar";

function Navbar() {
	return (
		<Stack
			direction="row"
			alignItems="center"
			p={2}
			sx={{
				position: "sticky",
				background: "#000",
				top: 0,
				justifyContent: "space-between",
			}}
		>
			<Link to="/" style={{ display: "flex", alignItems: "center" }}>
				<img src={newTubeIcon} alt="logo" height={45} />
				<Typography
					variant="h5"
					fontWeight="bold"
					ml={2}
					sx={{ color: "white" }}
				>
					NEW<span style={{ color: "#F31503" }}>TUBE</span>
				</Typography>
			</Link>
			<SearchBar />
		</Stack>
	);
}

export default Navbar;
