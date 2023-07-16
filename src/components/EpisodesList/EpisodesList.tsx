import { Episodes } from '../../data/data';
import type { EpisodeT } from '../../data/types';
import './EpisodesList.css';

interface EpisodesListProps {
	selectEpisode: (episode: EpisodeT) => void;
}

export function EpisodesList({ selectEpisode }: EpisodesListProps): JSX.Element {
	const updateSelectedEpisode = (episodeId: number): void => {
		const episodeFindById: EpisodeT | undefined = Episodes.find(
			ep => ep.id === episodeId
		);
		if (episodeFindById != null) selectEpisode(episodeFindById);
	};

	const listEpisodes = Episodes.map(e => {
		return (
			<li
				key={e.id}
				onClick={() => {
					updateSelectedEpisode(e.id);
				}}
			>
				<h4>Episode {e.id}</h4>
				<h3>{e.title}</h3>
			</li>
		);
	});
	return (
		<div className='side'>
			<img src='/images/logo.svg' alt='logo' className='logo' />
			<ul className='list'>{listEpisodes}</ul>
		</div>
	);
}
