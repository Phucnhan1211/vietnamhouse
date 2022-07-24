import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useState, useEffect, useRef, useCallback } from 'react';
import config from '~/config';

import { NavLink } from 'react-router-dom';
import BtnSlider from './BtnSlider';
import {
    ArrowLeft,
    ArrowRight,
    BedIcon,
    HeartIcon,
    Location,
    PlusSquareIcon,
    ResetIcon,
    SearchIcon,
    SizeIcon,
} from '~/components/Icons';
import isn1 from '~/assets/Imgs/isn1.jpg';
import isn2 from '~/assets/Imgs/isn2.jpg';
import isn3 from '~/assets/Imgs/isn3.jpg';
import isn4 from '~/assets/Imgs/isn4.jpg';
import isn5 from '~/assets/Imgs/isn5.jpg';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Home() {
    const dataSlider = [
        {
            id: 1,
            image: <img className={cx('image')} alt="" src={isn1} />,
        },
        {
            id: 2,

            image: <img className={cx('image')} alt="" src={isn2} />,
        },
        {
            id: 3,

            image: <img className={cx('image')} alt="" src={isn3} />,
        },
        {
            id: 4,

            image: <img className={cx('image')} alt="" src={isn4} />,
        },
        {
            id: 5,

            image: <img className={cx('image')} alt="" src={isn5} />,
        },
    ];
    const dataSlider1 = [
        {
            id: 1,
            image: <img className={cx('image')} alt="" src={isn1} />,
        },
        {
            id: 2,

            image: <img className={cx('image')} alt="" src={isn2} />,
        },
        {
            id: 3,

            image: <img className={cx('image')} alt="" src={isn3} />,
        },
        {
            id: 4,

            image: <img className={cx('image')} alt="" src={isn4} />,
        },
        {
            id: 5,

            image: <img className={cx('image')} alt="" src={isn5} />,
        },
    ];
    const dataSlider2 = [
        {
            id: 1,
            image: <img className={cx('image')} alt="" src={isn1} />,
        },
        {
            id: 2,

            image: <img className={cx('image')} alt="" src={isn2} />,
        },
        {
            id: 5,

            image: <img className={cx('image')} alt="" src={isn3} />,
        },
        {
            id: 3,

            image: <img className={cx('image')} alt="" src={isn4} />,
        },
        {
            id: 4,

            image: <img className={cx('image')} alt="" src={isn5} />,
        },
    ];
    const dataSlideall = [
        {
            id: 1,
            children: dataSlider,
            name: 'Brilliant apartment in The Nine Pham Van Dong Str',
            location: 'Cau Giay',
            beedroom: 3,
            price: '$1400',
            size: '144m',
        },
        {
            id: 2,
            children: dataSlider1,
            name: '2BR Apartment in Vinhomes Metropolis',
            location: 'Ba Dinh',
            beedroom: 4,
            price: '$1450',
            size: '100m',
        },
        {
            id: 3,
            children: dataSlider2,
            name: 'Serviced apartment for rent in Ba Dinh district',
            location: 'Ba Dinh',
            beedroom: 2,
            price: '$1450',
            size: '100m',
        },
    ];
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === dataSlider.length) {
            setSlideIndex(1);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length);
        }
    };

    const moveDot = (index) => {
        setSlideIndex(index);
    };

    const min = 0;
    const max = 5000;
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(null);
    const maxValRef = useRef(null);
    const range = useRef(null);

    // Convert to percentage
    const getPercent = useCallback((value) => Math.round(((value - min) / (max - min)) * 100), [min, max]);

    // Set width of the range to decrease from the left side
    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('banner')}></div>
                <div className={cx('container-search')}>
                    <div className={cx('content-center')}>
                        <div className={cx('searchform')}>
                            <ul className={cx('nav')}>
                                <li>
                                    <NavLink
                                        to={config.routes.home}
                                        className={(nav) => cx('navre', { active: nav.isActive })}
                                    >
                                        Residence
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={config.routes.office}
                                        className={(nav) => cx(cx('navre'), { active: nav.isActive })}
                                    >
                                        Office
                                    </NavLink>
                                </li>
                            </ul>
                            <div className={cx('tab-content')}>
                                <div className={cx('tab-pane')}>
                                    <form>
                                        <div className={cx('group-control')}>
                                            <div className={cx('row')}>
                                                <div className={cx('order-md1')}>
                                                    <div className={cx('form-input-group')}>
                                                        <input
                                                            type="text"
                                                            id="mySearch"
                                                            placeholder="Keyword (e.g. Vinhomes)"
                                                            name="residence_keyword"
                                                            className={cx('form-control')}
                                                        ></input>
                                                    </div>
                                                </div>
                                                <div className={cx('order-md2')}>
                                                    <div className={cx('side-bar')}>
                                                        <div className={cx('rent-side')}>
                                                            <p className={cx('rent')}>Rent</p>
                                                        </div>
                                                        <div className={cx('slide-prices')}>
                                                            <div className={cx('slide-container')}>
                                                                <div className={cx('input-range-component')}>
                                                                    <div className={cx('range-thumb-zindex-3')}>
                                                                        <input
                                                                            type="range"
                                                                            min={min}
                                                                            max={max}
                                                                            value={minVal}
                                                                            ref={minValRef}
                                                                            onChange={(event) => {
                                                                                const value = Math.min(
                                                                                    +event.target.value,
                                                                                    maxVal - 50,
                                                                                );
                                                                                setMinVal(value);
                                                                                event.target.value = value.toString();
                                                                            }}
                                                                            className={cx('thumb-zindex-3', {
                                                                                'thumb-zindex-5': minVal > max - 100,
                                                                            })}
                                                                        />
                                                                        <span className={cx('range-label1')}>
                                                                            ${minVal}
                                                                        </span>
                                                                    </div>
                                                                    <div className={cx('range-thumb-zindex-4')}>
                                                                        <input
                                                                            type="range"
                                                                            min={min}
                                                                            max={max}
                                                                            value={maxVal}
                                                                            ref={maxValRef}
                                                                            onChange={(event) => {
                                                                                const value = Math.max(
                                                                                    +event.target.value,
                                                                                    minVal + 50,
                                                                                );
                                                                                setMaxVal(value);
                                                                                event.target.value = value.toString();
                                                                            }}
                                                                            className={cx('thumb-zindex-4')}
                                                                        />
                                                                        <div className={cx('range-label2')}>
                                                                            ${maxVal}
                                                                        </div>
                                                                    </div>
                                                                    <div className={'slider'}>
                                                                        <div className={cx('status-track')}></div>
                                                                        <div
                                                                            ref={range}
                                                                            className={cx('slider-range')}
                                                                        ></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={cx('slide-price-numner')}>
                                                                <span className={cx('min')}>$0</span>
                                                                <span className={cx('max')}>$5000~</span>
                                                            </div>
                                                        </div>
                                                        <div className={cx('units')}>
                                                            <span> 1046</span>
                                                            <span className={cx('units-text')}>Total Units</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('row')}>
                                                <div className={cx('col-md1')}>
                                                    <div className={cx('col-6')}>
                                                        <div className={cx('form-input-selected')}>
                                                            <select className={cx('control-form')}>
                                                                <option className={cx('option-form')} value="1">
                                                                    Hanoi
                                                                </option>
                                                                <option className={cx('option-form')} value="2">
                                                                    HCM
                                                                </option>
                                                                <option className={cx('option-form')} value="3">
                                                                    Hai Phong
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className={cx('col-6')}>
                                                        <div className={cx('form-checkbox-selected')}>District</div>
                                                    </div>
                                                </div>
                                                <div className={cx('col-md2')}>
                                                    <div className={cx('col-8')}>
                                                        <div className={cx('form-checkbox-selected')}>
                                                            Property Type
                                                        </div>
                                                    </div>
                                                    <div className={cx('col-8')}>
                                                        <div className={cx('form-checkbox-selected')}>Bedroom</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('row')}>
                                                <div className={cx('col-more')}>
                                                    <div className={cx('more-conditions')}>
                                                        <span>
                                                            <PlusSquareIcon />
                                                            <span className={cx('advance-text')}> more filters</span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className={cx('col-search')}>
                                                    <div className={cx('btn-search-home')}>
                                                        <div className={cx('btn-submit-home')}>
                                                            <Button primary large leftIcon={<SearchIcon />}>
                                                                Search
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    <div className={cx('col-8')}>
                                                        <div className={cx('btn-reset-home')}>
                                                            <Button text leftIcon={<ResetIcon />}>
                                                                Reset
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('background-gray')}>
                    <div className={cx('latest-properties')}>
                        <div className={cx('row-latest')}>
                            <div className={cx('col-title')}>
                                <div className={cx('block-title')}>
                                    <h2 className={cx('title')}> latest properties</h2>
                                </div>

                                <div className={cx('show-all')}>
                                    <span className={cx('all')}>all</span>

                                    <div className={cx('arrowleft')}>
                                        <ArrowLeft />
                                    </div>
                                    <div className={cx('arrowright')}>
                                        <ArrowRight />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-block')}>
                                <div className={cx('owl-home')}>
                                    {dataSlideall.map((slider, id) => {
                                        return (
                                            <div key={id} className={cx('owl-stage')}>
                                                <div className={cx('owl-item')}>
                                                    <div className={cx('col-item')}>
                                                        <div className={cx('block-inner')}>
                                                            <div className={cx('block-image')}>
                                                                <div className={cx('thumbail-slides')}>
                                                                    <div className={cx('button-like')}>
                                                                        <HeartIcon />
                                                                    </div>
                                                                    {dataSlideall.map((children, index) => {
                                                                        return (
                                                                            <div
                                                                                key={index}
                                                                                className={cx(
                                                                                    slideIndex === index + 1
                                                                                        ? 'slide-active'
                                                                                        : 'slide',
                                                                                )}
                                                                            >
                                                                                {children.image}
                                                                            </div>
                                                                        );
                                                                    })}
                                                                    <div className={cx('button-slider')}>
                                                                        <BtnSlider
                                                                            moveSlide={nextSlide}
                                                                            direction={'next'}
                                                                        />
                                                                        <BtnSlider
                                                                            moveSlide={prevSlide}
                                                                            direction={'prev'}
                                                                        />
                                                                    </div>

                                                                    <div className={cx('container-dots')}>
                                                                        {Array.from({ length: 5 }).map(
                                                                            (item, index) => (
                                                                                <div
                                                                                    key={index}
                                                                                    onClick={() => moveDot(index + 1)}
                                                                                    className={cx(
                                                                                        slideIndex === index + 1
                                                                                            ? 'dot-active'
                                                                                            : 'dot',
                                                                                    )}
                                                                                ></div>
                                                                            ),
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className={cx('block-info')}>
                                                                <div className={cx('block-text')}>
                                                                    <h3>{slider.name}</h3>
                                                                    <div className={cx('property-info')}>
                                                                        <ul>
                                                                            <li className={cx('icon-district')}>
                                                                                <Location />
                                                                                {slider.location}
                                                                            </li>
                                                                            <li className={cx('icon-district')}>
                                                                                <BedIcon /> {slider.beedroom}
                                                                                <span>Bedrooms</span>
                                                                            </li>
                                                                        </ul>
                                                                        <div className={cx('info-residence')}>
                                                                            <div className={cx('price')}>
                                                                                {slider.price}
                                                                                <span>/month</span>
                                                                            </div>
                                                                            <div className={cx('size')}>
                                                                                <SizeIcon />
                                                                                {slider.size}
                                                                                <sup>2</sup>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('latest-properties')}>
                        <div className={cx('row-latest')}>
                            <div className={cx('col-title')}>
                                <div className={cx('block-title')}>
                                    <h2 className={cx('title')}> hot properties</h2>
                                </div>

                                <div className={cx('show-all')}>
                                    <span className={cx('all')}>all</span>

                                    <div className={cx('arrowleft')}>
                                        <ArrowLeft />
                                    </div>
                                    <div className={cx('arrowright')}>
                                        <ArrowRight />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-block')}>
                                <div className={cx('owl-home')}>
                                    {dataSlideall.map((slider, id) => {
                                        return (
                                            <div key={id} className={cx('owl-stage')}>
                                                <div className={cx('owl-item')}>
                                                    <div className={cx('col-item')}>
                                                        <div className={cx('block-inner')}>
                                                            <div className={cx('block-image')}>
                                                                <div className={cx('thumbail-slides')}>
                                                                    <div className={cx('button-like')}>
                                                                        <HeartIcon />
                                                                    </div>
                                                                    {dataSlideall.map((children, index) => {
                                                                        return (
                                                                            <div
                                                                                key={index}
                                                                                className={cx(
                                                                                    slideIndex === index + 1
                                                                                        ? 'slide-active'
                                                                                        : 'slide',
                                                                                )}
                                                                            >
                                                                                {children.image}
                                                                            </div>
                                                                        );
                                                                    })}
                                                                    <div className={cx('button-slider')}>
                                                                        <BtnSlider
                                                                            moveSlide={nextSlide}
                                                                            direction={'next'}
                                                                        />
                                                                        <BtnSlider
                                                                            moveSlide={prevSlide}
                                                                            direction={'prev'}
                                                                        />
                                                                    </div>

                                                                    <div className={cx('container-dots')}>
                                                                        {Array.from({ length: 5 }).map(
                                                                            (item, index) => (
                                                                                <div
                                                                                    key={index}
                                                                                    onClick={() => moveDot(index + 1)}
                                                                                    className={cx(
                                                                                        slideIndex === index + 1
                                                                                            ? 'dot-active'
                                                                                            : 'dot',
                                                                                    )}
                                                                                ></div>
                                                                            ),
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className={cx('block-info')}>
                                                                <div className={cx('block-text')}>
                                                                    <h3>{slider.name}</h3>
                                                                    <div className={cx('property-info')}>
                                                                        <ul>
                                                                            <li className={cx('icon-district')}>
                                                                                <Location />
                                                                                {slider.location}
                                                                            </li>
                                                                            <li className={cx('icon-district')}>
                                                                                <BedIcon /> {slider.beedroom}
                                                                                <span>Bedrooms</span>
                                                                            </li>
                                                                        </ul>
                                                                        <div className={cx('info-residence')}>
                                                                            <div className={cx('price')}>
                                                                                {slider.price}
                                                                                <span>/month</span>
                                                                            </div>
                                                                            <div className={cx('size')}>
                                                                                <SizeIcon />
                                                                                {slider.size}
                                                                                <sup>2</sup>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
