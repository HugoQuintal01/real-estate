import React from "react";
import Cover from '../components/cover/Cover';
import Highlight from '../components/highlight/Highlight';
import HighlightArrendar from '../components/highlightArrendar/HighlightArrendar';
import HighlightComprar from '../components/highlightComprar/HighlightComprar';

const Home = () => {
    return (
        <>
            <Cover />
            <Highlight />
            <HighlightComprar />
            <HighlightArrendar />
        </>
    );
};

export default Home;
