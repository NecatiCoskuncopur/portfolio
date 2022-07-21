import { motion } from 'framer-motion';
import Image from 'next/image';
import { styled } from '../stitches.config';


export default function Widget({ stats }) {
	return (
		<Container>
			{
				stats.map((stat, index) => (
					<Card key={index} as={motion.div} whileHover={{ scale: 1.1 }}>

						<Image src={`/img/widget/${stat.img}`} width={64} height={64} alt={stat.alt} />

						<Text><span>{stat.stat}</span>{stat.description}</Text>
						<Image src={`/img/icons/${stat.icon}`} width={20} height={20} alt='arrow' />
					</Card>
				))
			}
		</Container>
	)
};


const Container = styled('div', {
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontFamily: '$heading',
	py: '70px',
	px: 0,
	'@bp4': {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	}
});


const Card = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-around',
	width: '420px',
	height: '120px',
	backgroundColor: '$color3',
	'&:not(:last-child)': {
		mr: '24px',
	},
	'@bp4': {
		'&:not(:last-child)': {
			mr: 0,
			mb: '24px'
		},
	},
	'@bp6': {
		width: '320px'
	}
});


const Text = styled('p', {
	fontWeight: '$4',
	color: '$main',
	span: {
		display: 'block',
		textAlign: 'center',
		fontSize: '$6',
		color: '$primary',
		lineHeight: '40px',
	}
});