import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Works: FC = () => {
	return (
		<section
			id="works"
			className="my-10 flex w-full flex-col flex-wrap gap-5 pt-20 text-[#f9f9f9] sm:flex-nowrap"
		>
			<div className="flex flex-col gap-5">
				<h2 className="text-6xl"> Works</h2>
				<div className="flex flex-col gap-5 md:flex-row">
					<div className="flex flex-col gap-2  md:w-3/5 ">
						<div className="flex flex-col  gap-3 2xl:flex-row 2xl:items-end">
							<h4 className="text-3xl font-semibold ">
								Upler - Front End Developer
							</h4>
							<span className="text-xl font-light ">
								08/2023 - 04/2024
							</span>
						</div>

						<p className="w-4/5  text-lg">
							Project initiated for the Ethereum Argentina
							Buildathon. It is a platform that combines a
							software management solution with a large
							marketplace where individuals can find all the
							software they need to work for their projects.
						</p>
						<p>
							<span className="font-semibold">
								Technologic Stack:{' '}
							</span>
							Next Js, TypeScript, Tailwind and Node Js.
						</p>
						<div className="flex gap-5">
							<Link
								className="font-semibold uppercase hover:text-cyan-500"
								href="https://upler.tech/"
								target="_blamk"
							>
								web site
							</Link>
							<Link
								className="font-semibold uppercase hover:text-cyan-500"
								href="https://github.com/UplerSolutions/UplerSolutions.github.io"
								target="_blamk"
							>
								Git Hub
							</Link>
						</div>
					</div>
					<div className="flex flex-col gap-2  md:w-3/5 ">
						<div className="flex flex-col  gap-3 2xl:flex-row 2xl:items-end">
							<h4 className="text-3xl font-semibold ">
								Materia Prima - Freelance - Front End Developer
							</h4>
							<span className="text-xl font-light ">
								06/2024 - 09/2024
							</span>
						</div>

						<p className="w-4/5  text-lg">
							Project made as a freelancer for the company Materia
							Prima. It is mainly a web for people to look at the
							job they make and contact them.
						</p>
						<p>
							<span className="font-semibold">
								Technologic Stack:{' '}
							</span>
							Next Js, TypeScript, Tailwind and GSAP.
						</p>
						<div className="flex gap-5">
							<Link
								className="font-semibold uppercase hover:text-cyan-500"
								href="https://materia-prima.vercel.app/"
								target="_blamk"
							>
								web site
							</Link>
							<Link
								className="font-semibold uppercase hover:text-cyan-500"
								href="https://github.com/Seraquesada/Materia-Prima"
								target="_blamk"
							>
								Git Hub
							</Link>
						</div>
					</div>

					{/* <div className="relative  mx-auto duration-300 hover:opacity-60 ">
						<Image
							className="inset-0 z-0 rounded-md  bg-cover bg-center"
							src={'/upler.jpeg'}
							alt="upler"
							height={500}
							width={500}
						/>
						<div className="absolute inset-0 z-10 flex items-center justify-center text-3xl font-bold text-[#f9f9f9]  opacity-0 duration-300 hover:opacity-100 ">
							Upler @ ETH ARG 2023
						</div>
					</div> */}
				</div>
			</div>
		</section>
	)
}

export default Works
