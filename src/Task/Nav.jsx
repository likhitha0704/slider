import React, { useState } from 'react';
import download from '../assets/download.jpg';
import Burger from '../assets/Burger.jpg';
import coke from '../assets/coke.jpg';

const images = [Burger, download, coke]; // Array of images

const Nav = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the previous image
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    // Function to go to the next image
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div id='nav' style={styles.navContainer}>
            <button onClick={prevImage} style={styles.arrow}>⬅</button>
            <img src={images[currentIndex]} width={200} height={400} alt="Displayed" style={styles.image} />
            <button onClick={nextImage} style={styles.arrow}>➡</button>
        </div>
    );
};

// Basic CSS styles
const styles = {
    navContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '600px',
        gap: '10px'
    },
    image: {
        width:'300px',
        height:'300px'
    },
    arrow: {
        background: 'grey',
        color: 'white',
        border: 'none',
        fontSize: '24px',
        padding: '10px',
        cursor: 'pointer',
        borderRadius: '50%',
    }
};

export default Nav;
