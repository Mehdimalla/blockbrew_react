//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native'
// create a component
const ConTentLoader = ({
   
}) => {
    const rows = 1
    const columns = 5
    const coverHeight = 200
    const coverWidth = 120
    const padding = 10
    const speed = 1
    const coverHeightWithPadding = coverHeight + padding
    const coverWidthWithPadding = coverWidth + padding
    const initial = 35
    const covers = Array(columns * rows).fill(2)
    const MyLoader = () => (

        <ContentLoader
            animate={true}
            rtl={2}
            speed={speed}
            width={columns * coverWidthWithPadding}
            height={rows * coverHeightWithPadding}
            // backgroundColor={"lightgrey"}
            // foregroundColor={"lightgrey"}
            viewBox="0 20 500 50">
            {covers.map((g, i) => {
                let vy = Math.floor(i / columns) * coverHeightWithPadding + initial
                let vx = (i * coverWidthWithPadding) % (columns * coverWidthWithPadding)
                return (
                    <Rect
                        key={i}
                        x={vx}
                        y={vy}
                        rx="10"
                        ry="10"
                        width={coverWidth}
                        height={coverHeight}
                    />
                )
            })}
        </ContentLoader>

    );

    return (
        <>
            <MyLoader />
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
});

//make this component available to the app
export default ConTentLoader;

