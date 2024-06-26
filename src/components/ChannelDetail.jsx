import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
	const [channelDetail, setChannelDetail] = useState(null);
	const [videos, setVideos] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
			setChannelDetail(data?.items[0])
		);

		fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
			(data) => setVideos(data?.items)
		);
	}, [id]);

	return (
		<Box minHeight="95vh">
			<Box>
				<div
					style={{
						background:
							"linear-gradient(343deg, rgba(2,0,36,1) 11%, rgba(44,9,121,0.894016981792717) 41%, rgba(217,0,0,1) 100%)",
						zIndex: 10,
						height: "300px",
					}}
				/>
				<ChannelCard channelDetail={channelDetail} marginTop="-110px" />
			</Box>
			<Box display="flex" p="2">
				<Box sx={{ m: { sm: "100px" } }} />
				<Videos videos={videos} />
			</Box>
		</Box>
	);
};

export default ChannelDetail;
