// * CAROUSEL COMPONENT
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../../components/ui/carousel";

// * CARD COMPONENT
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../../components/ui/card";

// * BUTTON COMPONENT AND TOOLTIP COMPONENT
import { Button } from "../../components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "../../components/ui/tooltip";

// * STYLES AND ASSETS
import styles from "../Components-Css/Projects.module.css";
import SDbMS from "../assets/Student Database Management System.png";
import coffeeMenu from  "../assets/Coffee Menu.png";
import lyricsWebpage from "../assets/Lyrics Webpage.png";
import videoWebpage from "../assets/Video Webpage.png";
import midtermProject from "../assets/Midterm Project.png";


function Projects() {
    return (
			<section className={styles.section}>
				<div className={styles.previousProjects}>
					<h1>Previous Projects</h1>
				</div>
				<Carousel className={styles.carouselContainer}>
					<CarouselContent className="-ml-4">
						{/* SDBmS */}
						<CarouselItem className="basis-1/3 px-5">
							<Card className={styles.card}>
								<CardHeader className={styles.cardHeader}>
									<CardTitle className={styles.cardTitle}>Student Database Management System</CardTitle>
									<CardDescription>
										A simple student database management system using PHP and
										XAMPP.
									</CardDescription>
								</CardHeader>
								<CardContent className={styles.cardContent}>
									<img src={SDbMS} alt="Image" />
								</CardContent>
								<div className={styles.footer}>
									<CardFooter>
										<CardAction className={styles.footerAction}>
											<Tooltip>
												<TooltipTrigger asChild>
													<Button
														className={styles.unavailableButton}
														variant="link"
													>
														Access
													</Button>
												</TooltipTrigger>
												<TooltipContent className={styles.toolTipContent}>
													<p>
														This project is unavailable or is not for public
														access.
													</p>
												</TooltipContent>
											</Tooltip>
										</CardAction>
										<p>— &nbsp; Academic Project</p>
									</CardFooter>
								</div>
							</Card>
						</CarouselItem>

						{/* Coffee Menu */}
						<CarouselItem className="basis-1/3 px-5">
							<Card className={styles.card}>
								<CardHeader className={styles.cardHeader}>
									<CardTitle className={styles.cardTitle}>Coffee Menu</CardTitle>
									<CardDescription>
										A simple Coffee Menu that was an activity for ITEC-50.
									</CardDescription>
								</CardHeader>
								<CardContent className={styles.cardContent}>
									<img src={coffeeMenu} alt="Image" />
								</CardContent>
								<div className={styles.footer}>
									<CardFooter>
										<CardAction className={styles.footerAction}>
											<Tooltip>
												<TooltipTrigger asChild>
													<Button
														className={styles.availableButton}
														variant="link"
														onClick={() =>
															window.open(
																"https://github.com/Deybidd/Coffee-Menu.git",
																"_blank",
																"noopener,noreferrer"
															)
														}
													>
														Access
													</Button>
												</TooltipTrigger>
												<TooltipContent className={styles.toolTipContent}>
													<p>Github Link Available</p>
												</TooltipContent>
											</Tooltip>
										</CardAction>
										<p>— &nbsp; Academic Project</p>
									</CardFooter>
								</div>
							</Card>
						</CarouselItem>

						{/* Lyrics Webpage */}
						<CarouselItem className="basis-1/3 px-5">
							<Card className={styles.card}>
								<CardHeader className={styles.cardHeader}>
									<CardTitle className={styles.cardTitle}>Lyrics Webpage</CardTitle>
									<CardDescription>
										A Lyrics Webpage of our favorite song. An activity for
										ITEC-50.
									</CardDescription>
								</CardHeader>
								<CardContent className={styles.cardContent}>
									<img src={lyricsWebpage} alt="Image" />
								</CardContent>
								<div className={styles.footer}>
									<CardFooter>
										<CardAction className={styles.footerAction}>
											<Tooltip>
												<TooltipTrigger asChild>
													<Button
														className={styles.availableButton}
														variant="link"
														onClick={() =>
															window.open(
																"https://github.com/Deybidd/My-Lyrics-Webpage.git",
																"_blank",
																"noopener,noreferrer"
															)
														}
													>
														Access
													</Button>
												</TooltipTrigger>
												<TooltipContent className={styles.toolTipContent}>
													<p>Github Link Available</p>
												</TooltipContent>
											</Tooltip>
										</CardAction>
										<p>— &nbsp; Academic Project</p>
									</CardFooter>
								</div>
							</Card>
						</CarouselItem>

						{/* Video Webpage */}
						<CarouselItem className="basis-1/3 px-5">
							<Card className={styles.card}>
								<CardHeader className={styles.cardHeader}>
									<CardTitle className={styles.cardTitle}>Video Webpage</CardTitle>
									<CardDescription>
										A Lyrics Webpage with Video of a song. An activity for
										ITEC-50.
									</CardDescription>
								</CardHeader>
								<CardContent className={styles.cardContent}>
									<img src={videoWebpage} alt="Image" />
								</CardContent>
								<div className={styles.footer}>
									<CardFooter>
										<CardAction className={styles.footerAction}>
											<Tooltip>
												<TooltipTrigger asChild>
													<Button
														className={styles.availableButton}
														variant="link"
														onClick={() =>
															window.open(
																"https://github.com/Deybidd/Music-Video.git",
																"_blank",
																"noopener,noreferrer"
															)
														}
													>
														Access
													</Button>
												</TooltipTrigger>
												<TooltipContent className={styles.toolTipContent}>
													<p>Github Link Available</p>
												</TooltipContent>
											</Tooltip>
										</CardAction>
										<p>— &nbsp; Academic Project</p>
									</CardFooter>
								</div>
							</Card>
						</CarouselItem>

						{/* Midterm Project */}
						<CarouselItem className="basis-1/3 px-5">
							<Card className={styles.card}>
								<CardHeader className={styles.cardHeader}>
									<CardTitle className={styles.cardTitle}>Midterm Project</CardTitle>
									<CardDescription>
										My Midterm Project for ITEC-50. Includes all my
										projects/activities done in for the subject.
									</CardDescription>
								</CardHeader>
								<CardContent className={styles.cardContent}>
									<img src={midtermProject} alt="Image" />
								</CardContent>
								<div className={styles.footer}>
									<CardFooter>
										<CardAction className={styles.footerAction}>
											<Tooltip>
												<TooltipTrigger asChild>
													<Button
														className={styles.availableButton}
														variant="link"
														onClick={() =>
															window.open(
																"https://github.com/Deybidd/Midterm-Project.git",
																"_blank",
																"noopener,noreferrer"
															)
														}
													>
														Access
													</Button>
												</TooltipTrigger>
												<TooltipContent className={styles.toolTipContent}>
													<p>Github Link Available</p>
												</TooltipContent>
											</Tooltip>
										</CardAction>
										<p>— &nbsp; Academic Project</p>
									</CardFooter>
								</div>
							</Card>
						</CarouselItem>
					</CarouselContent>
					{/* Add hover animation to carousel buttons */}
					<CarouselPrevious className={styles.carouselButton} />
					<CarouselNext className={styles.carouselButton} />
				</Carousel>
			</section>
		);
}

export default Projects;
