import Tippy from '@tippyjs/react/headless';
import styles from './HeaderTop.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { ChevronDownIcon, GlobeIcon, Location } from '~/components/Icons';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function HeaderTop() {
    const languages = [
        {
            id: 1,
            logo: <img alt="English" src={images.english} />,
            name: 'English',
        },
        {
            id: 2,
            logo: <img alt="Japan" src={images.japan} />,
            name: 'Japan',
        },
    ];
    const locations = [
        {
            id: 1,
            name: 'Hanoi',
        },
        {
            id: 2,
            name: 'Ho Chi Minh',
        },
        {
            id: 3,
            name: 'Hai Phong',
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-top')}>
                <div className={cx('container')}>
                    <div className={cx('nav-menu-top')}>
                        <ul className={cx('menu-top')}>
                            <li className={cx('list')}>
                                <Tippy
                                    interactive
                                    render={(attrs) => (
                                        <div className={cx('menulanguage')} tabIndex="-1" {...attrs}>
                                            <PopperWrapper>
                                                {languages.map((language, id) => {
                                                    return (
                                                        <div key={id} className={cx('wrapperlanguage')}>
                                                            <div className={cx('logolanguage')}>{language.logo}</div>
                                                            <div className={cx('listlanguage')}>
                                                                <p className={cx('namelanguage')}>{language.name}</p>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </PopperWrapper>
                                        </div>
                                    )}
                                >
                                    <div className={cx('item-link')}>
                                        <GlobeIcon />
                                        <span className={cx('language')}>English</span>
                                        <ChevronDownIcon />
                                    </div>
                                </Tippy>
                            </li>
                            <li className={cx('list')}>
                                <Tippy
                                    interactive
                                    render={(attrs) => (
                                        <div className={cx('menulocation')} tabIndex="-1" {...attrs}>
                                            <PopperWrapper>
                                                {locations.map((location, id) => {
                                                    return (
                                                        <div key={id} className={cx('wrapperlocation')}>
                                                            <div className={cx('listlocation')}>
                                                                <p className={cx('namelocation')}>{location.name}</p>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </PopperWrapper>
                                        </div>
                                    )}
                                >
                                    <div className={cx('item-link')}>
                                        <Location />
                                        <span className={cx('location')}>Hanoi</span>
                                        <ChevronDownIcon />
                                    </div>
                                </Tippy>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderTop;
