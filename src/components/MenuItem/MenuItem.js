import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
import PropTypes from 'prop-types';

import images from '~/assets/images';
const cx = classNames.bind(styles);
function MenuItem({ data }) {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('logoen')}>
                    <img alt="English" src={images.english} />
                </div>
                <div className={cx('nameen')}>
                    <p className={cx('name')}>English</p>
                </div>
            </div>
        </>
    );
}
MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default MenuItem;
