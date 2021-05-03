import { toWords } from 'number-to-words';
import React, { useState } from 'react';
import { Consts } from 'core/consts';
import day from 'dayjs';
import Link from 'next/link';
import Layout from 'layouts/Layout';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaDiscord, FaKeybase } from 'react-icons/fa';

const birthday = day('21 September 2003').toDate();
const age = Math.abs(new Date(Date.now() - birthday.getTime()).getUTCFullYear() - 1970);

export default function About() {
	return (
		<div className="bg-gray-900 bg-opacity-50 h-full">
			<Layout>
				<Link href="/">Back</Link>
				<div className="flex-1 flex h-full justify-center items-center">
					<div className="glass overflow-hidden p-5 w-96 space-y-2">
						<h1 className="text-3xl font-bold title">Nejc Drobnič</h1>
						<p>Hey, I'm a {toWords(age)} year old full-stack TypeScript engineer from Slovenia.</p>
						<div className="flex items-center">
							{/* <img src="/me.png" alt="Me" className="h-20 rounded-md" /> */}
							<div className="flex justify-between flex-col py-4 pb-2 pl-6 space-y-1">
								<DiscordContactRow />
								<a href="mailto:inbox@quantumly.dev" className="flex items-center space-x-3">
									<FiMail /> <span>inbox@quantumly.dev</span>
								</a>
								<a href="https://github.com/quantumlytangled" className="flex items-center space-x-3">
									<FiGithub /> <span>quantumlytangled</span>
								</a>
							</div>
						</div>
						<div className="flex items-center">
							<div className="flex justify-between flex-row py-4 pt-0 pl-3 space-y-1">
								<a href="https://www.linkedin.com/in/nejc-drobnic" className="flex items-center pr-2">
									<FiLinkedin />
								</a>
								<a href="https://keybase.io/quantumly" className="flex items-center pr-2">
									<FaKeybase />
								</a>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
}

export const DiscordContactRow = () => {
	const [message, setMessage] = useState(Consts.DiscordUsername);

	const copy = async () => {
		await navigator.clipboard.writeText(Consts.DiscordUsername);
		setMessage('Copied ✔');
		await new Promise((r) => setTimeout(r, 1500));
		setMessage(Consts.DiscordUsername);
	};

	return (
		<a href="#" onClick={copy} className="flex items-center space-x-3">
			<FaDiscord /> <span>{message}</span>
		</a>
	);
};