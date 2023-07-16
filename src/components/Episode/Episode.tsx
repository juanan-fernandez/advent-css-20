import './Episode.css';
import type { EpisodeT } from '../../data/types';

interface EpisodeProps {
	episode: EpisodeT | null;
}

export function Episode({ episode }: EpisodeProps): JSX.Element {
	if (episode == null) return <></>;
	return (
		<div className='episode'>
			<img src={`images/${episode.cover}`} alt={`Episode ${episode.id}`} />
			<div>
				<h2>{episode.title}</h2>
				<p>{episode.description}</p>

				<a href={episode.link} target='blank'>
					MORE
					<img src='/images/arrow.svg' alt='Go!' />
				</a>
			</div>
		</div>
	);
}
