import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import config from '~/config';
import Tippy from '@tippyjs/react/headless';
import { Link, NavLink } from 'react-router-dom';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import { ChevronDownIcon, FeatherClock, FeatherHeart } from '~/components/Icons';
// import Menu, { MenuItem } from './Menu';
const cx = classNames.bind(styles);
function Header() {
    const years = [
        {
            id: 1,
            year: '2022',
            href: 'https://crm.vietnamhousing.vn/images/2022.pdf',
        },
        {
            id: 2,
            year: '2021',
            href: 'https://crm.vietnamhousing.vn/images/2021.pdf',
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-logo')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="VNHousing" />
                </Link>

                <div className={cx('navbar')}>
                    {/* <Menu>
                        <MenuItem to={config.routes.home} title="Home"></MenuItem>
                        <MenuItem to={config.routes.usefulinformation} title=" Useful Information"></MenuItem>
                        <MenuItem to={config.routes.blog} title="Blog"></MenuItem>
                        <MenuItem to={config.routes.forowners} title=" For Owners"></MenuItem>
                        <MenuItem to={config.routes.aboutisn} title="About ISN"></MenuItem>
                        <MenuItem to={config.routes.isnmagazine} title="ISN Magazine"></MenuItem>
                    </Menu> */}
                    <ul className={cx('navbar-item')}>
                        <li>
                            <NavLink
                                to={config.routes.home}
                                className={(nav) => cx('navbar-link', { active: nav.isActive })}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={config.routes.usefulinformation}
                                className={(nav) => cx('navbar-link', { active: nav.isActive })}
                            >
                                Useful Information
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={config.routes.blog}
                                className={(nav) => cx('navbar-link', { active: nav.isActive })}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={config.routes.forowners}
                                className={(nav) => cx('navbar-link', { active: nav.isActive })}
                            >
                                For Owners
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={config.routes.aboutisn}
                                className={(nav) => cx('navbar-link', { active: nav.isActive })}
                            >
                                About ISN
                            </NavLink>
                        </li>
                        <li className={cx('magazine')}>
                            <Tippy
                                interactive
                                placement="bottom"
                                render={(attrs) => (
                                    <div className={cx('menumagazine')} tabIndex="-1" {...attrs}>
                                        <PopperWrapper>
                                            {years.map((year, id) => {
                                                return (
                                                    <div key={id} className={cx('wrapperyears')}>
                                                        <div className={cx('listyears')}>
                                                            <a href={year.href} className={cx('year')} target="__blank">
                                                                {year.year}
                                                            </a>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <div className={cx('navbar-link-magazine')}>
                                    ISN Magazine
                                    <ChevronDownIcon />
                                </div>
                            </Tippy>
                        </li>
                    </ul>
                </div>
                <div className="favourite-history">
                    <ul className={cx('item-favourite-history')}>
                        <li>
                            <Link to={config.routes.favourites} className={cx('favourite-history-link')}>
                                <FeatherHeart />
                                <span className={cx('badgefavourites')}>1</span>
                                Favourites
                            </Link>
                        </li>
                        <li>
                            <Link to={config.routes.history} className={cx('favourite-history-link')}>
                                <FeatherClock />
                                <span className={cx('badgehistory')}>4</span>
                                History
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
