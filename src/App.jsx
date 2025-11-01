import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Projects from "./Components/Projects.jsx";
import Profile from "./assets/Photo.jpg";
import "./App.css";

function App() {
	return (
		<div>
			<Header></Header>
			<section
				id="home"
				class="p-8 pb-60 grid grid-cols-2 gap-8 items-center text-left min-h-full scroll-mt-25"
			>
				<div>
					<h1 class="text-7xl">
						Hi! The name's{" "}
						<span class="text-[#f7f3e5] bg-black rounded-lg p-1">David!</span>
					</h1>
					<p class="text-2xl pt-2">
						A college student pursuing his passion in computer science.
					</p>
				</div>
				<div>
					<img
						src={Profile}
						class="w-1/2 h-auto mx-auto border-4"
						alt="Image"
					/>
				</div>
			</section>
			<section id="projects" class="scroll-mt-60">
				<Projects></Projects>
			</section>
			<section
				id="about"
				class="box-border mt-36 pt-4 pb-4 items-center text-left scroll-mt-70"
			>
				<h1 class="ml-20 mb-10 inline-block items-left text-4xl bg-black text-[#f7f3e5] rounded-lg p-4">
					About me
				</h1>
				<p class="ml-20 w-1/2">
					My name is{" "}
					<span class="p-1 bg-black text-[#f7f3e5] rounded-md">
						David Harvey Iroy
					</span>
					, I'm a college student living in the Philippines and I'm currently
					pursuing my dream in computer science at Cavite State University -
					Bacoor. I've always been passionate and interested in programming
					since high school, and now I'm taking steps to turn that passion into
					a career. I'm excited to see where this journey takes me and I'm
					committed to learning and growing as a developer.
				</p>
			</section>
			<section id="skills">
				<div class="mb-10 px-20">
					<h1 class="text-left pb-2 text-2xl underline">
						Current list of skills:
					</h1>
					<div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-4xl">
						<h2 class="bg-[#ebdfbf] border-2 border-b-solid border-black hover:bg-black hover:text-stone-200 transition rounded-full p-2">
							Python
						</h2>
						<h2 class="bg-[#ebdfbf] border-2 border-b-solid border-black hover:bg-black hover:text-stone-200 transition rounded-full p-2">
							Java
						</h2>
						<h2 class="bg-[#ebdfbf] border-2 border-b-solid border-black hover:bg-black hover:text-stone-200 transition rounded-full p-2">
							Javascript
						</h2>
						<h2 class="bg-[#ebdfbf] border-2 border-b-solid border-black hover:bg-black hover:text-stone-200 transition rounded-full p-2">
							PHP
						</h2>
						<h2 class="bg-[#ebdfbf] border-2 border-b-solid border-black hover:bg-black hover:text-stone-200 transition rounded-full p-2">
							HTML
						</h2>
						<h2 class="bg-[#ebdfbf] border-2 border-b-solid border-black hover:bg-black hover:text-stone-200 transition rounded-full p-2">
							CSS
						</h2>
						<h2 class="bg-[#ebdfbf] border-2 border-b-solid border-black hover:bg-black hover:text-stone-200 transition rounded-full p-2">
							React.js
						</h2>
						<h2 class="bg-[#ebdfbf] border-2 border-b-solid border-black hover:bg-black hover:text-stone-200 transition rounded-full p-2">
							Node.js
						</h2>
						<h2 class="bg-[#ebdfbf] border-2 border-b-solid border-black hover:bg-black hover:text-stone-200 transition rounded-full p-2">
							MySQL
						</h2>
						<h2 class="bg-[#ebdfbf] border-2 border-b-solid border-black hover:bg-black hover:text-stone-200 transition rounded-full p-2">
							MongoDB
						</h2>
						<h2 class="bg-[#ebdfbf] border-2 border-b-solid border-black hover:bg-black hover:text-stone-200 transition rounded-full p-2">
							Figma
						</h2>
						<h2 class="bg-[#ebdfbf] border-2 border-b-solid border-black hover:bg-black hover:text-stone-200 transition rounded-full p-2">
							Git & Github
						</h2>
					</div>
				</div>
			</section>
			<section id="contact" class="mt-54 mb-10 ml-20 text-left">
				<hr class="w-16/17" />
				<h1 class="items-center text-center my-8 text-4xl">
					Feel free to reach out!
				</h1>
				<div class="grid grid-cols-2 gap-4 w-4x1">
					<div class="text-2xl">
						<h1 class="my-4">Email</h1>
						<h1 class="my-4">Number</h1>
						<h1 class="my-4">Github</h1>
					</div>
					<div class="text-2xl">
						<h1 class="my-4">davidiroy111@gmail.com</h1>
						<h1 class="my-4">09150783138</h1>
						<h1 class="my-4">
							<a
								class="underline decoration-2 decoration-black cursor-pointer"
								onClick={() =>
									window.open(
										"https://github.com/Deybidd?tab=overview&from=2024-12-01&to=2024-12-31",
										"_blank",
										"noopener,noreferrer"
									)
								}
							>
								Deybidd
							</a>
						</h1>
					</div>
				</div>
			</section>
			<Footer></Footer>
		</div>
	);
}

export default App;
