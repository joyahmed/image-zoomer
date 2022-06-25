import React, { useState, useEffect, Suspense } from 'react';
import { ZOOMER } from './zoomer';
import './index.css';

const App = () => {
	const [show, setShow] = useState(false);
	const [message, setMessage] = useState(true);
	const [theme, setTheme] = useState('dark');

	useEffect(() => {
		ZOOMER('original', 'zoomed', 'lens', show);
	}, [show, message]);

	useEffect(() => {
		setTimeout(() => {
			setMessage(false);
		}, 4000);
	});

	return (
		<div className='flex flex-col items-center justify-center h-screen bg-gray-900 overflow-hidden text-white'>
			{!message && (
				<div
					className={`flex items-center justify-center mb-10 text-3xl font-bold tracking-wide transition-all duration-200`}>
					ZOOMER!
				</div>
			)}
			<div
				className={`flex items-center justify-center  ${
					message
						? 'opacity-100 scale-100 h-screen w-screen'
						: 'opacity-0 scale-0 h-0 w-0'
				}`}>
				<Message />
			</div>
			<div className='flex flex-col sm:flex-row items-center justify-center space-y-20 sm:space-y-0 sm:space-x-10'>
				<div
					className={`flex items-center justify-center ${
						show ? 'sm:w-1/2' : 'sm:w-full'
					} transition-all duration-200 ${
						message === false ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
					}`}>
					<div
						className='relative'
						onMouseOver={() => setShow(true)}
						onMouseLeave={() =>
							setTimeout(() => {
								setShow(false);
							}, 300)
						}>
						<Suspense>
							<img
								id='original'
								src='/revolt.jpg'
								alt=''
								className='w-[200px] sm:w-[500px] rounded-lg'
							/>
						</Suspense>
						<div id='lens'></div>
					</div>
				</div>
				<div
					className={`flex items-center justify-center  border-2 border-black border-opacity-5 rounded-lg shaow-xl ${
						show
							? 'opacity-100 scale-100 sm:w-1/2 h-full'
							: 'opacity-0 scale-0 w-0 h-0'
					}`}>
					<div
						id='zoomed'
						className={`w-[200px] h-[135px] sm:w-[500px] sm:h-[330px] rounded-lg  `}></div>
				</div>
			</div>
		</div>
	);
};

export default App;

const Message = () => {
	return (
		<div
			className={`relative flex flex-col bg-blue-900 text-white w-[90%] sm:w-1/3 h-auto text-center py-4 rounded-lg transition-all duration-100 font-bold px-2 text-sm translate-y-20`}>
			<span className='text-3xl'>🦁🦁🦁</span>
			<span>ON PHONE,TAP IMAGE AREA TO ZOOM</span>
			<span>ON DESKTOP, HOVER IAMGE AREA TO ZOOM</span>
		</div>
	);
};
