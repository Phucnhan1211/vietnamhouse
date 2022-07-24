import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './DefaultLayout.module.scss';
import HeaderTop from '../components/HeaderTop/HeaderTop';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <HeaderTop />
            <Header />
            <div className={cx('container')}> {children} </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
