import Image from 'next/image'
import Content from './Content'
import { styled } from '../stitches.config';
import { motion } from 'framer-motion';
import { containerVariants } from '../variants';
import Button from './Button';





export default function Skills({ header, title, description, skills }) {
	return (
		<Container id='skills' as={motion.div} variants={containerVariants} initial='offscreen' whileInView="onscreen">
			<Card>
				<Content header={header} title={title} description={description} />
				<Button href='mailto:necaticoskuncopur@gmail.com' text='Mail me' />
			</Card>
			<Card>
				<List>
					{skills?.map((skill, index) => (
						<motion.li whileHover={{ scale: 1.2 }} key={index} title={skill.name} >
							<Image src={skill.image} width={50} height={50} alt='skill' />
						</motion.li>
					))}
				</List>
			</Card>
		</Container>
	)
};


const Container = styled('div', {
	display: 'flex',
	alignItems: 'center',
	color: '$main',
	width: '100%',
	py: '70px',
	px: '50px',
	'@bp4': {
		flexDirection: 'column',
	}
});


const Card = styled('div', {
	flex: 1,
	'&:not(:first-child)': {
		ml: '50px',
		'@bp4': {
			m: 0,
		}
	}
});





const List = styled('ul', {
	display: 'grid',
	gridColumnGap: '16px',
	gridRowGap: '16px',
	gridTemplateColumns: 'repeat(3,1fr)',
	width: '50%',
	pa: 0,
	'@bp4': {
		gridColumnGap: '10px',
		gridRowGap: '10px',
		gridTemplateColumns: 'repeat(3,1fr)',
		ml: 0,
		pl: 0,
		mt: '20px'
	},
	li: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		br: '$2',
		height: '80px',
		width: '80px',
		backgroundColor: '$color2'
	}
});

