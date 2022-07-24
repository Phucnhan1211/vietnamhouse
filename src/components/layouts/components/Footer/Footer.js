import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import facebook from '~/assets/images/facebook.png';
import { EmailIcon, Location, PhoneCall } from '~/components/Icons';
const cx = classNames.bind(styles);
function Footer() {
    const locations = [
        {
            id: 1,
            name: 'Hanoi head office',
            address: 'Unit 602, 6th Floor, No. 11 Tran Hung Dao Street, Hoan Kiem District, Ha Noi',
            phone: '(+84) 24 - 3944 - 9488',
            email: 'info@vietnamhousing.vn',
        },
        {
            id: 2,
            name: 'Hai Phong office',
            address: '1st Floor, 315-HK03, Waterfront City, Vinh Niem Ward, Le Chan District, Hai Phong',
            phone: '(+84) 225 - 376 - 1639',
            email: 'info@vietnamhousing.vn',
        },
        {
            id: 1,
            name: 'Ho chi minh office',
            address: '7th Floor, No.57-59 Ho Tung Mau Street, District 1, Hochiminh City',
            phone: '(+84) 28 - 3821 - 7368',
            email: 'info@vietnamhousing.vn',
        },
        {
            id: 1,
            name: 'Tokyo office',
            address: '6th Floor, JS Ichigaya Building, 5-1, Gobancho, Chiyoda-ku, Tokyo, Japan',
            phone: '(+81) 3 - 6261 - 5166',
            email: 'info@vietnamhousing.vn',
        },
    ];
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('footer')}>
                <div className={cx('container')}>
                    <div className={cx('rowoffice')}>
                        <div className={cx('col-md-3')}>
                            {locations.map((location, id) => {
                                return (
                                    <div className={cx('block')} key={id}>
                                        <h4>{location.name}</h4>
                                        <div className={cx('block-location')}>
                                            <div className={cx('row')}>
                                                <div className={cx('col-md-2')}>
                                                    <Location />
                                                </div>
                                                <div className={cx('col-md-10')}>
                                                    <span>{location.address}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('block-text')}>
                                            <div className={cx('row')}>
                                                <div className={cx('col-md-2')}>
                                                    <PhoneCall />
                                                </div>
                                                <div className={cx('col-md-10')}>
                                                    <span>{location.phone}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('block-email')}>
                                            <div className={cx('row')}>
                                                <div className={cx('col-md-2')}>
                                                    <EmailIcon />
                                                </div>
                                                <div className={cx('col-md-10')}>
                                                    <span>{location.email}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className={cx('footer-bottom')}>
                    <div className={cx('container-bottom')}>
                        <div className={cx('social')}>
                            <a href="https://www.facebook.com/ISNvietnamhousing" target="__blank">
                                <img className={cx('facebooklogo')} src={images.facebooklogo} alt="Logofb" />
                                <img className={cx('facebook')} src={facebook} alt="Fb" />
                            </a>
                        </div>
                        <div className={cx('copyright')}>
                            <div className={cx('copyrighttext')}>© 2020 ISN Corporation. All rights reserved.</div>
                        </div>
                        <div
                            className={cx('scroll-top')}
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}
                        >
                            <img src={images.chevronup} alt="" className={cx('icon-top')} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
