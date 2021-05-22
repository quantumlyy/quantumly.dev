/* eslint-disable jsx-a11y/anchor-is-valid */
import Icon from 'components/Icon';
import Icons from 'components/Icons';
import LargeTitle from 'components/LargeTitle';
import { generateRssFeed } from 'core/feed';
import { generateSitemap } from 'core/sitemap';
import Layout from 'layouts/Layout';
import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import path from 'path';
import React from 'react';
import {
	SiAmazonaws,
	SiBabel,
	SiCloudflare,
	SiCss3,
	SiDiscord,
	SiDocker,
	SiGit,
	SiGithub,
	SiHtml5,
	SiJava,
	SiJsonwebtokens,
	SiMarkdown,
	SiNextDotJs,
	SiNodeDotJs,
	SiPostgresql,
	SiReact,
	SiRedis,
	SiSentry,
	SiServerless,
	SiSpotify,
	SiTailwindcss,
	SiTypescript,
	SiVisualstudiocode,
	SiWebpack,
	SiWebstorm,
	SiYarn
} from 'react-icons/si';
import 'react-tippy/dist/tippy.css';

const Index: NextPage = () => {
	return (
		<Layout>
			<div className="flex">
				<Link href="/about" passHref>
					<a aria-label="About" className="flex-1">
						About me
					</a>
				</Link>
				{/* <p>TypeScript + React (NextJS) + Node.js</p> */}
			</div>
			<div className="flex flex-1">
				<div className="flex justify-center flex-col space-y-10">
					<div className="space-y-2">
						<LargeTitle>Nejc Drobnič</LargeTitle>
						<Icons>
							<Icon icon={SiTypescript} title="TypeScript" />
							<Icon icon={SiReact} title="React.js" />
							<Icon icon={SiNextDotJs} title="Next.js" />
							<Icon icon={SiRedis} title="Redis" />
							<Icon icon={SiNodeDotJs} title="Node.js" />
							<Icon icon={SiPostgresql} title="PostgreSQL" />
							<Icon icon={SiDocker} title="Docker" />
							<Icon icon={SiAmazonaws} title="AWS" />
							<Icon icon={SiWebpack} title="Webpack" />
							<Icon icon={SiBabel} title="Babel" />
							<Icon icon={SiJava} title="Java" />
							<Icon icon={SiYarn} title="Yarn" />
							<Icon icon={SiCss3} title="CSS3" />
							<Icon icon={SiHtml5} title="HTML5" />
							<Icon icon={SiSentry} title="Sentry" />
							<Icon icon={SiTailwindcss} title="TailwindCSS" />
							<Icon icon={SiServerless} title="Serverless" />
							<Icon icon={SiCloudflare} title="Cloudflare" />
							<Icon icon={SiGit} title="Git" />
							<Icon icon={SiGithub} title="GitHub" />
							<Icon icon={SiDiscord} title="Discord" />
							<Icon icon={SiMarkdown} title="Markdown" />
							<Icon icon={SiJsonwebtokens} title="JSON Web Tokens" />
							<Icon icon={SiWebstorm} title="WebStorm IDE" />
							<Icon icon={SiVisualstudiocode} title="VSCode" />
							<Icon icon={SiSpotify} title="Spotify" />
						</Icons>
					</div>
				</div>
			</div>
			{/* <div className="flex">
				<p>
					<Link href="/blog">Blog</Link>
				</p>
			</div> */}
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const directory = path.join(process.cwd(), 'src');

	await generateSitemap(directory);
	generateRssFeed(path.join(directory, 'public'));

	return { props: {} };
};

export default Index;
