import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Main = () => {
	return (
		<>
			<Container maxWidth="sm">
				<Typography textAlign="center">
					<h1>приветики!</h1>
				</Typography>

				<Box sx={{  height: '50vh' }}>
					<img src={'https://pbs.twimg.com/media/FuYKf33XwAAb_yb?format=jpg&name=medium'} alt={'кисуня нюхает цветочек'} height='600'/>
				</Box>
			</Container>
		</>
	)
}