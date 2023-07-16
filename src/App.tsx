import { useState } from 'react';
import './App.css';
import { EpisodesList } from './components/EpisodesList/EpisodesList';
import { Episode } from './components/Episode/Episode';
import type { EpisodeT } from './data/types';

function App(): JSX.Element {
	const [episode, setEpisode] = useState<EpisodeT | null>(null);

	const onSelectEpisode = (episodeSelected: EpisodeT): void => {
		setEpisode(episodeSelected);
	};

	return (
		<div className='app'>
			<EpisodesList selectEpisode={onSelectEpisode} />
			<Episode episode={episode} />
		</div>
	);
}

export default App;
