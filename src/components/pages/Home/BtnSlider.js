import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

export default function BtnSlider({ direction, moveSlide }) {
    return (
        <button onClick={moveSlide} className={cx(direction === 'prev' ? 'btn-slide-next' : 'btn-slide-prev')}>
            <img alt="" src={direction === 'next' ? images.chevronnext : images.chevronprev} />
        </button>
    );
}
