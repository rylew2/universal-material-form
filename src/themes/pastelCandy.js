import { createMuiTheme } from '@material-ui/core/styles';

// 'pastel candy' theme
const pastelCandy = createMuiTheme({
	palette: {
		primary: {
			main: '#8d9ae4',
			contrastText: '#2a2b2a'
		},
		background: {
			default: '#e0d595'
		},
		text: {
			primary: '#25439a'
		}
	}
});

export default pastelCandy;
