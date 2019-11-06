import React from 'react'
import { Link } from 'gatsby'

import { Reactiflux } from '@assets/logos'

export function Menu() {
	return (
		<menu>
			<ul>
				<li>
					<Link to="/">
						<img src={Reactiflux} alt="Reactiflux" />
					</Link>
				</li>
				<li>
					<Link to="/tips/">Tips</Link>
				</li>
				<li>
					<Link to="/guidelines/">Guidelines</Link>
				</li>
				<li>
					<Link to="/schedule/">Q&A Schedule</Link>
				</li>
				<li>
					<Link to="/transcripts/">Transcripts</Link>
				</li>
				<li>
					<a
						href="http://jobs.reactiflux.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Jobs
					</a>
				</li>
				<li>
					<Link to="/learning/">Learning</Link>
				</li>
			</ul>
		</menu>
	)
}
