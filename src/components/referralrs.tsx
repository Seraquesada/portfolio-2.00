import { FC } from 'react'
import ReferredCard from './cards/referredCard'

interface Data {
	name: string
	position: string
	description: string
	github: string
	linkedin: string
}

const data: Data[] = [
	{
		name: 'Joaquin Marmol',
		position: 'Frontend Developer',
		description:
			'During our time at Upler, a startup specializing in software license management, I had the pleasure of collaborating closely with Serafín. His expertise in frontend development, coupled with his background in the Certified Tech Developer (CTD) program, made him an invaluable asset to our team. Serafín consistently demonstrated dedication, technical proficiency, and a positive attitude, which significantly contributed to the success of our projects. I wholeheartedly recommend Serafín for any future opportunities, confident in his ability to code and make meaningful contributions.',
		github: 'https://github.com/JoaquinMarmol',
		linkedin: 'https://www.linkedin.com/in/joaquin-marmol/',
	},
	{
		name: 'Tomas Bernandin',
		position: 'Backend Developer',
		description:
			'I shared with Serafín my studies at Digital House, in the Certified Tech Developercareer. He was responsible for the FrontEnd area in the final project of the program. He is a great professional and, above all, a great person, always contributing positively to the team.',
		github: 'https://github.com/JoaquinMarmol',
		linkedin: 'https://www.linkedin.com/in/joaquin-marmol/',
	},
	{
		name: 'Luca Beati',
		position: 'Backend Developer',
		description:
			'I had the pleasure of working with Serafín	on both integrative projects of the CTD (Certified Tech Developer) career. Both times were a pleasure; he was committed to both the projects and his tasks, met deadlines, but above all, he always had a willingness to work, proactivity, and most important a positive attitude. I hope we cross paths again in future projects!',
		github: 'https://github.com/LukaBrc',
		linkedin: 'https://www.linkedin.com/in/lucabp/',
	},
]

const Referrals: FC = () => {
	return (
		<section
			id="referrals"
			className="my-10 flex w-full flex-col flex-wrap gap-5 pt-20 text-[#f9f9f9] sm:flex-nowrap"
		>
			<div className="flex flex-col gap-5">
				<h2 className="text-6xl"> Referred</h2>
				<div className="flex flex-col gap-5 md:flex-row">
					<div className="flex flex-col gap-2   ">
						<h4 className="text-3xl font-semibold ">
							Referrals of people who I have work or study with
						</h4>
						<ol className="mt-5 flex w-full flex-col gap-8 lg:flex-row">
							{data.map((d) => (
								<li
									className="w-full rounded-md bg-gradient-to-l from-stone-700 to-stone-900 to-[70%] px-4 py-3 md:w-4/5 "
									key={d.name}
								>
									<ReferredCard
										name={d.name}
										position={d.position}
										description={d.description}
										github={d.github}
										linkedin={d.linkedin}
									/>
								</li>
							))}
						</ol>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Referrals
