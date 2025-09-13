import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));

function App() {
	return (
		<AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
				{/* basename مهم عشان جيتهب بيجز */}
				<Router basename="/react-tailwindcss-portfolio-main">
					<ScrollToTop />
					<AppHeader />
					<Suspense fallback={""}>
						<Routes>
							{/* الصفحة الرئيسية */}
							<Route path="/" element={<Home />} />

							{/* الصفحات التانية */}
							<Route path="/projects" element={<Projects />} />
							<Route path="/projects/single-project" element={<ProjectSingle />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />

							{/* أي لينك غلط يرجع للهوم */}
							<Route path="*" element={<Navigate to="/" replace />} />
						</Routes>
					</Suspense>
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default App;
