import React, { useState } from 'react';

const Sidebar = (props: any) => {

	interface menuType {
		icon: string,
		name: string
	}

	let menuAData: menuType[] = [
		{
			icon: "./icons/dashboard.svg",
			name: "Dashboard"
		},
		{
			icon: "./icons/overview.svg",
			name: "Overview"
		},
		{
			icon: "./icons/chat.svg",
			name: "Chat"
		},
		{
			icon: "./icons/team.svg",
			name: "Team"
		}
	]

	let menuBData: menuType[] = [
		{
			icon: "./icons/task.svg",
			name: "Tasks"
		},
		{
			icon: "./icons/reports.svg",
			name: "Reports"
		},
		{
			icon: "./icons/setting.svg",
			name: "Settings"
		}
	]

	return (
		<div className={`in-nav__wrap flex-shrink-0 d-flex flex-column justify-content-between p-3 ${props.showSidebar && "in-nav__wrap-close"}`}>
			<div className='in-nav__top'>
				<div className='d-flex align-items-center'>
					<a className='in-nav__logo-wrap w-100'>
						<span className='in-nav__logo'>Instill</span>
					</a>
					<span onClick={props.closeSideBar} className={`d-lg-none ${props.showSidebar && ""}`}>
						<img src='./icons/close.svg' />
					</span>
				</div>
				<hr className='in-divider' />
				<div className='in-card in-card__teams in-card__auto'>
					<div className='in-card__wrap d-flex align-items-center'>
						<div className='d-flex w-100'>
							<div className='in-profile__img in-profile__img-small in-profile__img--text text-uppercase flex-shrink-0'>
								<span>i</span>
							</div>
							<div className='in-card__content px-1'>
								<div className='in-card__name in-title__block in-text--light'>Instill</div>
								<div className='in-card__para in-para in-text--light opacity-4'>general team</div>
							</div>
						</div>
						<div className='in-card__icon-wrap pr-1'>
							<span className=''><img src='./icons/navigation.svg' /></span>
						</div>
					</div>
				</div>
				<div className='pt-3'>
					<ul className='in-nav__links pb-3'>
						{
							menuAData && menuAData.map((menu,i) => {
								return (
									<li key={i} className='in-nav__link in-nav__link-active'>
										<a className='d-flex align-items-center'>
											<span className=''><img src={menu.icon} /></span>
											<span className='pl-1 in-nav__link-text'>{menu.name}</span>
										</a>
									</li>
								)
							})
						}
					</ul>
					<div>
						<div className='in-para in-text--light opacity-4 text-uppercase pb-2'>Shortcut</div>
						<ul className='in-nav__links'>
							{
								menuBData && menuBData.map((menu,i) => {
									return (
										<li key={i} className='in-nav__link in-nav__link-active'>
											<a className='d-flex align-items-center'>
												<span className=''><img src={menu.icon} /></span>
												<span className='pl-1 in-nav__link-text'>{menu.name}</span>
											</a>
										</li>
									)
								})
							}
							
						</ul>
					</div>
				</div>
			</div>
			<div className='in-nav__bottom pt-4'>
				<div className='in-card in-card__storage in-card__auto'>
					<div className='in-card__wrap'>
						<div className='d-flex justify-content-space-between mb-1'>
							<div>
								<div className='in-title__block in-text--light in-nav__storage-title'>Storage</div>
								<div className='in-title__block in-text--light'>3.4 GB <span className='opacity-4'>of 15 GB</span></div>
							</div>
							<div className='in-para in-text--fade opacity-7'>Upgrade</div>
						</div>
						<div className='in-progress__bar-outline'>
							<span className='in-progress__bar'></span>
						</div>
					</div>
				</div>
				<hr className='in-divider' />
				<div className='in-nav__profile d-flex align-items-center justify-content-space-between'>
					<div className='d-flex align-items-center'>
						<div className='in-profile__img flex-shrink-0'>
							<img src="./imgs/nav/profile-img.jpg" alt="profile-img" />
						</div>
						<div className='in-nav__profile-name in-title__section in-text--light pl-1'>Jane Smith</div>
					</div>
					<div className='in-card__icon-wrap'>
						<span className=''><img src='./icons/navigation.svg' /></span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sidebar