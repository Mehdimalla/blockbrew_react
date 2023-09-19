//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { width } from "../styles/responsiveSize";

// create a component
export const ListShimmerComponent = () => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          // marginHorizontal: 20,
          paddingTop: 15,
          paddingBottom: 2,
        }}
      >
        <View style={{ width: 50, height: 50, borderRadius: 50 }} />
        <View style={{ marginLeft: 15, justifyContent: "space-between" }}>
          <View
            style={{
              width: width - 140,
              height: 11,
              borderRadius: 4,
              marginVertical: 6,
            }}
          />
          <View
            style={{
              marginTop: 6,
              width: width - 200,
              height: 11,
              borderRadius: 4,
              marginVertical: 6,
            }}
          />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export const RectangularShimmerComponent = () => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          height: 120,
          width: width - 50,
          alignSelf: "center",
          borderRadius: 4,
        }}
      />
    </SkeletonPlaceholder>
  );
};

export const RowBoxShimmerComponent = () => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            paddingLeft: 10,
            paddingRight: 20,
            paddingVertical: 7,
            borderRadius: 5,
            marginRight: 15,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ height: 50, width: 50, borderRadius: width / 2 }} />
            <View style={{ marginLeft: 7, justifyContent: "space-evenly" }}>
              <View
                style={{
                  width: width / 6.5,
                  height: 9,
                  borderRadius: 4,
                }}
              />
              <View
                style={{
                  marginTop: 6,
                  width: width / 8,
                  height: 9,
                  borderRadius: 4,
                }}
              />
            </View>
          </View>
          <View
            style={{
              width: width / 4,
              height: 15,
              borderRadius: 4,
              marginTop: 20,
            }}
          />
          <View
            style={{
              width: width / 4,
              height: 15,
              borderRadius: 4,
              marginTop: 10,
              marginBottom: 38,
            }}
          />
          <View
            style={{
              height: 12,
              borderRadius: 4,
              marginBottom: 12,
            }}
          />
        </View>

        <View
          style={{
            borderWidth: 1,
            paddingLeft: 10,
            paddingRight: 20,
            paddingVertical: 7,
            borderRadius: 5,
            marginRight: 15,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ height: 50, width: 50, borderRadius: width / 2 }} />
            <View style={{ marginLeft: 7, justifyContent: "space-evenly" }}>
              <View
                style={{
                  width: width / 6.5,
                  height: 9,
                  borderRadius: 4,
                }}
              />
              <View
                style={{
                  marginTop: 6,
                  width: width / 8,
                  height: 9,
                  borderRadius: 4,
                }}
              />
            </View>
          </View>
          <View
            style={{
              width: width / 4,
              height: 15,
              borderRadius: 4,
              marginTop: 20,
            }}
          />
          <View
            style={{
              width: width / 4,
              height: 15,
              borderRadius: 4,
              marginTop: 10,
              marginBottom: 38,
            }}
          />
          <View
            style={{
              height: 12,
              borderRadius: 4,
              marginBottom: 12,
            }}
          />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};
export const SignleLineShimmerComponent = () => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 20,
          paddingTop: 2,
          paddingBottom: 2,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{ width: 50, height: 50, borderRadius: 50, marginRight: 15 }}
          />
          <View>
            <View
              style={{
                width: 100,
                height: 11,
                borderRadius: 4,
                marginVertical: 6,
              }}
            />
            <View
              style={{
                marginTop: 6,
                width: 100,
                height: 11,
                borderRadius: 4,
                marginVertical: 6,
              }}
            />
          </View>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

// define your styles
const styles = StyleSheet.create({});
